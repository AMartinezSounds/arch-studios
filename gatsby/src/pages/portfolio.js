import React from 'react';
import { graphql } from 'gatsby';

import ProjectList from '../components/ProjectList';

function portfolio({ data }) {
  const projects = data.projects.nodes;
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProjectdesktop {
      nodes {
        name
        id
        image {
          asset {
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default portfolio;
