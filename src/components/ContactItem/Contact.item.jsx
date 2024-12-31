import {
  DivWrapper,
  DeleteButton,
  ContactItem as StyledContactItem,
} from './Contact.styled';

export const ContactItem = ({ id, name, number, onDelete }) => (
  <DivWrapper>
    <StyledContactItem>
      {name}: {number}
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteButton>
    </StyledContactItem>
  </DivWrapper>
);