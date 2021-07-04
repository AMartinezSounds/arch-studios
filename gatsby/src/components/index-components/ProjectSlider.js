import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { HiArrowRight } from 'react-icons/hi';

const Carousel = styled(Slider)``;

const ProjectStyle = styled.div`
  background-image: ${(props) => `url("${props.bg}")`};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 720px;
  max-height: 75vh;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .text {
    position: absolute;
    top: 150px;
    left: 200px;
    color: white;
    width: 544px;
    height: 361px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      margin-top: 0;
      font-size: 4rem;
      width: 80%;
    }
    p {
      margin-top: -2rem;
      width: 80%;
      line-height: 1.4rem;
    }
  }
  .link {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 252px;
    height: 72px;
    background-color: black;
    top: 300px;
    left: 30px;
    transition: all 350ms linear;
    &:hover {
      background-color: #60636d;
    }
  }
`;

function ProjectSlider({ allProjects }) {
  const project1 = allProjects[3];
  const project2 = allProjects[0];
  const project3 = allProjects[2];
  const project4 = allProjects[1];

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <ProjectStyle bg={project1.imageDesktop.asset.fluid.src}>
        <div className="text">
          <h2>{project1.name}</h2>
          <p>{project1.description}</p>
          <Link className="link" to="/portfolio">
            See Our Portfolio
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </Link>
        </div>
      </ProjectStyle>
      <ProjectStyle bg={project2.imageDesktop.asset.fluid.src}>
        <div className="text">
          <h2>{project2.name}</h2>
          <p>{project2.description}</p>
          <Link className="link" to="/portfolio">
            See Our Portfolio
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </Link>
        </div>
      </ProjectStyle>
      <ProjectStyle bg={project3.imageDesktop.asset.fluid.src}>
        <div className="text">
          <h2>{project3.name}</h2>
          <p>{project3.description}</p>
          <Link className="link" to="/portfolio">
            See Our Portfolio
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </Link>
        </div>
      </ProjectStyle>
      <ProjectStyle bg={project4.imageDesktop.asset.fluid.src}>
        <div className="text">
          <h2>{project4.name}</h2>
          <p>{project4.description}</p>
          <Link className="link" to="/portfolio">
            See Our Portfolio
            <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
          </Link>
        </div>
      </ProjectStyle>
    </Carousel>
  );
}

export default ProjectSlider;
