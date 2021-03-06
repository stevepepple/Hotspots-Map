import React from 'react'
import helpers from '../../helpers.js'

import shallowCompare from 'react-addons-shallow-compare'; // ES6

import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

import ReactMapGL, { MapContext } from 'react-map-gl'

export default class Markers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markers : [],
      popups: [],
      map: null
    }
  }

  static propTypes = {
    before: PropTypes.string
  }

  // Thid means the object is the child of a parent with this data.
  static contextTypes = {
    map: PropTypes.object,
  }

  componentWillMount() {
    const map = this.context
    
    console.log(this.props)
    let features = this.props.data.features;

    if (data && features != null && features.length > 0) {
      this.addMarkers(features, map)
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const { map } = this.context

    let update = shallowCompare(this, nextProps, nextState);
    
    if (update) {
    //  TODO: Do we need a function to update the markers without re-rendering?
    //  this.updateMarkers(map);
    }

    return update;
  }

  // TODO: will be deprecated in React 17
  componentWillReceiveProps(nextProps) {
    const { map } = this.context

    let update = shallowCompare(this.props, nextProps)

    // Only update if there's a differencce between features. 
    if (update && nextProps.data.features) {
      // TODO: this is probably not the proper way to handle this.
      this.removeMarkers(map)
      this.addMarkers(nextProps.data.features, map, nextProps.current_vibes);
    } 
  }
  
  addMarkers(features, map, current_vibes) {
      // TODO: Make minimum image size programic as a lower threshold
      let min_size = 30;
      // Create a scale based uopn the ranking score
      let max = helpers.getMax(features, 'score')

      let markers = features.map((feature) => {

        //TODO: write a reusable util function for geojson feature to object.
        let id = feature._id;
        let src = feature.properties.image;
        let likes = feature.properties.likes;
        let score = feature.properties.score;
        let orginal_score = feature.properties.score;
        let vibes = feature.properties.vibes;
        let name = feature.name ? feature.name : feature.properties.name;
        let link = feature.properties.link;
        let categories = feature.properties.categories;

        categories = categories.map(function(category){
          return category.toLowerCase();
        });

        // Update the size of markers based upon how well it matches the UI filter
        let match_bonus = 10;
        let vibe_matches = 0;
        
        //console.log("compare vibes: ", vibes, current_vibes)
        if(vibes && current_vibes) {
          //console.log('Item\'s vibes: ', vibes)
          vibe_matches = helpers.matchLists(vibes, current_vibes)
        }        
        let vibe_score = match_bonus * vibe_matches;
        score = score + vibe_score;

        var el = document.createElement('div');

        // Scale the marker based on score and zoom
        let size = helpers.scaleMarker(score, max, map.getZoom());
        //console.log("Marker size: ", size, score, max)
        el.style.width = size + 'px';
        el.style.height = size + 'px';

        el.className = 'marker';
        if (categories !== null) {
          el.className = el.className + ' ' + categories.join(' ')
        }

        el.setAttribute('id', id)
        el.setAttribute('data-id', id)
        el.setAttribute('data-title', name)

        // TODO: Only download image for top results?
        let img = document.createElement('img');
        img.setAttribute('width', '100%');
        img.setAttribute('height', '100%');
        img.setAttribute('rel', src);

        if(this.props.type === 'places') { 
          el.className = el.className + ' ' + 'place';
        }

        if (likes > 2) {
          el.className = el.className + ' popular '
        }

        // TODO: figure out a better way to cache image and reduce memory usage
        // TODO: also load image on hover, if it's note highly ranked
        let image = new Image();   
        
        let vibe = document.createElement("span");

        // Simply show the last vibe as a label if there are vibes
        vibe.innerText = (vibes !== undefined && vibes.length > 0) ? '#' + vibes[vibes.length -1] : '';
        vibe.className = 'vibe'
        vibe.style.width = size + 'px';

        // TODO: Figure out threashold for popularity and rating...
        if (size > (min_size * 1.8)  ) {

          // TODO: Make this reusable
          el.className = el.className + ' popular '

          image.src = src;
          el.append(vibe);
          el.append(img);
          image.onload = function () {
            img.src = this.src;
          }
        }

        // Create a popup, but don't add it to the map yet.
        let popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: true,
          offset: (size / 2), // shoudl be have the radius
          className: 'marker-popup'
        });

        let joined = this.state.popups.concat(popup);
        this.setState({ popups: joined })
        
        // Reference to props from outside event handlers
        let onclick = this.props.onclick;

        // This is triggered by the hover event in the list
        el.addEventListener('focus', function (event) {
          popup.setLngLat(feature.geometry.coordinates)
            .setHTML(name)
            .addTo(map);

          el.style.width = (size * 1.4) + 'px';
          el.style.height = (size * 1.4) + 'px';

        })

        el.addEventListener('mouseover', function (event) {
          
          popup.setLngLat(feature.geometry.coordinates)
            .setHTML(name)
            .addTo(map);
            
          el.style.width = (size * 1.6) + 'px';
          el.style.height = (size * 1.6) + 'px';

          image.src = src;

          el.append(img);
          image.onload = function () {
            img.src = this.src;
          }

        });

        el.addEventListener('mouseleave', function () {
          console.log("received mouse leave event")
          map.getCanvas().style.cursor = '';
          popup.remove();
          //removePopups();

          el.style.width = size  + 'px'
          el.style.height = size + 'px'

        });

        el.addEventListener('click', function (event) {
          // TODO: Handle unintential clicks on map
          onclick(id)
          
        });

        // add marker to map        
        let marker = new mapboxgl.Marker(el)
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
           
        return marker;
      });

      this.setState({markers : markers})
      
  }

  updateMarkers(map) {
    let markers = this.state.markers;

    markers.forEach(marker => {

      //console.log(marker._element)

    });

  }

  removeMarkers(map) {
    this.state.markers.forEach(marker => {
      marker.remove();
    });
  }

  removePopups(map) {
    this.state.popups.forEach(popup => {
        popup.remove();
    });
  }

  componentWillUnmount() {
    
    this.removeMarkers();

  }

  render() {
    return null
  }
}
