import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white text-black text-center">
      <Link
        to="/"
        className="block transition-all duration-300 ease-in-out hover:opacity-80">
        hogehoge
      </Link>
    </header>
  );
}

export default Header;
