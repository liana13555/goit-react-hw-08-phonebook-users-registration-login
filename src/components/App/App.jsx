import React, { Component } from 'react';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component{
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: ''
    };

  addContact = data => {
    if (this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )) {
      alert(`${data.name} is already in contacts.`);
    } else if (this.state.contacts.find(
      contact => contact.number === data.number)) {
       alert(`This number ${data.number} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: data.name,
        number: data.number,
      };  

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    };
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };


  render() {
      const { filter } = this.state;
    return (
      <Container>
        <SectionTitle title="Phonebook">
          <ContactForm propOnSubmit={this.addContact} />  
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter
            value={filter}
            onChange={this.changeFilter} />
          <ContactList
            contacts={this.getFilterContacts()}
            onDelete={this.deleteContact} 
          />
        </SectionTitle>        

      </Container>
    )
  };
}


