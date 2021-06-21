import React from 'react';
import styled from 'styled-components';
import BottomComponentDesktop from './BottomComponentDesktop';
import BottomComponentPhone from './BottomComponentPhone';
import BottomComponentTablet from './BottomComponentTablet';

const BottomComponentStyle = styled.div``;

function BottomComponent({ professionals }) {
  return (
    <BottomComponentStyle>
      <BottomComponentPhone professionals={professionals} />
      <BottomComponentTablet professionals={professionals} />
      <BottomComponentDesktop professionals={professionals} />
    </BottomComponentStyle>
  );
}

export default BottomComponent;
