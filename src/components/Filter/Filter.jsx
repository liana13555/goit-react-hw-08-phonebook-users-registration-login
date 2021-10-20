import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import { Label } from './Filter.styled';

export default function Filter() {
    const dispatch = useDispatch();
    
    const changeFilter = e => {
        let value = e.currentTarget.value;
        dispatch(filterContacts(value));
  };  

    return (
        <Label>
        Find contacts by name:
        <br/>
                <input
                type="text"                
           onChange={changeFilter}
         />
    </Label>
    )     
};
   
 