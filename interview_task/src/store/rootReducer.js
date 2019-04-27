import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import loginReducer from '../reducers/loginReducer';
import dashboardReducer from '../reducers/dashboardReducer';

const appReducer = combineReducers({
  loginReducer,
  router: routerReducer,
  dashboardReducer
});

const root = (state, action) => {
  return appReducer(state, action);
};

export default root;
