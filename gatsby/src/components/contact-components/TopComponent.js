import React from 'react';
import styled from 'styled-components';

import imagePhone from '../../../static/contact/image-hero.jpg';

const TopComponentStyles = styled.div`
  height: 625px;
`;

const ImageComposition = styled.div`
  .image {
    background-image: url(${imagePhone});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    width: 100%;
    height: 240px;
    display: flex;
    align-items: flex-end;
    .white-space {
      width: 343px;
      height: 45px;
      background-color: white;
      margin-bottom: -0.08rem;
    }
  }
`;

const TextComposition = styled.div`
  margin-left: 1.5rem;
  margin-right: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  h2 {
    font-size: 2.55rem;
  }
  p {
    color: #60636d;
    font-size: 1.1rem;
    line-height: 1.7rem;
  }
`;

function TopComponent() {
  return (
    <TopComponentStyles>
      <ImageComposition>
        <div className="image">
          <div className="white-space" />
        </div>
      </ImageComposition>
      <TextComposition>
        <h2>Tell us about your project</h2>
        <p>
          We'd love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </TextComposition>
    </TopComponentStyles>
  );
}

export default TopComponent;
