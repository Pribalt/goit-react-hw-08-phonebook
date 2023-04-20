import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Title1, Title2 } from 'components/Layout.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <Title1>Phonebook</Title1>
      <ContactForm />

      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </Layout>
  );
}
