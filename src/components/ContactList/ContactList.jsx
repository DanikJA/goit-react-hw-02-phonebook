import { ContactItem } from './ContactItem';
import {
  ContactListContainer,
  ContactListHeading,
  ContactList,
} from '../App.Styled';

export const ContactList = ({ contacts, onDelete }) => (
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
