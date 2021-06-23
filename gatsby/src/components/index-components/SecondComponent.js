import React from 'react';
import SecondComponentDesktop from './SecondComponentDesktop';

import SecondComponentPhone from './SecondComponentPhone';
import SecondComponentTablet from './SecondComponentTablet';

function SecondComponent({ welcomeImage }) {
  return (
    <div>
      <SecondComponentPhone />
      <SecondComponentTablet />
      <SecondComponentDesktop welcomeImage={welcomeImage} />
    </div>
  );
}

export default SecondComponent;
