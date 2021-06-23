import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const TopComponentPhoneStyle = styled.div`
  height: 560px;
  width: 100%;
  max-width: 375px;
  background-image: ${(props) => `url("${props.bgPhone}")`};
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
    font-size: 3rem;
    color: white;
    position: absolute;
    left: 30px;
    top: 50px;
  }
  .descriptionProject {
    line-height: 1.4rem;
    color: white;
    position: absolute;
    left: 30px;
    top: 220px;
    width: 311px;
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
    top: 400px;
    left: 30px;
    transition: all 350ms linear;
    &:hover {
      background-color: #60636d;
    }
  }
`;

function TopComponentPhone({ paramourProject }) {
  const bgPhone = paramourProject.imagePhone.asset.fluid.src;
  console.log(paramourProject);
  return (
    <TopComponentPhoneStyle bgPhone={bgPhone}>
      <h2 className="titleProject">{paramourProject.name}</h2>
      <p className="descriptionProject">{paramourProject.description}</p>
      <Link className="link" to="/about">
        See Our Portfolio
        <HiArrowRight style={{ fontSize: '1.5rem', marginLeft: '.5rem' }} />
      </Link>
    </TopComponentPhoneStyle>
  );
}

export default TopComponentPhone;
