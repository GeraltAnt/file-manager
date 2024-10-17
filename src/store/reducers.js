import { combineReducers } from 'redux';

function userReducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
