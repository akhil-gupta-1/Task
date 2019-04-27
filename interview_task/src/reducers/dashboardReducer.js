const initialState = {
    data: {},
    successMessage: null,
    failureMessage: null,
    statusMessage:''
  };
  function dashboardReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return Object.assign({}, state, {
          successMessage: null,
          failureMessage: null,
          data:{},
          statusMessage:'loading...'
        });
      case 'FETCH_SUCCESS':
        return Object.assign({}, state, {
          successMessage: `data fetched`,
          statusMessage: `data fetched`,
          failureMessage: null,
          data: action.result.data
        });
      case 'FETCH_FAILURE':
        return Object.assign({}, state, {
            successMessage: null,
            failureMessage: null,
            statusMessage:'fetch failed'
        });
      default:
        return state;
    }
  }
  
  export default dashboardReducer;
  