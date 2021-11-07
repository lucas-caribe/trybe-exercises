import CLIENTS_ACTIONS from '../actions/clientsActions';

const INITIAL_STATE = [];

const clientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLIENTS_ACTIONS.ADD:
      return [...state, action.payload];
    case CLIENTS_ACTIONS.REMOVE:
      return state.filter((client) => client.email !== action.payload.email);
    default:
      return state;
  }
}

export default clientsReducer;
