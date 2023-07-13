import { useState, useDispatch } from 'react';
import { logIn } from 'redux/auth/auth-operations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="user_email">
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="user_password">
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>
      <ButtonAddDeleteContact type="submit">Login</ButtonAddDeleteContact>
    </Form>
  );
}
