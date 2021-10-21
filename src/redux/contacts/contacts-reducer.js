import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';
import * as contactsActions from './contacts-actions';

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
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});

// const contacts = createReducer(
//   [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   {
//     [actions.addContact]: (state, { payload }) => {
//       const contactName = state.find(
//         contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//       );
//       const contactNumber = state.find(contact => contact.number === payload.number);
//       if (contactName) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }
//       if (contactNumber) {
//         alert(`${payload.number} is already in contacts`);
//         return state;
//       }
//       return [payload, ...state];
//     },
//     [actions.deleteContact]: (state, { payload }) =>
//       state.filter(contact => contact.id !== payload),
//   },
// );
