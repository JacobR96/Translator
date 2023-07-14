import React from 'react';
import { NavLink } from 'reactstrap';

function Header(args) {

  return (
    <>
      <NavLink href="/" className="nav-link" style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
        Speak Easy
      </NavLink>

      <NavLink href="/flashcardindex" className="nav-link" style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', textDecoration: 'none' }}>
        Flash Cards
      </NavLink>
    </>
  );
}

export default Header;