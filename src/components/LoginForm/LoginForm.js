import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Title,
  Layout,
  Form,
  Lable,
  Input,
  Button,
} from 'components/LoginForm/LoginForm.styled';

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
    <Layout>
      <Title>LOG IN TO APPLICATION</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Lable>
          Email
          <Input type="email" name="email" />
        </Lable>
        <Lable>
          Password
          <Input type="password" name="password" />
        </Lable>
        <Button type="submit">Log In</Button>
      </Form>
    </Layout>
  );
};
