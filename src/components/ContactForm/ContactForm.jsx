import {
  FormWrap,
  Label,
  Input,
  ButtonAddDeleteContact,
} from './ContactForm.styled';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems } from '../../redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/contacts-operations';

export default function ContactForm() {
  const initialValues = { name: '', number: '' };
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string().required().min(4),
    number: Yup.number().min(4).required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  return (
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={schema}
    //   onSubmit={handleSubmit}
    // >
    <FormWrap onSubmit={formik.handleSubmit}>
      <Label htmlFor="user_name">
        Name
        <Input type="text" name="name" {...formik.getFieldProps('name')} />
        <ErrorMessage name="name" />
      </Label>

      <Label htmlFor="user_tel">
        Number
        <Input type="tel" name="number" {...formik.getFieldProps('number')} />
        <ErrorMessage name="number" />
      </Label>
      <ButtonAddDeleteContact type="submit">Add contact</ButtonAddDeleteContact>
    </FormWrap>
    // </Formik>
  );
}
