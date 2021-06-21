import React from 'react';
import styled from 'styled-components';

const MiddleComponentPhoneStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-inline: auto;
  width: 82.94%;
  max-width: 375px;
  height: 618px;
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
  h2 {
    font-size: 2.8rem;
    width: 77%;
  }
  .paragraphs {
    height: 68.77%;
    font-size: 1rem;
    line-height: 1.7rem;
    color: #7d828f;
  }
  @media (min-width: 500px) {
    height: 518px;
    h2 {
      width: 79.41%;
      max-width: 311px;
      margin-inline: auto;
    }
    .paragraphs {
      height: 75%;
    }
    .p1,
    .p2,
    .p3 {
      width: 79%;
      max-width: 311px;
      margin-inline: auto;
    }
  }
  @media (min-width: 767px) {
    display: none;
  }
`;

function MiddleComponentPhone({ title, p1, p2, p3 }) {
  return (
    <MiddleComponentPhoneStyle>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="paragraphs">
        <p className="p1">{p1}</p>
        <p className="p2">{p2}</p>
        <p className="p3">{p3}</p>
      </div>
    </MiddleComponentPhoneStyle>
  );
}

export default MiddleComponentPhone;
