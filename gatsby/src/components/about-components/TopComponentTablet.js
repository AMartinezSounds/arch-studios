import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import imageTablet from '../../../public/contact/tablet/image-hero.jpg';

const TopComponentTabletStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8rem;
  background-image: ${(props) => `url("${props.imageTopTablet}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 720px;
  max-width: 573px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 573px;
    height: 720px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .title-of-page {
    position: absolute;
    top: 16.39%;
    left: 19%;
    width: 86.04%;
    height: 27.78%;
    font-size: 8rem;
    color: #eeeff4;
    z-index: 3;
  }
  .text {
    width: 89.53%;
    height: 59.87%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 2;

    h2 {
      font-size: 3.4rem;
      width: 79.41%;
      margin-left: auto;
      margin-right: auto;
    }
    p {
      width: 79.41%;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7rem;
      color: #7d828f;
    }
  }
  @media (min-width: 1300px) {
    display: none;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 65px;
  background-color: #c8ccd8;
  margin-left: 10%;
  margin-right: auto;
`;

function TopComponentTablet({ title1, description1, imageTopTablet }) {
  return (
    <Fade>
      <TopComponentTabletStyle imageTopTablet={imageTopTablet}>
      <h1 className="title-of-page">About</h1>
      <div className="text">
        <Line />
        <h2>{title1}</h2>
        <p>{description1}</p>
      </div>
    </TopComponentTabletStyle>
    </Fade>
  );
}

export default TopComponentTablet;
