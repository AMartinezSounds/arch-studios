import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BottomComponent from '../components/contact-components/BottomComponent';
import MiddleComponent from '../components/contact-components/MiddleComponent';
import TopComponent from '../components/contact-components/TopComponent';

import Map from '../components/contact-components/Map';

const TitleAside = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 12.7%;

  height: 325px;
  p {
    text-orientation: upright;
    writing-mode: vertical-lr;
    letter-spacing: 0.5rem;
    color: #c8ccd8;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const Line = styled.div`
  background-color: #c8ccd8;
  width: 1px;
  height: 104px;
`;

function contact({ data }) {
  const mapImages = data.mapImage;
  return (
    <>
      <TitleAside>
        <Line />
        <p>CONTACT</p>
      </TitleAside>
      <TopComponent />
      <MiddleComponent />
      <Map
        bgPhone={mapImages.imagePhone.asset.fluid.src}
        bgTablet={mapImages.imageTablet.asset.fluid.src}
        bgDesktop={mapImages.imageDesktop.asset.fluid.src}
      />
      <BottomComponent />
    </>
  );
}

export const mapQuery = graphql`
  query mapImagesQuery {
    mapImage: sanityImages {
      id
      imageDesktop {
        asset {
          fluid(maxWidth: 1110) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imagePhone {
        asset {
          fluid(maxWidth: 572) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageTablet {
        asset {
          fluid(maxWidth: 375) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default contact;
