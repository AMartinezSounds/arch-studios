import React from 'react';
import styled from 'styled-components';
// import imageTablet from '../../../public/contact/tablet/image-hero.jpg';
import imageLaptop from '../../../public/contact/desktop/image-hero.jpg';

import Fade from 'react-reveal/Fade';

const TopComponentLaptopStyle = styled.div`
  display: none;
  @media (min-width: 1300px) {
    display: block;
    height: 720px;
    width: 77.07%;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8rem;
    .collage {
      height: 100%;
      position: relative;
      .image-container {
        position: relative;
        img {
          width: 635px;
          height: 720px;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0px;
          width: 635px;
          height: 720px;
          background-color: rgba(0, 0, 0, 0.7);
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
        right: -1px;
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

function TopComponentLaptop({ title, description }) {
  return (
    <TopComponentLaptopStyle>
      <div className="collage">
      <Fade delay={500} left>
        <h1 className="title-of-page">Contact</h1>
      </Fade>
      <Fade>
      <div className="image-container">
          <img src={imageLaptop} alt="telefon" />
        </div>
      </Fade>
      <Fade delay={750} right>
      <div className="text-container">
          <div className="text">
            <Line />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Fade>
      </div>
    </TopComponentLaptopStyle>
  );
}

export default TopComponentLaptop;
