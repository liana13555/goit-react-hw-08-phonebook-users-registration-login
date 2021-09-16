import { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  const addContact = data => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )) {
      alert(`${data.name} is already in contacts.`);
    } else if (contacts.find(
      contact => contact.number === data.number)) {
      alert(`This number ${data.number} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: data.name,
        number: data.number,
      };

      setContacts(prevState => [...prevState, newContact]);
    };
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };  

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }; 

  return (
    <Container>
      <SectionTitle title="Phonebook">
        <ContactForm propOnSubmit={addContact} />
      </SectionTitle>

      <SectionTitle title="Contacts">
        <Filter
          value={filter}
          onChange={changeFilter} />
        <ContactList
          contacts={getFilterContacts()}
          onDelete={deleteContact}
        />
      </SectionTitle>

    </Container>
  );
}