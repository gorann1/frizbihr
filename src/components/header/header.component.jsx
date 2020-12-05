import React from 'react';
import './header.styles.scss';
import logo from '../../images/frizbi_logo.png';
const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="frizbi hr logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
