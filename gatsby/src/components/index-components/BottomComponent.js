import React from 'react';
import styled from 'styled-components';
import BottomComponentDesktop from './BottomComponentDesktop';
import BottomComponentPhone from './BottomComponentPhone';
import BottomComponentTablet from './BottomComponentTablet';

const BottomComponentStyle = styled.div``;

function BottomComponent({ projects }) {
  return (
    <BottomComponentStyle>
      <BottomComponentPhone projects={projects} />
      <BottomComponentTablet projects={projects} />
      <BottomComponentDesktop projects={projects} />
    </BottomComponentStyle>
  );
}

export default BottomComponent;
