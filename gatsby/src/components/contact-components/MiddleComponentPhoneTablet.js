import React from 'react';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
const MiddleComponentPhoneTabletStyle = styled.div`
  height: 630px;
  width: 82.94%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 26.03%;
    font-size: 2rem;
    display: flex;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: -30px;
      height: 1px;
      width: 65px;
      border-bottom: 1px solid #c8ccd8;
    }
  }
  .addresses {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a {
      display: flex;
      align-items: center;
      color: black;
    }
    p {
      color: #7d828f;
    }
  }
  .office-title {
    font-weight: bold;
    color: #60636d !important;
  }
  @media (min-width: 500px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    margin-bottom: 10rem;
    align-items: stretch;
    width: 77.07%;
    max-width: 573px;
    height: 531px;
    .main-office,
    .second-office {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        margin-top: 2.2rem;
        align-self: center;
      }
    }
  }
  @media (min-width: 1299px) {
    display: none;
  }
`;

function MiddleComponentPhoneTablet() {
  return (
    <Fade fraction="0.3">
      <MiddleComponentPhoneTabletStyle>
      <div className="title">
        <h2>Contact Details</h2>
      </div>
      <div className="addresses">
        <div className="main-office">
          <div className="office">
            <p className="office-title">
              <strong>Main Office</strong>
            </p>
            <p>Mail: archone@mail.com</p>
            <p>Address: 1892 Chenoweth Drive TN</p>
            <p>Phone: 123-456-3451</p>
          </div>
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
        <div className="second-office">
          <div className="office">
            <p className="office-title">
              <strong>Office II</strong>
            </p>
            <p>Mail: archtwo@mail.com</p>
            <p>Address: 3399 Wines Lane TX</p>
            <p>Phone: 832-123-4321</p>
          </div>
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
    </MiddleComponentPhoneTabletStyle>
    </Fade>
  );
}

export default MiddleComponentPhoneTablet;
