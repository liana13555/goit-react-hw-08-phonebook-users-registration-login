import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: name,
  number,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContacts = value => ({
  type: FILTER_CONTACT,
  payload: value,
});
