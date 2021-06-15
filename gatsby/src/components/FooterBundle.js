import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import logo from '../../static/logo.svg';

const FooterBundleStyle = styled.footer`
  height: 443px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  img {
    position: absolute;
    top: 25px;
    left: 25px;
    object-fit: contain;
    width: 70px;
    height: 70px;
  }
`;

const ImageContainer = styled.div`
  margin-inline: auto;
  position: relative;
  width: 120px;
  height: 120px;
  background-color: black;
  filter: brightness(700);
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 1;
  z-index: 2;
`;

function FooterBundle() {
  return (
    <>
      <FooterBundleStyle>
        <ImageContainer>
          <img src={logo} alt="" />
        </ImageContainer>
        <Footer />
      </FooterBundleStyle>
    </>
  );
}

export default FooterBundle;
