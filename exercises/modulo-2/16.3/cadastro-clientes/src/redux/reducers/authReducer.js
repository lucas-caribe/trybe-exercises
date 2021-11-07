import AUTH_ACTIONS from '../actions/authActions';

const INITIAL_STATE = {
  loggedIn: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { loggedIn: true };
    case AUTH_ACTIONS.LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
