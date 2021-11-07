const AUTH_ACTIONS = {
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
};

export const login = () => ({
  type: AUTH_ACTIONS.LOGIN,
});

export const logout = () => ({
  type: AUTH_ACTIONS.LOGOUT,
});

export default AUTH_ACTIONS;
