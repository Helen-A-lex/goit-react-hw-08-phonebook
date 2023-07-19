import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  FormLogin,
  LabelLogin,
  InputLogin,
  ButtonLogin,
} from '../../components/LoginForm/LoginFormstyled';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(logIn({ email, password }));
    resetForm();
  };
  const schema = Yup.object().shape({
    email: Yup.string().min(4).required(),
    password: Yup.string().min(5).max(16).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLogin>
        <LabelLogin htmlFor="user_email">
          Email
          <InputLogin type="email" name="email" />
          <ErrorMessage name="email" />
        </LabelLogin>

        <LabelLogin htmlFor="user_password">
          Password
          <InputLogin type="password" name="password" />
          <ErrorMessage name="password" />
        </LabelLogin>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </FormLogin>
    </Formik>
  );
}
