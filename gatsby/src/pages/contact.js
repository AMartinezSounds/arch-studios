import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import BottomComponent from '../components/contact-components/BottomComponent';
import MiddleComponent from '../components/contact-components/MiddleComponent';
import TopComponent from '../components/contact-components/TopComponent';
import Map from '../components/contact-components/Map';

const Line = styled.div`
  margin-left: 1.5rem;
  height: 1px;
  width: 100px;
  background-color: #c8ccd8;
  margin-top: 0.1rem;
`;

function contact({ data }) {
  const mapImages = data.mapImage;
  return (
    <>
      <TopComponent />
      <Line />
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
