import React from 'react';
import styled from 'styled-components';

import TopComponentPhone from './TopComponentPhone';
import TopComponentTablet from './TopComponentTablet';
import TopComponentDesktop from './TopComponentDesktop';

const TopComponentStyle = styled.div``;

function TopComponent({ imagesAboutPage }) {
  const images = imagesAboutPage;
  const imageTopPhone = images[1].imagePhone.asset.fluid.src;
  const imageTopTablet = images[1].imageTablet.asset.fluid.src;
  const imageTopDesktop = images[1].imageDesktop.asset.fluid.src;
  const title1 = 'Your team of professionals';
  const description1 = `Our small team of world-class professionals will work with you every
  step of the way. Strong relationships are at the core of everything we
  do. This extends to the relationship our projects have with their
  surroundings.`;
  return (
    <TopComponentStyle>
      <TopComponentPhone
        title1={title1}
        description1={description1}
        imageTopPhone={imageTopPhone}
      />
      <TopComponentTablet
        title1={title1}
        description1={description1}
        imageTopTablet={imageTopTablet}
      />
      <TopComponentDesktop
        title1={title1}
        description1={description1}
        imageTopDesktop={imageTopDesktop}
      />
    </TopComponentStyle>
  );
}

export default TopComponent;
