import React from 'react';
import styled from 'styled-components';
import MiddleComponentDesktop from './MiddleComponentDesktop';
import MiddleComponentPhone from './MiddleComponentPhone';
import MiddleComponentTablet from './MiddleComponentTablet';

const MiddleComponentStyle = styled.div``;

function MiddleComponent({ imagesAboutPage }) {
  const title = 'Our Heritage';
  const p1 = `Founded in 2007, we started as a trio of architects. Our
  complimentary skills and relentless attention to detail turned Arch
  into one of the most sought after boutique firms in the country.`;
  const p2 = `Speciliazing in Urban Design allowed us to focus on creating
  exceptional structures that live in harmony with their surroundings.
  We consider every detail from every surrounding element to inform
  our designs.`;
  const p3 = `Our small team of world-class professionals provides input on every
  project.`;
  return (
    <MiddleComponentStyle>
      <MiddleComponentPhone title={title} p1={p1} p2={p2} p3={p3} />
      <MiddleComponentTablet title={title} p1={p1} p2={p2} p3={p3} />
      <MiddleComponentDesktop
        title={title}
        p1={p1}
        p2={p2}
        p3={p3}
        imagesAboutPage={imagesAboutPage}
      />
    </MiddleComponentStyle>
  );
}

export default MiddleComponent;
