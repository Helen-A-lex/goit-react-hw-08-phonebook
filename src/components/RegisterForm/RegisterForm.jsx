import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {
  FormRegister,
  LabelRegister,
  InputRegister,
  ButtonRegister,
} from '../../components/RegisterForm/RegisterForm.styled';
import { ErrorMessage, Formik } from 'formik';
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormRegister>
        <LabelRegister htmlFor="user_name">
          Username
          <InputRegister type="text" name="name" />
          <ErrorMessage name="name" />
        </LabelRegister>

        <LabelRegister htmlFor="user_email">
          Email
          <InputRegister type="email" name="email" />
          <ErrorMessage name="email" />
        </LabelRegister>

        <LabelRegister htmlFor="user_password">
          Password
          <InputRegister type="password" name="password" />
          <ErrorMessage name="password" />
        </LabelRegister>
        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormRegister>
    </Formik>
  );
}
