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
  margin: 40px auto;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ErrorText = styled.span`
  color: red;
  margin-left: 5px;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 6px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const ContactListContainer = styled.div`
  margin-top: 40px;
  width: 400px;
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

  &:last-child {
    margin-bottom: 0px;
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
  margin-bottom: 20px;
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
  background-color: gray;
  color: white;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  padding: 5px;
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

export const DivWrapper = styled.div`
  display: flex;
  margin-right: auto;
`;
