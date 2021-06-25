import React from 'react';
import styled from 'styled-components';

const ImgContainerStyle = styled.div`
  margin-inline: auto;
  background-image: ${(props) => `url("${props.bgPhone}")`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  max-width: 375px;
  height: 367px;
  @media (min-width: 768px) {
    background-image: ${(props) => `url("${props.bgTablet}")`};
    max-width: 572px;
    height: 560px;
  }
  @media (min-width: 1440px) {
    background-image: ${(props) => `url("${props.bgDesktop}")`};
    max-width: 1110px;
    height: 560px;
  }
`;

function Map({ bgPhone, bgTablet, bgDesktop }) {
  return (
    <ImgContainerStyle
      bgPhone={bgPhone}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <div className="mapImage" />
    </ImgContainerStyle>
  );
}

export default Map;
