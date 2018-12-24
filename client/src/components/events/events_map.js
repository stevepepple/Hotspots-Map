import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as turf from '@turf/turf'
import debounce from 'lodash'

import Map from '../map.js'
import Source from '../map/source'
import Layer from '../map/layer'
import Styles from '../../styles/map_styles.js'
import Markers from '../map/markers.js';

//import Geocoder from "@mapbox/react-geocoder";
import { connect } from 'react-redux'

// TODO: load from common .env
import * as Constants from '../../constants.js'

class EventsMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            geojson: []
        }
    }

    componentDidMount(){
        let geojson = turf.featureCollection(this.props.data);

        this.setState({ geojson: geojson })
    }

    componentWillReceiveProps(nextProps){
        let geojson = turf.featureCollection(nextProps.data);

        this.setState({ geojson: geojson })
    }

    onSelect = function() {
        console.log('Geocoding result: ')
    }

    onMapChange = (position, props) => {
        this.props.setPosition(position.lat, position.lng)        
    }

    mapRef = React.createRef();

    render() {

        let has_data = this.props.data.length > 0;

        return (
            <div>
            { has_data? (
                <div className = 'map_container'>
                    <Map ref={this.mapRef} lat={this.props.lat} lng={this.props.lng} zoom={this.props.zoom} onMapChange={this.onMapChange} bearing={0} show_geocoder={true}>
                        <Markers type='events' data={this.state.geojson} onclick={this.props.onclick} zoom={this.props.zoom}/>
                        <Markers type='places' data={this.props.nearby_places} onclick={this.props.onclick} zoom={this.props.zoom} />
                        {/*
                            <Source id='places' data={this.props.nearby_places} layer='places'>
                                <Layer
                                    id='places'
                                    type='circle'
                                    paint={Styles.places_circle}
                                    isLayerChecked={true}
                                />
                            </Source>
                        */}
                    </Map>
                </div>
                ) : (
                <span> Loading Map</span>
            )}
            </div>
            
        );
    }
}

EventsMap.propTypes = {
    data: PropTypes.array,
    lat: PropTypes.number,
    lng: PropTypes.number,
    bearing: PropTypes.number,
    zoom: PropTypes.number,
    setPosition: PropTypes.function
};

const mapStateToProps = state => {
    console.log('State from store? ', state)
    return {
        nearby_places: state.nearby_places
    }
};

export default connect(mapStateToProps)(EventsMap);