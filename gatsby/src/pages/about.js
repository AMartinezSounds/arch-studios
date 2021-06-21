import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import BottomComponent from '../components/about-components/BottomComponent';
import MiddleComponent from '../components/about-components/MiddleComponent';
import TopComponent from '../components/about-components/TopComponent';

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

const Components = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    row-gap: 90px;
  }
`;

function about({ data }) {
  const professionals = data.professionals.nodes;
  const imagesAboutPage = data.imagesAboutPage.nodes;
  return (
    <>
      <TitleAside>
        <Line />
        <p>ABOUT US</p>
      </TitleAside>
      <Components>
        <TopComponent imagesAboutPage={imagesAboutPage} />
        <MiddleComponent imagesAboutPage={imagesAboutPage} />
        <BottomComponent professionals={professionals} />
      </Components>
    </>
  );
}

export const query = graphql`
  query AboutPageQuery {
    imagesAboutPage: allSanityImages {
      nodes {
        name
        imagePhone {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageDesktop {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageTablet {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    professionals: allSanityPerson {
      nodes {
        name
        order
        image {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
        position
      }
    }
  }
`;

export default about;
