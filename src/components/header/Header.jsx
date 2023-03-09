import React from 'react';
import './Header.css';
import CTA from './CTA';
import momdad from '../../assets/momdad.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Shimpi and Jagtap Family</h1>
        <h5 className="text-light">My Whole Family</h5>
        <CTA />
        <HeaderSocials />
        <div className="momdad">
          <img src={momdad} alt="mymomdad" />
        </div>

        <a href="#contact" className="scroll__down">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
