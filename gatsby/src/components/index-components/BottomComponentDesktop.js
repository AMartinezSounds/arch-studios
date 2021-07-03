import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HiArrowRight } from 'react-icons/hi';

import Fade from 'react-reveal/Fade';

const BottomComponentDesktopStyle = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  width: 77.08%;
  min-width: 1110px;
  height: 650px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title-section-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
  }
  .title-section {
    font-size: 3rem;
  }
  .linkPortfolioButton {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29.5%;
    max-width: 169px;
    height: 72px;
    background-color: black;
    transition: all 350ms linear;
    &:hover {
      background-color: #60636d;
    }
  }
  .featured-projects {
    width: 100%;
    height: 560px;
    display: flex;
    justify-content: space-between;
  }
`;
const SingleProjectStyle = styled.div`
  background-image: ${(props) => `url("${props.bgDesktop}")`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 30%;
  min-width: 350px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
  }
  h2,
  p {
    position: absolute;
    color: white;
    z-index: 2;
    left: 30px;
  }
  h2 {
    top: 450px;
  }
  p {
    top: 490px;
  }
  .number {
    position: absolute;
    font-size: 240px;
    top: -280px;
    left: 50%;

    opacity: 0.5;
  }
`;

function SingleProject({ project }) {
  return (
    <SingleProjectStyle bgDesktop={project.imageDesktop.asset.fluid.src}>
      <h2>{project.name}</h2>
      <p>View All Projects</p>
      <p className="number">{project.order - 3}</p>
    </SingleProjectStyle>
  );
}

function BottomComponentDesktop({ projects }) {
  return (
    <Fade fraction="0.1">
        <BottomComponentDesktopStyle>
      <div className="title-section-container">
        <h2 className="title-section">Featured</h2>
        <Link className="linkPortfolioButton" to="/portfolio">
          See All
          <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
        </Link>
      </div>
      <div className="featured-projects">
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </BottomComponentDesktopStyle>
    </Fade>
  );
}

export default BottomComponentDesktop;
