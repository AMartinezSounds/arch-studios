import React from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

const ImgContainerStyle = styled.div`
  margin-inline: auto;
  margin-bottom: 3rem;
  background-image: ${(props) => `url("${props.bgPhone}")`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  max-width: 375px;
  height: 367px;
  @media (min-width: 768px) {
    margin-bottom: 10rem;
    background-image: ${(props) => `url("${props.bgTablet}")`};
    max-width: 572px;
    height: 560px;
  }
  @media (min-width: 1300px) {
    background-image: ${(props) => `url("${props.bgDesktop}")`};
    max-width: 1110px;
    height: 560px;
    margin-bottom: 10rem;
  }
`;

function Map({ bgPhone, bgTablet, bgDesktop }) {
  return (
    <Fade fraction="0.1">
        <ImgContainerStyle
      bgPhone={bgPhone}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <div className="mapImage" />
    </ImgContainerStyle>
    </Fade>
  );
}

export default Map;
