import React from 'react';

import TopComponentPhone from './TopComponentPhone';
import TopComponentTablet from './TopComponentTablet';
import TopComponentLaptop from './TopComponentLaptop';

function TopComponent() {
  const title = 'Tell us about your project';
  const description = `We'd love to hear more about your project. Please, leave a message
  below or give us a call. We have two offices, one in Texas and one
  in Tennessee. If you find yourself nearby, come say hello!`;
  return (
    <>
      <TopComponentPhone title={title} description={description} />
      <TopComponentTablet title={title} description={description} />
      <TopComponentLaptop title={title} description={description} />
    </>
  );
}

export default TopComponent;
