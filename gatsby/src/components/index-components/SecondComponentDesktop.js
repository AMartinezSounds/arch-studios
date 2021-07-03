import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Fade from 'react-reveal/Fade';


const SecondComponentDesktopStyle = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  height: 600px;
  width: 77.08%;
  min-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  .big-title {
    top: -110px;
    left: 0;
    position: absolute;
    margin-top: 0;
    font-size: 14rem;
    color: #eeeff4;
    z-index: 2;
  }
  .text-container {
    width: 446px;
    height: 493px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .title-of-page {
    font-size: 3.8rem;
    margin-top: 0;
  }
  .text {
    line-height: 1.6rem;
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 568px;
  margin-left: 9rem;
`;

function SecondComponentDesktop({ welcomeImage }) {
  const image = welcomeImage;
  return (
    <Fade fraction="0.1">
      <SecondComponentDesktopStyle>
      <h1 className="big-title">Welcome</h1>
      <div className="text-container">
        <h2 className="title-of-page">Welcome to Arch Studio</h2>
        <p className="text p1">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p className="text p2">
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p className="text p3">
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
      <ImageContainer>
        <Img fluid={image} />
      </ImageContainer>
    </SecondComponentDesktopStyle>
    </Fade>
  );
}

export default SecondComponentDesktop;
