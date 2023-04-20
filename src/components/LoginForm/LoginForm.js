import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Lable } from 'components/LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Lable>
        Email
        <input type="email" name="email" />
      </Lable>
      <Lable>
        Password
        <input type="password" name="password" />
      </Lable>
      <button type="submit">Log In</button>
    </Form>
  );
};
