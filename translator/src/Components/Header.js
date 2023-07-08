import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Navbar {...args}>
        <NavbarBrand style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Speak Easy<span style={{ fontSize: '2rem' }}></span></NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;
