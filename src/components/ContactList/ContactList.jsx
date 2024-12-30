import { ContactItem } from '../ContactItem/Contact.styled';
import {
  ContactListContainer,
  ContactListHeading,
  ContactList,
} from './ContactList.styled.jsx';

export const ContactListComponent = ({ contacts, onDelete }) => (
  <ContactListContainer>
    <ContactListHeading>Contacts:</ContactListHeading>
    <ContactList>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ContactList>
  </ContactListContainer>
);
