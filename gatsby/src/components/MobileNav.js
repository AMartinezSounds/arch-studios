import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MobileNavStyles = styled.nav`
  font-family: 'Jost', sans-serif;
  position: absolute;
  height: 343px;
  transition: top 0.3s ease;
  top: ${(props) => (props.show === 'false' ? '-22.5rem' : '13.8%')};
  left: 1.95rem;
  right: 0;
  background-color: #eeeff4;
  z-index: 4;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  a {
    color: #1b1d23;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
  }
  .show {
    top: 10rem;
  }
`;

function MobileNav({ crossButton, setCrossButton }) {
  return (
    <MobileNavStyles show={crossButton}>
      <ul>
        <li>
          <Link to="/portfolio" onClick={() => setCrossButton('false')}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setCrossButton('false')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setCrossButton('false')}>
            Contact
          </Link>
        </li>
      </ul>
    </MobileNavStyles>
  );
}

export default MobileNav;
