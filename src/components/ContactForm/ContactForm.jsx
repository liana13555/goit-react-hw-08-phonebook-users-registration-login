import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import  contactsSelectors from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import { Thumb} from './ContactForm.styled';
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const contacts = useSelector(contactsSelectors.getContacts);

    const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

    const handleSubmit = e => {
        e.preventDefault();

        const findContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number,
        );

        if (findContact) {
            toast.error(`${name} or number ${number} is already in contacts`);
            return;
        } else {
            dispatch(contactsOperations.addContact( name, number));
            reset();
        }       
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <Thumb>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter name"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer"
                        required
                        value={name}
                        onChange={handleChange} />   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="tel"
                        placeholder="Phone number"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">
                    Add contact
                </Button>
            </Form>
        </Thumb>
    );
};

// {/* <FormContact onSubmit={handleSubmit}>
//             <label>
//                 Name
//                 <br />
//                 <FormInput
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer"
//                     required
//                     value={name}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br />            
//             <label> Number
//                 <br />
//                 <FormInput
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     required
//                     value={number}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br />
//             <FormButton type="submit">
//                 Add contact
//             </FormButton>         
//         </FormContact> */}