import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const TopComponentTabletStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  margin-inline: auto;
  margin-bottom: 4rem;
  height: 720px;
  width: 573px;
  background-image: ${(props) => `url("${props.bgTablet}")`};
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .titleProject {
    font-size: 4rem;
    width: 457px;
    color: white;
    position: absolute;
    left: 30px;
    top: 100px;
  }
  .descriptionProject {
    line-height: 1.7rem;
    color: white;
    position: absolute;
    left: 30px;
    top: 300px;
    width: 457px;
    font-size: 1.1rem;
  }
  .link {
    position: absolute;
    z-index: 2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 252px;
    height: 72px;
    background-color: black;
    top: 450px;
    left: 30px;
    transition: all 350ms linear;
    &:hover {
      background-color: #60636d;
    }
  }
  @media (min-width: 1300px) {
    display: none;
  }
`;

function TopComponentTablet({ paramourProject }) {
  const bgTablet = paramourProject.imageTablet.asset.fluid.src;
  return (
    <TopComponentTabletStyle bgTablet={bgTablet}>
      <h2 className="titleProject">{paramourProject.name}</h2>
      <p className="descriptionProject">{paramourProject.description}</p>
      <Link className="link" to="/portfolio">
        See Our Portfolio
        <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
      </Link>
    </TopComponentTabletStyle>
  );
}

export default TopComponentTablet;
