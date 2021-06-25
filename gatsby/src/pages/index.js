import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import TopComponent from '../components/index-components/TopComponent';
import SecondComponent from '../components/index-components/SecondComponent';
import ThirdComponent from '../components/index-components/ThirdComponent';
import BottomComponent from '../components/index-components/BottomComponent';

const TitleAside = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 12.7%;

  height: 250px;
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

function index({ data }) {
  const topComponentProjects = data.projectsHome.nodes;
  const project1 = data.bottomComponent.nodes[2];
  const project2 = data.bottomComponent.nodes[5];
  const project3 = data.bottomComponent.nodes[3];
  const projects = [project1, project2, project3];
  const smallTeam = data.images.nodes[3];
  const welcomeImage = data.images.nodes[1].imageDesktop.asset.fluid;
  return (
    <>
      <TitleAside>
        <Line />
        <p>HOME</p>
      </TitleAside>
      <TopComponent topComponentProjects={topComponentProjects} />
      <SecondComponent welcomeImage={welcomeImage} />
      <ThirdComponent smallTeam={smallTeam} />
      <BottomComponent projects={projects} />
    </>
  );
}

export const query = graphql`
  query IndexPageQuery {
    bottomComponent: allSanityProjects {
      nodes {
        name
        id
        order
        imageDesktop {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imagePhone {
          asset {
            fluid(maxWidth: 311) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageTablet {
          asset {
            fluid(maxWidth: 573) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    images: allSanityImages {
      nodes {
        name
        imagePhone {
          asset {
            fluid(maxWidth: 375) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageDesktop {
          asset {
            fluid(maxWidth: 1110) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageTablet {
          asset {
            fluid(maxWidth: 573) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    projectsHome: allSanityProjectsHome {
      nodes {
        id
        name
        order
        description
        imagePhone {
          asset {
            fluid(maxWidth: 375) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageDesktop {
          asset {
            fluid(maxWidth: 1110) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageTablet {
          asset {
            fluid(maxWidth: 573) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default index;
