import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title={'contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
