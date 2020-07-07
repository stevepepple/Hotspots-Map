import "isomorphic-fetch";

// Use Thunks with Vibemap service
import VibeMap from '../services/VibeMap.js'

export const addFeature = feature => ({
  type: 'ADD_FEATURE',
  feature,
})

export const setDetailsShown = show => ({
  type: 'SET_DETAILS_SHOWN',
  show,
})

export const setShowList = show => ({
  type: 'SET_SHOW_LIST',
  show,
})

// Place Actions
export const detailsRequest = () => ({ type: "DETAILS_LOADING" });
export const detailsReceived = details => ({ type: "DETAILS_SUCCESS", payload: details });
export const detailsError = () => ({ type: "FETCH_DETAILS_FAILURE" });

export const requestCities = () => ({ type: "CITIES_LOADING" });
export const receivedCities = cities => ({ type: "SET_CITIES", cities });
export const citiesError = () => ({ type: "CITIES_ERROR" });

export const fetchCategories = () => {
  return (dispatch, getState) => {
    return new Promise(resolve => {

      VibeMap.getCategories().then(results => {
        dispatch(setAllCategories(results.data['place_categories']))
        resolve(results)
      })
    })
  }
}

export const fetchCities = () => (dispatch, getState) => {
  //dispatch(requestCities())
  return new Promise(resolve => {
    VibeMap.getCities()
      .then(response => response.data)
      .then(cities => {
        dispatch(setCities(cities))
        resolve(cities)
      })
      .catch(err => dispatch(citiesError(err)))
  })
};

export const fetchDetails = (id, type) => (dispatch, getState) => {
  return new Promise(resolve => {
    //dispatch(detailsRequest())

    VibeMap.getPlaceDetails(id, type)
      .then(response => response.data)
      .then(details => {
        resolve(details)

        console.log('DISPATCH DETAILS RECIEVED: ', details.properties)
        dispatch(detailsReceived(details))
      })
      .catch(err => dispatch(detailsError(err)))
  })
}

export const fetchVibes = () => {
  return (dispatch, getState) => {
    return new Promise(resolve => {

      VibeMap.getVibes().then(results => {
        //return console.log('fetchVibes...', results)
        dispatch(setSignatureVibes(results.data['signature_vibes']))
        dispatch(setAllVibes(results.data['all_vibes']))
        resolve(results)
      })
    })
  } 
}  

// Dispatch is called in getInitialProps of Details
export const getDetails = (id, type) => {

  return new Promise(resolve => {
    VibeMap.getPlaceDetails(id, type)
      .then(response => response.data)
      .then(details => resolve(details))

  })
}

export const setDetailsId = id => ({
  type: 'SET_DETAILS_ID',
  id,
})

export const setDetailsType = place_type => ({
  type: 'SET_DETAILS_TYPE',
  place_type,
})

export const setGuideDetails = details => ({
  type: 'SET_GUIDE_DETAILS',
  details,
})

export const setGuideMarkers = markers => ({
  type: 'SET_GUIDE_MARKERS',
  markers,
})

export const setMapReady = ready => ({
  type: 'SET_MAP_READY',
  ready,
})

export const setBoundsReady = ready => ({
  type: 'SET_BOUNDS_READY',
  ready,
})

export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
})

export const setCurrentLocation = location => ({
  type: 'SET_CURRENT_LOCATION',
  location,
})

export const setCurrentPage = page => ({
  type: 'SET_CURRENT_PAGE',
  page,
})

export const setTotalPages = pages => ({
  type: 'SET_TOTAL_PAGES',
  pages,
})

export const setHeaderSize = size => ({
  type: 'SET_HEADER_SIZE',
  size,
})

export const setWindowSize = size => ({  
  type: 'SET_WINDOW_SIZE',
  size,
})
export const setLayers = layers => ({
  type: 'SET_LAYERS',
  layers,
})

export const setLayersChanged = changed => ({
  type: 'SET_LAYERS_CHANGED',
  changed,
})

export const setMapSize = size => ({
  type: 'SET_MAP_SIZE',
  size,
})

export const setViewport = viewport => ({
  type: 'SET_VIEWPORT',
  viewport,
})

export const setBounds = bounds => ({
  type: 'SET_BOUNDS',
  bounds,
})

export const setPixelDistance = distance => ({
  type: 'SET_PIXEL_DISTANCE',
  distance,
})

export const setDensityBonus = bonus => ({
  type: 'SET_DENSITY_BONUS',
  bonus,
})

export const setCurrentItem = place => ({
  type: 'SET_CURRENT_ITEM',
  place,
})

export const setBearing = bearing => ({
  type: 'SET_BEARING',
  bearing,
})

export const setZoom = zoom => ({
  type: 'SET_ZOOM',
  zoom,
})

export const setDistance = distance => ({
  type: 'SET_DISTANCE',
  distance,
})

export const setActivity = activity => ({
  type: 'SET_ACTIVITY',
  activity,
})

export const setDays = days => ({
  type: 'SET_DAYS',
  days,
})

export const setSearchTerm = term => ({
  type: 'SET_SEARCH_TERM',
  term,
})

export const setAllVibes = allVibes => ({
  type: 'SET_ALL_VIBES',
  allVibes,
})

export const setAllCategories = allCategories => ({
  type: 'SET_ALL_CATEGORIES',
  allCategories,
})

export const setCurrentVibes = vibes => ({
  type: 'SET_CURRENT_VIBES',
  vibes,
})

export const setPlaceType = (value) => ({
  type: 'SET_PLACE_TYPE',
  value,
})

export const setMainVibe = vibe => ({
  type: 'SET_MAIN_VIBE',
  vibe,
})

export const setSignatureVibes = signatureVibes => ({
  type: 'SET_SIGNATURE_VIBES',
  signatureVibes,
})

export const setTopVibes = top_vibes => ({
  type: 'SET_TOP_VIBES',
  top_vibes,
})

export const setEventLocation = location => ({
  type: 'SET_EVENT_LOCATION',
  location,
})

export const setEventsData = events_data => ({
  type: 'SET_EVENTS_DATA',
  events_data,
})

export const setCities = cities => ({
  type: 'SET_CITIES',
  cities,
})

export const setNeighborhoods = cities => ({
  type: 'SET_NEIGHBORHOODS',
  cities,
})

export const setPlacesData = (places_data, refreshResults) => ({
  type: 'SET_PLACES_DATA',
  places_data,
  refreshResults
})

export const setTopPicks = (places_data, refreshResults, mergeTopPicks) => ({
  type: 'SET_TOP_PICKS_DATA',
  places_data,
  refreshResults,
  mergeTopPicks
})

export const setNearbyPlaces = places => ({
  type: 'SET_NEARBY_PLACES',
  places,
})

export const setName = name => ({
  type: 'SET_NAME',
  name
})

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
})