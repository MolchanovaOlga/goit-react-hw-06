const key = 'currentContacts';

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

export const contactReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case 'contacts/addContacts':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, actions.payload],
        },
      };
    case 'filters/setFilters':
      return { ...state, filters: { ...state.filters, name: actions.payload } };
    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            contact => contact.id !== actions.payload
          ),
        },
      };
    default:
      return state;
  }
};
