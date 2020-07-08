export default function reducer(state = {}, action) {
    switch (action.type) {
      case "FETCH_NEWS_SUCCESS":
        return { ...state, news: action.payload };

      case "FETCH_CITIES_REQUEST":
        console.log('FETCH_CITIES_REQUEST: ', action.payload)
        //return { ...state, cities: action.payload };
        
      case "CITIES_LOADING":
        console.log('REDUCER got cities: ', action.payload)
        return { 
          ...state, 
          loading: true 
        };

      case "FETCH_CITIES_SUCCESS":
        console.log('REDUCER got cities: ', action.payload)
        return { 
          ...state, 
          cities: action.payload
        };

      // TODO: Do we need loading state per end point. 
      case "DETAILS_LOADING":
        console.log('DETAILS_LOADING')
        return {
          ...state,
          loading: true
        };

      case "DETAILS_SUCCESS":
        // TODO: Push properties to current item...
        let currentItem = action.payload.properties

        const point = action.payload.geometry.coordinates
        currentItem['location'] = { latitude: point[1], longitude: point[0] }
        
        console.log('current item: ', currentItem)

        return { 
          ...state, 
          details: action.payload,
          currentItem: currentItem,
          loading: false };

      default:
        return state;
    }
}