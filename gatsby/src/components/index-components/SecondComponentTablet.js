import React from 'react';
import styled from 'styled-components';

const SecondComponentTabletStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  margin-inline: auto;
  width: 572px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .big-title {
    margin-top: 0;
    font-size: 8rem;
    color: #eeeff4;
  }
  .title-of-page {
    margin-top: -4rem;
    font-size: 2.8rem;
    width: 58%;
  }
  .text {
    margin-top: 0;
    line-height: 1.4rem;
    color: #7d828f;
  }
  @media (min-width: 1299px) {
    display: none;
  }
`;

function SecondComponentTablet() {
  return (
    <SecondComponentTabletStyle>
      <h1 className="big-title">Welcome</h1>
      <h2 className="title-of-page">Welcome to Arch Studio</h2>
      <div className="text-container">
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
    </SecondComponentTabletStyle>
  );
}

export default SecondComponentTablet;
