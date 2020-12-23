import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CodeIcon from './navIcon'
import styled from "styled-components";

const StyledNavbarBrand = styled(NavbarBrand)`
  font-Family: 'Ruda', Sans-Serif;
  font-weight: 700;
`;

const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <StyledNavbarBrand href="/"><CodeIcon/>Communitech</StyledNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Event List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>My Events</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;