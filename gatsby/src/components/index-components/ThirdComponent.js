import React from 'react';
import ThirdComponentPhone from './ThirdComponentPhone';

function ThirdComponent({ smallTeam }) {
  const bgPhone = smallTeam.imagePhone.asset.fluid.src;
  const bgTablet = smallTeam.imageTablet.asset.fluid.src;
  const bgDesktop = smallTeam.imageDesktop.asset.fluid.src;
  return (
    <>
      <ThirdComponentPhone
        bgPhone={bgPhone}
        bgTablet={bgTablet}
        bgDesktop={bgDesktop}
      />
    </>
  );
}

export default ThirdComponent;
