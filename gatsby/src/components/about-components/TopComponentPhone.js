import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const TopComponentPhoneStyles = styled.div`
  height: 630px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ImageComposition = styled.div`
  background-image: ${(props) => `url("${props.imageTopPhone}")`};
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
    margin-left: auto;
    margin-right: auto;;
  }
`;

const TextComposition = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 311px;
  h2 {
    font-size: 2.6rem;
  }
  p {
    line-height: 1.7rem;
    color: #7d828f;
  }
`;

function TopComponentPhone({ title1, description1, imageTopPhone }) {
  return (
    <Fade>
      <TopComponentPhoneStyles>
      <ImageComposition imageTopPhone={imageTopPhone}>
        <div className="white-space" />
      </ImageComposition>
      <TextComposition>
        <h2>{title1}</h2>
        <p>{description1}</p>
      </TextComposition>
    </TopComponentPhoneStyles>
    </Fade>
  );
}

export default TopComponentPhone;
