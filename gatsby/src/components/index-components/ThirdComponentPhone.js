import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';



const ThirdComponentPhoneStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-image: ${(props) => `url("${props.bgPhone}")`};
  background-repeat: no-repeat;
  height: 560px;
  width: 100%;
  max-width: 375px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  h2 {
    position: absolute;
    color: white;
    z-index: 2;
    font-size: 2.6rem;
  }
  .title1 {
    top: 150px;
    left: 30px;
  }
  .title2 {
    top: 200px;
    left: 30px;
  }
  .link {
    position: absolute;
    z-index: 2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 187px;
    height: 72px;
    background-color: black;
    top: 300px;
    left: 30px;
    transition: all 350ms linear;
    &:hover {
      background-color: #60636d;
    }
  }
  @media (min-width: 500px) {
    width: 311px;
  }
  @media (min-width: 768px) {
    background-image: ${(props) => `url("${props.bgTablet}")`};
    min-width: 573px;
    margin-bottom: 2rem;
  }
  @media (min-width: 1300px) {
    background-image: ${(props) => `url("${props.bgDesktop}")`};
    background-size: cover;
    width: 77.08%;
    min-width: 1110px;
    max-width: 2500px;
    margin-bottom: 10rem;
    h2 {
      position: absolute;
      color: white;
      z-index: 2;
      font-size: 2.6rem;
    }
    .title1 {
      top: 150px;
      left: 190px;
    }
    .title2 {
      top: 200px;
      left: 190px;
    }
    .link {
      position: absolute;
      top: 320px;
      left: 192px;
    }
  }
`;

function ThirdComponentPhone({ bgPhone, bgTablet, bgDesktop }) {
  return (
    <Fade fraction="0.1">
        <ThirdComponentPhoneStyle
      bgPhone={bgPhone}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <div className="container">
        <h2 className="title1">Small team,</h2>
        <h2 className="title2">big ideas</h2>
        <Link className="link" to="/about">
          About Us
          <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
        </Link>
      </div>
    </ThirdComponentPhoneStyle>
    </Fade>
  );
}

export default ThirdComponentPhone;
