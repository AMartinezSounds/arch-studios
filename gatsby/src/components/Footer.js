import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 383px;
  background-color: #eeeff4;
  grid-row-start: 2;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 1;
  .linkPortfolioButton {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 252px;
    height: 72px;
    background-color: black;
  }
  @media (min-width: 769px) {
    justify-content: flex-start;
    display: grid;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 4;
    height: 120px;
    width: 100%;
  }
`;

const FooterBarStyle = styled.nav`
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterPortfolioButton = styled.div`
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 5;
  grid-column-end: 7;
`;

function Footer() {
  return (
    <FooterStyle>
      <p style={{ color: '#eeeff4' }}>push footer down</p>
      <FooterBarStyle>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </FooterBarStyle>
      <FooterPortfolioButton>
        <Link className="linkPortfolioButton" to="/portfolio">
          See Our Portfolio
          <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
        </Link>
      </FooterPortfolioButton>
    </FooterStyle>
  );
}

export default Footer;
