import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: #03a9f4;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
