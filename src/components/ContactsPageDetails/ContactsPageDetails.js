import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { GlobalStyle } from 'components/GlobalStyle';
import {
  Wrapper,
  Title,
} from 'components/ContactsPageDetails/ContactsPageDetails.styled';

export const ContactsPageDetails = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Create a new contact</Title>
      <ContactForm />
      <Filter />
      <Title>Contacts</Title>
      <ContactList />

      {isLoading && <Loader />}
    </Wrapper>
  );
};
