import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
const SecondComponentPhoneStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 643px;
  width: 82.94%;
  max-width: 311px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 65px;
    background-color: #c8ccd8;
  }
  .title {
    font-size: 2.7rem;
  }
  .text {
    line-height: 1.4rem;
    color: #7d828f;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;

function SecondComponentPhone() {
  return (
    <Fade fraction="0.3">
      <SecondComponentPhoneStyle>
      <h2 className="title">Welcome to Arch Studio</h2>
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
        of each project. This allows us to work in harmony the surrounding area
        to create truly stunning projects that will stand the test of time.
      </p>
    </SecondComponentPhoneStyle>
    </Fade>
  );
}

export default SecondComponentPhone;
