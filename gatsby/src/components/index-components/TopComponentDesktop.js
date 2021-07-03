import React from 'react';
import styled from 'styled-components';
import ProjectSlider from './ProjectSlider';

import Zoom from 'react-reveal/Zoom';

const TopComponentDesktopStyle = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  min-height: 720px;
  width: 77.08%;
  min-width: 1110px;
  max-width: 2500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
`;

function TopComponentDesktop({ allProjects }) {
  return (
    <>
      <Zoom>
        <TopComponentDesktopStyle>
          <ProjectSlider allProjects={allProjects} />
        </TopComponentDesktopStyle>
      </Zoom>
    </>
  );
}

export default TopComponentDesktop;
