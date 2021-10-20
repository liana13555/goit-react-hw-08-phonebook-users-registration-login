// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as actions from './actions';
import * as contactsActions from './actions';

const contacts = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => {
    const contactName = state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );
    const contactNumber = state.find(contact => contact.number === payload.number);
    if (contactName) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    if (contactNumber) {
      alert(`${payload.number} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
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

const filter = createReducer('', {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
