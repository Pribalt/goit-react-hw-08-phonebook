import { useAuth } from 'hooks';
import {
  Nav,
  LogoText,
  Item,
  StyledLink,
} from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LogoText to="/">PhoneBook</LogoText>
      <ul>
        <Item>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </Item>
      </ul>
    </Nav>
  );
};
