// actions
const SET_DARK_MODE = 'SET_DARK_MODE';
const SET_LIGHT_MODE = 'SET_LIGHT_MODE';
const SET_MODE = 'SET_MODE';

// action creators
const setMode = (mode) => ({ type: SET_MODE, payload: mode });

// reducers
const INITIAL_STATE = {
  theme: 'light',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// store
const store = Redux.createStore(reducer);

window.onload = () => {
  const switchButton = document.querySelector('#switch-mode');
  const background = document.querySelector('#background');

  const { theme } = store.getState();

  background.className = theme;

  switchButton.addEventListener('click', () => {
    const { theme } = store.getState();

    if (theme === 'light') {
      store.dispatch(setMode('dark'));
    } else {
      store.dispatch(setMode('light'));
    }

    background.className = theme;
  });
};
