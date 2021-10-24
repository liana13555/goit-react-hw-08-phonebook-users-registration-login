import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Phonebook</Navbar.Brand>

      <Nav className="ml-auto">
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts" exact>Contacts</NavLink> */}
        <Nav.Link to="/" href="#home">
          Home
        </Nav.Link>
        <Nav.Link to="/contacts" exact href="#registration">
          Registration
        </Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;

<Nav>
  <NavLink to="/">Home</NavLink>

  <NavLink to="/contacts" exact>
    Contacts
  </NavLink>
</Nav>;
