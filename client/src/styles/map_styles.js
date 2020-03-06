module.exports = {
    categories: {
      going_out: '#e31a1c'
    },

    lens : {
      'fill-color': '#007AFF',
      'fill-opacity': 0.4,
      'fill-outline-color': '#007AFF'
    },

    geolocateStyle : {
      position: 'absolute',
      right: 3,
      top: "8em",
      margin: 10,
      width: 30
    },

    top_marker: {
      // Icon Style
      "icon-size": [
        "interpolate",
        ["linear"], ["zoom"],
        8, 0.4,
        22, 100
      ],
    },

    marker_layout :  {
      // Icon Style
      "icon-image": ["to-string", ["get", "categories"]],
      "icon-padding": 1,
      "icon-size": [
        "case",
        [">", ["get", "aggregate_rating"], 4.9],
        0.7,
        [">", ["get", "aggregate_rating"], 3.9],
        0.6,
        [">", ["get", "aggregate_rating"], 3],
        0.4,
        // Fall back value
        0.2
      ],

      // TODO: Make sure important sorting variable is working
      "symbol-sort-key": ["get", "aggregate_rating"],
      // Text
      "text-field": ["to-string", ["get", "short_name"]],
      //"text-field": ["to-string", ["get", "top_vibe"]],
      "text-allow-overlap": false,
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
      "text-ignore-placement": false,
      "text-line-height": 1.0,
      "text-anchor": "bottom",
      "text-font": ["Roboto Condensed"],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8, 4,
        22, 16
      ],
      "text-offset": [0, -0.8],
      "text-padding": 1,
      "text-max-width": 10    ,
      'visibility': 'visible' 
    },

    marker_paint: { 
      'text-color': '#742395',
      'text-halo-color': '#FFFFFF',
      'text-halo-width' : 1.2
    },

    top_pick_layout: {
      // TODO: Make sure important sorting variable is working
      //"icon-image": "",
      "icon-image": ["to-string", ["get", "categories"]],
      "icon-size": [
        "interpolate",
        ["linear"],["zoom"],
        8, 0.4,
        22, ["get", "icon_size"]
      ],
      "symbol-sort-key": ["get", "average_score"],
      // Text
      "text-field": ["to-string", ["get", "short_name"]],
      "text-allow-overlap": false,
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
      "text-ignore-placement": false,
      "text-radial-offset" : [
        "interpolate",
        ["linear"], ["zoom"],
        8, 0.4,
        20, ["+", ["get", "icon_size"], 0.8]
      ],
      "text-font": ["Roboto Condensed Bold"],
      "text-line-height": 1.0,
      "text-letter-spacing": 0,
      "text-anchor" : "bottom",
      "text-justify": "center",
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8, 6,
        22, 20
      ],
      /*
      "text-offset": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8,
        ["literal", [0, -1]],
        22,
        ["literal", [0, - ["get, 'icon-size"]]]
      ],
      */
      "text-max-width": 8,
      'visibility': 'visible'

    },

    top_pick_paint: {
      'text-color': '#222222',
      'text-halo-color': '#FFFFFF',
      'text-halo-width': 1.2
    },

    top_vibe_layout: {
      // Text
      "text-field": ["to-string", ["get", "top_vibe"]],
      "text-font": ["Roboto Condensed Italic"],
      "text-justify" : "center",
      "text-anchor": "bottom",
      "text-allow-overlap": false,
      "icon-allow-overlap": true,
      "icon-ignore-placement": true,
      "text-ignore-placement": true,
      "symbol-sort-key": ["get", "average_score"],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8, 6,
        22, 20
      ],
      "text-radial-offset": [
        "interpolate",
        ["linear"], ["zoom"],
        8, 0.4,
        18, ["-", ["get", "icon_size"], 1.6]
      ],
      "text-max-width": 12
    },

    places_heatmap: {
      'heatmap-radius' : [
        "interpolate",
        ["linear"],
        ["zoom"],
          8, 1,
          10, 24,
          12, 40,
          13, 50,
          14, 70,
          20, 200
      ],
      'heatmap-opacity': [
        "interpolate",
        ["linear"],
        ["zoom"],
          8, 0.2,
          11, 0.3,
          20, 0.4
      ],
      // TODO: Scale this on the total number of results vs. size of area...
      'heatmap-intensity': [
        "interpolate",
        ["linear"],
        ["zoom"],
          8, 0.4,
          12, 0.2,
          14, 0.3,
          20, 0.5
      ],
      
      "heatmap-weight": [
          "interpolate",
          ["linear"],
          ["get", "aggregate_rating"],
          1, 0.2,
          8, 1
      ],
      
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0.2,
        "hsla(240, 80%, 94%, 0)",
        0.3,
        "hsla(286, 100%, 50%, 0.2)",
        0.4,
        "hsla(179, 100%, 50%, 0.6)",
        0.99,
        "hsla(50, 100%, 50%, 0.9)",
        /* The pink is too much? */
        1.2,
        "hsla(25, 100%, 50%, 0.8)" 
      ]
    },

    /*
    tile_layer_layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },

    tile_layer_paint: {
      'line-opacity': 0.6,
      'line-color': 'rgb(53, 175, 109)',
      'line-width': 2
    },
    */

    places_cluster: {
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#51bbd6",
        100,
        "#f1f075",
        750,
        "#f28cb1"
      ],
      'circle-opacity': 0.2,
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 2.4,
      'circle-radius': {
        property: 'point_count',
        type: 'interval',
        stops: [
          [0, 60],
          [100, 80],
          [750, 160]
        ]
      } 
    },

    events_circle: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        'base': 8,
        'stops': [[8, 4], [18, 20]] },
        'circle-color': '#C650CC',
        'circle-stroke-color': '#CC9423',
        'circle-stroke-width': 0.4,
        'circle-opacity': {
          'stops': [[8, 0.1], [20, 0.6]]
        },
        'circle-translate': [-2, -2]
    },

    places_circle: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': [
        "case",
        [">=", ["get", "aggregate_rating"], 3],
        2,
        [">=", ["get", "aggregate_rating"], 4],
        4,
        [">=", ["get","aggregate_rating"], 5],
        10,
        2
      ],
      'circle-color': "#e27012",
      'circle-stroke-color': '#FFFFFF',
      'circle-stroke-width': 0.4,
      'circle-opacity': {
        'stops': [[8, 0.2], [20, 0.2]]
      },
      'circle-translate': [-2, -2]
    }
}
