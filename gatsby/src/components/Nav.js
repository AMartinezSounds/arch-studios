import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import logo from '../../static/logo.svg';

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 82.4%;
  height: 14vh;
  margin-inline: auto;
  li {
    display: none;
  }
  @media (min-width: 700px) {
    max-width: 573px;
    justify-content: space-between;
    ul {
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    li {
      display: inline;
    }
  }
  @media (min-width: 1340px) {
    justify-content: flex-start;
    width: 80%;
    max-width: 1120px;
    ul {
      width: 50%;
      display: flex;
      justify-content: flex end;
      align-items: center;
    }
    li {
      display: inline;
    }
  }
`;
const LogoStyles = styled.div``;
const IconStyles = styled.div`
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: black;
  @media (min-width: 700px) {
    display: none;
  }
`;

function Nav({ crossButton, setCrossButton }) {
  return (
    <NavStyles>
      <LogoStyles>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
      </LogoStyles>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <IconStyles
          onClick={() =>
            crossButton === 'false'
              ? setCrossButton('true')
              : setCrossButton('false')
          }
        >
          {crossButton === 'false' ? <GiHamburgerMenu /> : <FaTimes />}
        </IconStyles>
      </ul>
    </NavStyles>
  );
}

export default Nav;
