const CLIENTS_ACTIONS = {
  ADD: 'clients/add',
  REMOVE: 'clients/remove',
};

export const add = (payload) => ({
  type: CLIENTS_ACTIONS.ADD,
  payload,
});

export const remove = (payload) => ({
  type: CLIENTS_ACTIONS.REMOVE,
  payload,
});

export default CLIENTS_ACTIONS;
