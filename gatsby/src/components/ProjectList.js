import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SingleProjectStyle = styled.div`
  background-image: ${(props) => `url("${props.bg}")`};
  background-repeat: no-repeat;
  width: 450px;
  height: 500px;
`;

function SingleProject({ project }) {
  console.log(project.image.asset.fluid.src);
  return (
    <SingleProjectStyle bg={project.image.asset.fluid.src}>
      <p>image</p>
    </SingleProjectStyle>
  );
}

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
