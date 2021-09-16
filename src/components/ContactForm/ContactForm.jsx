import { useState } from 'react';
import { FormContact, FormButton } from './ContactForm.styled';

export default function ContactForm({propOnSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

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

        propOnSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <FormContact onSubmit={handleSubmit}>
            <label>
                Name
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <br />            
            <label> Number
                <br />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <br />
            <FormButton type="submit">
                Add contact
            </FormButton>         
        </FormContact>
    );
}



// import React, { Component } from 'react';
// import { FormContact, FormButton } from './ContactForm.styled';

// export default class ContactForm extends Component {
//     state = {
//         contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         name: '',
//         number: ''
//     };

//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({
//             [name]: value,
//         })
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.propOnSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({name: '', number: ''})
//     }

//     render() {
//         return (
//             <FormContact onSubmit={this.handleSubmit}>
//                 <label>
//                     Name
//                <br />
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer"
//                 required
//                 value={this.state.name}
//                 onChange={this.handleChange}
//               />
//             </label>

//             <br />
            
//             <label> Number
//                <br />
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                 required
//                 value={this.state.number}
//                 onChange={this.handleChange}
//               />
//             </label>


//            <br />
//           <FormButton type="submit">
//             Add contact
//           </FormButton>
         
//         </FormContact>  
//         )
//     };
// }