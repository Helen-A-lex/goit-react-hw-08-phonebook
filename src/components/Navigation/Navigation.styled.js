import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: #9c27b0;
    text-shadow: rgb(55, 55, 55) 1px 1px 0px, rgb(149, 125, 173) 1px 2px 0px,
      rgb(149, 125, 173) 1px 3px 0px, rgb(149, 125, 173) 1px 4px 0px,
      rgb(149, 125, 173) 1px 5px 0px, rgb(149, 125, 173) 1px 6px 0px,
      rgba(16, 16, 16, 0.5) 1px 10px 5px, rgba(16, 16, 16, 0.4) 1px 15px 10px,
      rgba(16, 16, 16, 0.3) 1px 20px 30px, rgba(16, 16, 16, 0.2) 1px 25px 50px;
    text-stroke: black;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
