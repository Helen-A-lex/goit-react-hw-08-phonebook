import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  FormWrap,
  Label,
  Input,
  ButtonAddDeleteContact,
  
} from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage,Formik } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {

  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // evt.preventDefault();
    // const form = evt.currentTarget;
    const { email, password } = values;
   
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    dispatch(logIn({email, password}));
    resetForm();
  };
const schema = Yup.object().shape({
     email: Yup.string().min(4).required(),
    password: Yup.string().min(5).max(16).required(),
});
  
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit} >
    <FormWrap >
      <Label htmlFor="user_email">
        Email
          <Input type="email" name="email" />
          <ErrorMessage name='email'/>
      </Label>

      <Label htmlFor="user_password">
        Password
          <Input type="password" name="password" />
          <ErrorMessage name='password'/>
      </Label>
      <ButtonAddDeleteContact type="submit">Login</ButtonAddDeleteContact>
      </FormWrap>
    </Formik>
  );
}
