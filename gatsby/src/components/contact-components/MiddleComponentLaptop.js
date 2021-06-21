import React from 'react';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const MiddleComponentStyle = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
  @media (min-width: 1440px) {
    margin-inline: auto;
    width: 1110px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 31.59%;
      height: 80%;
      font-size: 2.4rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0px;
        height: 1px;
        width: 65px;
        border-bottom: 1px solid #c8ccd8;
      }
    }

    .main-office,
    .second-office {
      width: 31.59%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

function MiddleComponent() {
  return (
    <MiddleComponentStyle>
      <div className="title">
        <h2>Contact Details</h2>
      </div>
      <div className="main-office">
        <div className="office">
          <p className="office-title">
            <strong>Main Office</strong>
          </p>
          <p>Mail: archone@mail.com</p>
          <p>Address: 1892 Chenoweth Drive TN</p>
          <p>Phone: 123-456-3451</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.es/maps/@41.5667688,2.0185088,14z"
            className="link-to-maps"
          >
            View on Map
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </a>
        </div>
      </div>
      <div className="second-office">
        <div className="office">
          <p className="office-title">
            <strong>Office II</strong>
          </p>
          <p>Mail: archtwo@mail.com</p>
          <p>Address: 3399 Wines Lane TX</p>
          <p>Phone: 832-123-4321</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.es/maps/@41.5667688,2.0185088,14z"
            className="link-to-maps"
          >
            View on Map
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </a>
        </div>
      </div>
    </MiddleComponentStyle>
  );
}

export default MiddleComponent;
