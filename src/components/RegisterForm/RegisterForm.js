import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Title,
  Layout,
  Form,
  Lable,
  Input,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
    <Layout>
      <Title>NEW USER REGISTRATION</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Lable>
          Username
          <Input type="text" name="name" />
        </Lable>
        <Lable>
          Email
          <Input type="email" name="email" />
        </Lable>
        <Lable>
          Password
          <Input type="password" name="password" />
        </Lable>
        <Button type="submit">Register</Button>
      </Form>
    </Layout>
  );
};
