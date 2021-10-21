import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

export const filterContacts = createAction('filter/filterContact');

// export const fetchContactsRequest = createAction('contactList/fetchContactsRequest');
// export const fetchContactsSuccess = createAction('contactList/fetchContactsSuccess');
// export const fetchContactsError = createAction('contactList/fetchContactsError');

// export const addContact = createAction('contacts/addContact', (name, number) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction('contactList/deleteContact');
// export const filterContacts = createAction('filter/filterContact');
