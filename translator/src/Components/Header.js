import React from 'react';
import { NavLink } from 'reactstrap';

function Header(args) {
  return (
    <div className="header">
      <div className="nav-container">
        <NavLink href="/" className="nav-link">
          Speak Easy
        </NavLink>
        <NavLink href="/flashcardindex" className="nav-link">
          Flash Cards
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
