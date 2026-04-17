import styled from "styled-components";

const Nav = styled.nav`
  background-color: var(--primary-color);
  padding: 16px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  margin-right: 16px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Contact</NavLink>
    </Nav>
  );
}

export default Navbar;