import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';
import { List, ListItem, ButtonDelete, Span } from './ContactList.styled';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    const onDeleteContact = id => dispatch(deleteContact(id));    
  
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