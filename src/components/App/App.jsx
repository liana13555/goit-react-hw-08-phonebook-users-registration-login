import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <SectionTitle title="Phonebook">
        <ContactForm />
      </SectionTitle>
      
      <SectionTitle title="Contacts">
        <Filter/>
        <ContactList/>
      </SectionTitle>
    </Container>
  );
}