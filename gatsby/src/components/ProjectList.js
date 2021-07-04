import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'
const SingleProjectStyle = styled.div`
  margin-bottom: 30px;
  color: white;
  background-image: ${(props) => `url("${props.bgPhone}")`};
  width: 311px;
  height: 240px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  p,
  h2 {
    padding-left: 1rem;
    margin-top: 0;
    z-index: 2;
  }
  h2 {
    position: absolute;
    bottom: 1.5rem;
    left: 0rem;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 600px) {
    background-image: ${(props) => `url("${props.bgTablet}")`};
    width: 573px;
    height: 240px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1340px) {
    background-image: ${(props) => `url("${props.bgDesktop}")`};
    width: 350px;
    height: 560px;
    background-repeat: no-repeat;
  }
`;

const ProjectListStyle = styled.div`
  @media (min-width: 1340px) {
    margin-left: auto;
    margin-right: auto;
    width: 77.07%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 11px;
  }
`;

function SingleProject({ project }) {
  return (
    <Fade fraction="0.1">
      <SingleProjectStyle key={project.order}
      bgPhone={project.imagePhone.asset.fluid.src}
      bgTablet={project.imageTablet.asset.fluid.src}
      bgDesktop={project.imageDesktop.asset.fluid.src}
    >
      <h2>{project.name}</h2>
      <p>{project.date}</p>
    </SingleProjectStyle>
    </Fade>
  );
}

function ProjectList({ projects}) {
  return (
    <ProjectListStyle>
      {projects.map((project) => 
      <SingleProject key={project.order} project={project} />)}
    </ProjectListStyle>
  );
}

export default ProjectList;
