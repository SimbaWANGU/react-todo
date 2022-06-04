/* eslint-disable arrow-body-style */
import React from 'react';
import './Header.scss';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  return (
    <header style={headerStyle}>
      <h1
        className="title"
      >
        Todos
      </h1>
    </header>
  );
};

export default Header;
