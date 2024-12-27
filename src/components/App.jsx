import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import {
  StyledForm,
  ErrorText,
  Label,
  Input,
  ContactListContainer,
  ContactList,
  ContactItem,
  SubmitButton,
} from './App.Styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const numbersSchema = Yup.object().shape({
  filter: '',
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Please enter a valid number!')
    .required('Required'),
});

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addNumber = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          validationSchema={numbersSchema}
          onSubmit={(values, actions) => {
            const newContact = {
              id: nanoid(),
              name: values.name,
              number: values.number,
            };
            this.addNumber(newContact);
            actions.resetForm();
          }}
        >
          <StyledForm>
            <Label>
              Name
              <Field name="name" as={Input} />
              <ErrorMessage name="name" component={ErrorText} />
            </Label>

            <Label>
              Number
              <Field name="number" as={Input} />
              <ErrorMessage name="number" component={ErrorText} />
            </Label>

            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        </Formik>

        <ContactListContainer>
          <h2>Contact list</h2>
          <ContactList>
            {this.state.contacts.map(contact => (
              <ContactItem key={contact.id}>
                {contact.name}: {contact.number}
              </ContactItem>
            ))}
          </ContactList>
        </ContactListContainer>
      </div>
    );
  }
}
