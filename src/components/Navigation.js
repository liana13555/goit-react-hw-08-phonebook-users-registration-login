import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>

    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
