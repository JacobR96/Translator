import React, { useState } from 'react';
import {
  NavLink,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
<>
  
   
    <NavLink  href="/" className="nav-link">
    Speak Easy 
    </NavLink>

           
     <NavLink href="/flashcardindex" className="nav-link">
      Flash Cards
      </NavLink>
            
      

    </>
  );
}

export default Header;