import React from 'react';
import styled from 'styled-components';

const ImgContainerStyle = styled.div`
  margin-block: 5rem;
  .mapImage {
    background-image: ${(props) => `url("${props.bgPhone}")`};
    width: 375px;
    height: 367px;
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
