import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

const BottomComponentDesktopStyle = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
  height: 860px;
  width: 77.08%;
  margin-inline: auto;
  margin-bottom: 90px;
  display: flex;
  justify-content: space-between;
  .title {
    justify-self: flex-start;
    font-size: 2.6rem;
    height: 30%;
    width: 30%;
    h2 {
      margin-top: 0;
    }
  }
`;
const ProfessionalsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 730px;
  height: 100%;
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
        <h3>{professional.name}</h3>
        <p>{professional.position}</p>
        {/* <div className="socials-container">
          <IoLogoLinkedin style={{ fontSize: '2.3rem', marginLeft: '-4px' }} />
          <IoLogoTwitter style={{ fontSize: '2.3rem' }} />
        </div> */}
      </div>
    </SingleProfessionalStyle>
  );
}

function BottomComponentDesktop({ professionals }) {
  return (
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
  );
}

export default BottomComponentDesktop;
