import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HiArrowRight } from 'react-icons/hi';

const BottomComponentPhoneStyle = styled.div`
  height: 960px;
  width: 82.94%;
  max-width: 311px;
  margin-inline: auto;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title-section {
    font-size: 3rem;
  }
  .linkPortfolioButton {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color: black;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const SingleProjectStyle = styled.div`
  background-image: ${(props) => `url("${props.bgPhone}")`};
  background-repeat: no-repeat;
  height: 240px;
  max-width: 311px;
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
    <SingleProjectStyle bgPhone={project.imagePhone.asset.fluid.src}>
      <h2>{project.name}</h2>
      <p>View All Projects</p>
    </SingleProjectStyle>
  );
}

function BottomComponentPhone({ projects }) {
  return (
    <BottomComponentPhoneStyle>
      <h2 className="title-section">Featured</h2>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
      <Link className="linkPortfolioButton" to="/portfolio">
        See All
        <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
      </Link>
    </BottomComponentPhoneStyle>
  );
}

export default BottomComponentPhone;
