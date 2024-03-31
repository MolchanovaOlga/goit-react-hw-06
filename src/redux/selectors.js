export const getFilterName = state => {
  console.log(state);
  return state.filters.name;
};

export const getContactItems = state => state.contacts.items;
