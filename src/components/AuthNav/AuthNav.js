import { StyledLink } from 'components/AuthNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">Sing Up</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
