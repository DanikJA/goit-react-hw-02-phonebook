import { Component } from 'react';
import { Formik, Field, Form } from 'formik';

export class App extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            contacts: [
              { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
              { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
              { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
              { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ],
            filter: '',
            name: '',
            number: '',
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Form>
            <label>
              Name
              <Field name="name" />
            </label>

            <label>
              Number
              <Field name="number" type="number" />
            </label>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
