import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors } from '../../redux/contacts';
import  contactsOperations  from '../../redux/contacts/contacts-operations';
import { List, ListItem, ButtonDelete, Span } from './ContactList.styled';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);
  
    return (
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Span>{name}: </Span>
                    <Span>{number} </Span>
                    <ButtonDelete
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </ButtonDelete>
                </ListItem>
            ))}
            </List>
    );
};