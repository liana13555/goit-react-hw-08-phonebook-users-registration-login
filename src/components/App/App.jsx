// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar';
import { Container } from './App.styled';
import ContactsView from '../../views/ContactsView';
import HomeView from '../../views/HomeView';
import RegisterView from '../../views/RegisterView';
import LoginView from '../../views/LoginView';
// import { authOperations } from '../../redux/auth/auth-operations';

export default function App() {
 
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      
      </Switch>
    </Container>
  );
}
