import { useEffect } from 'react';

import './App.css';

import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';

const dataArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const key = 'currentContacts';

function App() {
  // const [inputFilterVal, setimputFilterVal] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   const dataFromLS = localStorage.getItem(key);
  //   if (!dataFromLS) {
  //     return [];
  //   }
  //   return JSON.parse(dataFromLS);
  // });

  const inputFilterVal = useSelector(
    state => state.contactReducer.filters.name
  );
  const contacts = useSelector(state => state.contactReducer.contacts.items);

  const arrFilterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputFilterVal.toLowerCase().trim())
  );

  const dispatch = useDispatch();

  const handleImputFilterVal = ev => {
    //setimputFilterVal(ev.target.value);
    const setFilters = {
      type: 'filters/setFilters',
      payload: ev.target.value,
    };
    dispatch(setFilters);
  };

  const addContact = newContact => {
    // setContacts(prevContacts => {
    //   return [...prevContacts, newContact];
    // });
    const addContacts = {
      type: 'contacts/addContacts',
      payload: newContact,
    };
    dispatch(addContacts);
  };

  const handleDeleteContact = idContact => {
    // setContacts(contacts.filter(contact => contact.id !== idContact));
    const deleteContacts = {
      type: 'contacts/deleteContacts',
      payload: idContact,
    };
    dispatch(deleteContacts);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox
          imputFilterVal={inputFilterVal}
          handleImputFilterVal={handleImputFilterVal}
        />
        <ContactList
          contacts={arrFilterContacts}
          handleDelete={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
