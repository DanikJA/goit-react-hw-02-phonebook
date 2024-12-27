import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: #f4f7f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

export const Input = styled.input`
  padding: 5px 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`;

export const ContactListContainer = styled.div`
  margin-top: 40px;
  max-width: 400px;
  margin: 0 auto;
`;

export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ContactItem = styled.li`
  padding: 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;
