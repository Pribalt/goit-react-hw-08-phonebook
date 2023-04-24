import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LogoText = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  margin-right: 100px;
  font-size: 26px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;

export const Item = styled.li`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: 500;
  font-size: 20px;
  color: rgb(255, 255, 255);

  &.active {
    color: #2196f3;
  }
`;
