import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

import Fade from 'react-reveal/Fade';

const BottomComponentDesktopStyle = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  height: 860px;
  width: 77.08%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    justify-self: flex-start;
    font-size: 2.6rem;
    height: 30%;
    width: 30%;
    h2 {
      margin-top: 0;
    }
  }
  .social {
    cursor: pointer;
  }
  @media (min-width: 2000px) {
    display: flex;
    flex-direction: column;
  }
`;
const ProfessionalsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 730px;
  height: 100%;
  @media (min-width: 2000px) {
    flex-wrap: nowrap;
    min-width: 1100px;
    width: 100%;
  }
`;

const SingleProfessionalStyle = styled.div`
  width: 350px;
  height: 398px;
`;

function SingleProfessional({ professional }) {
  const picture = professional.image.asset.fluid;
  return (
    <SingleProfessionalStyle>
      <Img fluid={picture} />
      <div className="info">
        <div className="text">
          <h3>{professional.name}</h3>
          <p>{professional.position}</p>
        </div>
        <div className="socials-container">
          <IoLogoLinkedin
            className="social"
            style={{ fontSize: '2.3rem', marginLeft: '-4px' }}
          />
          <IoLogoTwitter className="social" style={{ fontSize: '2.3rem' }} />
        </div>
      </div>
    </SingleProfessionalStyle>
  );
}

function BottomComponentDesktop({ professionals }) {
  return (
    <Fade fraction="0.1">
    <BottomComponentDesktopStyle>
      <div className="title">
        <h2>The Leaders</h2>
      </div>
      <ProfessionalsStyle>
        {professionals.map((professional) => (
          <SingleProfessional
            key={professional.order}
            professional={professional}
          />
        ))}
      </ProfessionalsStyle>
    </BottomComponentDesktopStyle>
    </Fade>
  );
}

export default BottomComponentDesktop;
