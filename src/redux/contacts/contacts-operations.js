import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from 'services/contacts-api';
// import * as contactsActions from './contacts-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      // const contacts = await contactsAPI.fetchContacts();
      // return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      // const newContact = await contactsAPI.addContact(contact);
      // return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      // const deletedContact = await contactsAPI.deleteContact(id);
      // return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };
