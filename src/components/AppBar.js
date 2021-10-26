import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { Nav, Navbar, Container } from 'react-bootstrap';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navigation />
        <Nav className="ml-auto">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
      </Container>
    </Navbar>
    // <header style={styles.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
}
