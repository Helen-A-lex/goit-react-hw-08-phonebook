import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {
  Form,
  Label,
  Input,
  ButtonAddDeleteContact,
} from 'components/ContactForm/ContactForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="user_name">
        Username
        <Input type="text" name="name" />
      </Label>

      <Label htmlFor="user_email">
        Email
        <Input type="email" name="email" />
      </Label>

      <Label htmlFor="user_password">
        Password
        <Input type="password" name="password" />
      </Label>
      <ButtonAddDeleteContact type="submit">Register</ButtonAddDeleteContact>
    </Form>
  );
}
