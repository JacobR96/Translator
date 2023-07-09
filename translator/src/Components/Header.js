import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
   <div className='Header'>
<h1> Speak Easy </h1>
   </div>
  )
}

export default Header;
