import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  font-weight: bold;
`;
