import React from 'react';
import { NavLink } from 'react-router-dom';
//

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contacts" exact>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;

// eslint-disable-next-line
{
  /* <Nav>
  <NavLink to="/">Home</NavLink>

  <NavLink to="/contacts" exact>
    Contacts
  </NavLink>
</Nav>; */
}
