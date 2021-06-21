import React from 'react';
import styled from 'styled-components';

const MiddleComponentTabletStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  height: 518px;
  width: 74.74%;
  max-width: 574px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
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
  .title {
    font-size: 2.3rem;
    width: 58%;
    max-width: 330px;
  }
  .paragraphs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 1.7rem;
    color: #7d828f;
  }

  @media (min-width: 1439px) {
    display: none;
  }
`;

function MiddleComponentTablet({ title, p1, p2, p3 }) {
  return (
    <MiddleComponentTabletStyle>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="paragraphs">
        <p className="p1">{p1}</p>
        <p className="p2">{p2}</p>
        <p className="p3">{p3}</p>
      </div>
    </MiddleComponentTabletStyle>
  );
}

export default MiddleComponentTablet;
