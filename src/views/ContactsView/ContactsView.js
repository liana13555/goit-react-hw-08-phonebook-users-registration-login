// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContactsOperations } from '../../redux/contacts/contacts-operations';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

export default function ContactsView(params) {
  //   const dispatch = useDispatch();

  //   useEffect(() => dispatch(fetchContactsOperations()), [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
