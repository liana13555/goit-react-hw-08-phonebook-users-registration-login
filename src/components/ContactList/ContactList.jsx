import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact } from '../../redux/actions';
import * as contactsOperations from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';
import { List, ListItem, ButtonDelete, Span } from './ContactList.styled';


export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const onDeleteContact = id => dispatch(deleteContact(id));
    
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