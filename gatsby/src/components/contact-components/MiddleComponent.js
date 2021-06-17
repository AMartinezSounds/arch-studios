import React from 'react';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const MiddleComponentStyle = styled.div`
  margin-left: 1.5rem;
  margin-right: 2.5rem;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 164px;
  }

  h2 {
    font-size: 2.55rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  .office {
    font-weight: bold;
    color: #60636d;
  }

  .link-to-maps {
    display: flex;
    align-items: center;
    color: black;
  }

  .main-office,
  .second-office {
    color: #7d828f;
  }
`;

function MiddleComponent() {
  return (
    <MiddleComponentStyle>
      <div className="title">
        <h2>Contact</h2>
        <h2>Details</h2>
      </div>
      <div className="main-office">
        <p className="office">
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
      <div className="second-office">
        <p className="office">
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
    </MiddleComponentStyle>
  );
}

export default MiddleComponent;
