import React from 'react';
import styled from 'styled-components';

import TopComponentPhone from './TopComponentPhone';
import TopComponentTablet from './TopComponentTablet';
import TopComponentDesktop from './TopComponentDesktop';

function TopComponent({ topComponentProjects }) {
  const paramourProject = topComponentProjects[3];
  const allProjects = topComponentProjects;
  return (
    <>
      <TopComponentPhone paramourProject={paramourProject} />
      <TopComponentTablet paramourProject={paramourProject} />
      <TopComponentDesktop allProjects={allProjects} />
    </>
  );
}

export default TopComponent;
