import React from 'react';
import styled from 'styled-components';
import ProjectSlider from './ProjectSlider';

const TopComponentDesktopStyle = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
  height: 720px;
  width: 1110px;
  margin-inline: auto;
`;

function TopComponentDesktop({ allProjects }) {
  return (
    <>
      <TopComponentDesktopStyle>
        <ProjectSlider allProjects={allProjects} />
      </TopComponentDesktopStyle>
    </>
  );
}

export default TopComponentDesktop;
