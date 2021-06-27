import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Fade from 'react-reveal/Fade';

const MiddleComponentDesktopStyle = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  width: 77.08%;
  margin-inline: auto;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 65px;
    height: 1px;
    background-color: #c8ccd8;
  }
`;
const TextComposition = styled.div`
  width: 446px;
  .title {
    font-size: 2.6rem;
    width: 77%;
  }
  .paragraphs {
    height: 68.77%;
    font-size: 1rem;
    line-height: 1.7rem;
    color: #7d828f;
  }
`;
const ImageContainer = styled.div`
  min-width: 540px;
`;

function MiddleComponentDesktop({ title, p1, p2, p3, imagesAboutPage }) {
  const image = imagesAboutPage[0].imageDesktop.asset.fluid;
  console.log(image);
  return (
    <Fade fraction="0.1">
    <MiddleComponentDesktopStyle>
      <TextComposition>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="paragraphs">
          <p className="p1">{p1}</p>
          <p className="p2">{p2}</p>
          <p className="p3">{p3}</p>
        </div>
      </TextComposition>
      <ImageContainer>
        <Img fluid={image} />
      </ImageContainer>
    </MiddleComponentDesktopStyle>
    </Fade>
  );
}

export default MiddleComponentDesktop;
