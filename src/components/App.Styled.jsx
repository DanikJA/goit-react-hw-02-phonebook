import { Form } from 'formik';
import styled from 'styled-components';

export const ContactListContainer = styled.div`
  margin-top: 40px;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  gap: 12px;
  font-size: 16px;
  color: #333;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const ContactListHeading = styled.h2`
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const SearchInput = styled(Input)`
  width: 200px;
  padding: 10px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #e74c3c;
    transform: scale(0.98);
  }
`;
