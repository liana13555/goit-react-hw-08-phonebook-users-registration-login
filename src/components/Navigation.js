import React from 'react';
import { NavLink } from 'react-router-dom';
// import styled from '@emotion/styled';

// const Styles = styled.nav`
//   text-decoration: 'none';
//   color: 'black';
//   margin-left: 20px;
//   font-size: 24px;
//   font-weight: 500,
// `;

const styles = {
  textDecoration: 'none',
  color: 'white',
  marginLeft: '20px',
  fontSize: '24px',
  fontWeight: 500,
};

const Navigation = () => (
  <nav>
    <NavLink style={styles} to="/">
      Home
    </NavLink>
    <NavLink style={styles} to="/contacts" exact>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
