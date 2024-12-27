import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { StyledForm, ErrorText } from './App.Styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const numbersSchema = Yup.object().shape({
  filter: '',
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string().min(10, 'Mast be 10 or more').required('Required'),
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

  addNumber = () => {};
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
            console.log(values);
            actions.resetForm();
          }}
        >
          <StyledForm>
            <label>
              Name
              <Field name="name" />
              <ErrorMessage name="name" component={ErrorText} />
            </label>

            <label>
              Number
              <Field name="number" type="number" />
              <ErrorMessage name="number" component={ErrorText} />
            </label>

            <button type="submit">Submit</button>
          </StyledForm>
        </Formik>
      </div>
    );
  }
}
