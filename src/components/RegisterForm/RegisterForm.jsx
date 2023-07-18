import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {
  FormWrap,
  Label,
  Input,
  ButtonAddDeleteContact,
} from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

export default function RegisterForm() {
  const initialValues = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, email, password } = values;
    

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    resetForm();
  };

  const schema = Yup.object().shape({
    name: Yup.string().required().min(4),
    email: Yup.string().min(4).required(),
    password: Yup.string().min(5).max(16).required(),
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
      <FormWrap onSubmit ={formik.handleSubmit}>
        <Label htmlFor="user_name">
          Username
          <Input type="text" name="name" {...formik.getFieldProps('name')}/>
          <ErrorMessage name="name" />
        </Label>

        <Label htmlFor="user_email">
          Email
          <Input type="email" name="email" {...formik.getFieldProps('email')}/>
          <ErrorMessage name="email" />
        </Label>

        <Label htmlFor="user_password">
          Password
          <Input type="password" name="password" {...formik.getFieldProps('password')}/>
          <ErrorMessage name="password" />
        </Label>
        <ButtonAddDeleteContact type="submit">Register</ButtonAddDeleteContact>
      </FormWrap>
    // </Formik>
  );
}
