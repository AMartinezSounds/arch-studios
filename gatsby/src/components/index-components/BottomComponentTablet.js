import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HiArrowRight } from 'react-icons/hi';

const BottomComponentTabletStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  height: 925px;
  width: 74.61%;
  max-width: 573px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .title-section-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
  @media (min-width: 1439px) {
    display: none;
  }
`;

const SingleProjectStyle = styled.div`
  background-image: ${(props) => `url("${props.bgTablet}")`};
  background-repeat: no-repeat;
  width: 100%;
  height: 240px;
  position: relative;
  h2,
  p {
    position: absolute;
    color: white;
    z-index: 2;
    left: 30px;
  }
  h2 {
    top: 140px;
  }
  p {
    top: 180px;
  }
  .number {
    position: absolute;
    font-size: 240px;
    top: -280px;
    left: 400px;
    width: fit-content;
    opacity: 0.5;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
  }
`;

function SingleProject({ project }) {
  return (
    <SingleProjectStyle bgTablet={project.imageTablet.asset.fluid.src}>
      <h2>{project.name}</h2>
      <p>View All Projects</p>
      <p className="number">{project.order - 3}</p>
    </SingleProjectStyle>
  );
}

function BottomComponentTablet({ projects }) {
  return (
    <BottomComponentTabletStyle>
      <div className="title-section-container">
        <h2 className="title-section">Featured</h2>
        <Link className="linkPortfolioButton" to="/portfolio">
          See All
          <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
        </Link>
      </div>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </BottomComponentTabletStyle>
  );
}

export default BottomComponentTablet;
