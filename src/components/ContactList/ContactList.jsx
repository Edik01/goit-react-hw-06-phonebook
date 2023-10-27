import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contact/contactSlice';
import { selectFilteredContacts } from 'redux/selectors';
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <p> {contact.name}</p>
            <p> {contact.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
