import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ProjectList from '../components/ProjectList';

const ProjectListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleStyle = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 10.9%;
  height: 386px;
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

function portfolio({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <TitleStyle>
        <Line />
        <p>PORTFOLIO</p>
      </TitleStyle>
      <ProjectListStyle>
        <ProjectList projects={projects} />
      </ProjectListStyle>
    </>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProjects {
      nodes {
        name
        date
        order
        imageDesktop {
          asset {
            fluid(maxWidth: 350) {
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
        imagePhone {
          asset {
            fluid(maxWidth: 311) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default portfolio;
