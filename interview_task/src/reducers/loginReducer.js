const initialState = {
    session: {},
    isAuthenticated: false,
    successMessage: null,
    failureMessage: null,
    statusMessage:''
  };
  function loginReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return Object.assign({}, state, {
          isAuthenticated: false,
          successMessage: null,
          failureMessage: null,
          session:{},
          statusMessage:'loading...'
        });
      case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {
          isAuthenticated: true,
          successMessage: `You have successfully logged in`,
          statusMessage: `You have successfully logged in`,
          failureMessage: null,
          session: action.result.session
        });
      case 'LOGIN_FAILURE':
        return Object.assign({}, state, {
            isAuthenticated: false,
            successMessage: null,
            failureMessage: null,
            session:{},
            statusMessage:'login failed'
        });
      default:
        return state;
    }
  }
  
  export default loginReducer;
  