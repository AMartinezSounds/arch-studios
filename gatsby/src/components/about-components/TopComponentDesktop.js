import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import imageLaptop from '../../assets/images/contact/desktop/image-hero.jpg';

import Fade from 'react-reveal/Fade';

const TopComponentLaptopStyle = styled.div`
  display: none;
  @media (min-width: 1300px) {
    display: block;
    min-height: 720px;
    min-width: 1110px;
    width: 77.07%;
    max-width: 2500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10rem;
    .collage {
      height: 100%;
      position: relative;
      .image-container {
        position: relative;
        img {
          width: 57.2%;
          min-width: 635px;
          height: 720px;
          object-fit: cover;
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0px;
          width: 57.2%;
          height: 720px;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      .text-container {
        background-color: white;
        width: 628px;
        height: 503px;
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        .text {
          width: 446px;
          height: 343px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h2 {
            font-size: 3.5rem;
            height: 135px;
          }
          p {
            height: 100px;
            line-height: 1.7rem;
            color: #7d828f;
          }
        }
      }
      .title-of-page {
        position: absolute;
        top: 20px;
        right: -4px;
        z-index: 3;
        font-size: 10rem;
        width: 822px;
        height: 200px;
        color: #eeeff4;
      }
    }
  }
`;

const Line = styled.div`
  height: 1px;
  width: 65px;
  background-color: #c8ccd8;
  margin-left: 0;
  margin-right: auto;
  position: absolute;
`;

function TopComponentLaptop({ title1, description1, imageTopDesktop }) {
  return (
    <TopComponentLaptopStyle imageTopDesktop={imageTopDesktop}>
      <div className="collage">
        <Fade delay={500} left>
          <h1 className="title-of-page">About</h1>
        </Fade>
        <Fade>
        <div className="image-container">
          <img src={imageTopDesktop} alt="telefon" />
        </div>
        </Fade>
        <Fade delay={750} right>
        <div className="text-container">
          <div className="text">
            <Line />
            <h2>{title1}</h2>
            <p>{description1}</p>
          </div>
        </div>
        </Fade>
      </div>
    </TopComponentLaptopStyle>
  );
}

export default TopComponentLaptop;
