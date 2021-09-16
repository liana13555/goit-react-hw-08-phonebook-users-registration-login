import PropTypes from 'prop-types';
import {List, ListItem, ButtonDelete} from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {   
    return (
        <List>
            {contacts.map(contact => (
                <ListItem key={contact.id} >{contact.name}: {contact.number}
                    <ButtonDelete
                        type="button"
                        onClick={() => onDelete(contact.id)}
                    >
                        Delete
                    </ButtonDelete>                
                </ListItem>
            ))}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}