import React from 'react';
import styled from 'styled-components';

import TopComponentPhone from './TopComponentPhone';
import TopComponentTablet from './TopComponentTablet';
import TopComponentDesktop from './TopComponentDesktop';

function TopComponent({ topComponentProjects }) {
  const paramourProject = topComponentProjects[0];
  return (
    <>
      <TopComponentPhone paramourProject={paramourProject} />
      <TopComponentTablet />
      <TopComponentDesktop />
    </>
  );
}

export default TopComponent;
