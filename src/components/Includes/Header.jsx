import React from 'react';
import Appbar from './Appbar';
import Navbar from './Navbar';

function Header() {
  return (
    <header id="header" className="header">
      <Appbar />
      <Navbar />
    </header>
  );
}

export default Header;
