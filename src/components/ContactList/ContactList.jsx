import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { List, ListItem, ButtonDelete } from './ContactList.styled';

const filtersContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    const contactsList = filtersContacts(contacts, filter);

    const onDeleteContact = id => dispatch(deleteContact(id));    
  
    return (
        <List>
            {contactsList.map(({id, name, number}) => (
                <ListItem key={id}>
                    {name}: {number}
                    <ButtonDelete
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </ButtonDelete>                
                </ListItem>
            ))}
        </List>
    )
};