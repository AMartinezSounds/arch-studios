import React from 'react';
import styled from 'styled-components';

import TopComponentPhone from './TopComponentPhone';
import TopComponentTablet from './TopComponentTablet';
import TopComponentDesktop from './TopComponentDesktop';

function TopComponent() {
  return (
    <>
      <TopComponentPhone />
      <TopComponentTablet />
      <TopComponentDesktop />
    </>
  );
}

export default TopComponent;
