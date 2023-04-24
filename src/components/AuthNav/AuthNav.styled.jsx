import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 20px 10px;
  font-weight: 500;
  font-size: 20px;
  color: rgb(255, 255, 255);

  &.active {
    color: #2196f3;
  }
`;
