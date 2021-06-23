import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import TopComponent from '../components/index-components/TopComponent';
import SecondComponent from '../components/index-components/SecondComponent';
import ThirdComponent from '../components/index-components/ThirdComponent';
import BottomComponent from '../components/index-components/BottomComponent';

function index({ data }) {
  const topComponentProjects = data.projectsHome.nodes;
  const project1 = data.bottomComponent.nodes[2];
  const project2 = data.bottomComponent.nodes[5];
  const project3 = data.bottomComponent.nodes[3];
  const projects = [project1, project2, project3];
  const smallTeam = data.images.nodes[2];
  const welcomeImage = data.images.nodes[4].imageDesktop.asset.fluid;
  return (
    <>
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
