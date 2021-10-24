import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';
// import * as contactsActions from './contacts-actions';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    if (state.find(contact => contact.number === payload.number)) {
      alert(`${payload.number} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_state, { payload }) => payload,
  [addContact.pending]: null,
  [deleteContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.pending]: null,
});

const filter = createReducer('', {
  // [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
