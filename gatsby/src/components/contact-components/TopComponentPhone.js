import React from 'react';
import styled from 'styled-components';
import imagePhone from '../../../public/contact/mobile/image-hero.jpg';

const TopComponentPhoneStyles = styled.div`
  height: 630px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ImageComposition = styled.div`
  background-image: url(${imagePhone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 240px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  .white-space {
    width: 91.47%;
    height: 45px;
    background-color: white;
    margin-bottom: -0.08rem;
  }
  @media (min-width: 500px) {
    width: 70%;
    margin-inline: auto;
  }
`;

const TextComposition = styled.div`
  margin-inline: auto;
  width: 311px;
  h2 {
    font-size: 2.6rem;
  }
  p {
    line-height: 1.7rem;
    color: #7d828f;
  }
`;

function TopComponentPhone({ title, description }) {
  return (
    <>
      <TopComponentPhoneStyles>
        <ImageComposition>
          <div className="white-space" />
        </ImageComposition>
        <TextComposition>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextComposition>
      </TopComponentPhoneStyles>
    </>
  );
}

export default TopComponentPhone;
