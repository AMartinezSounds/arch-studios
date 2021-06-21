import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

const BottomComponentPhoneStyle = styled.div`
  display: none;
  height: 1896px;
  max-width: 311px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    width: 50%;
    max-width: 311px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 96px;
    h2 {
      font-size: 2.55rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  @media (min-width: 767px) {
    display: none;
  }
`;

const ProfessionalsStyle = styled.div`
  width: 311px;
  height: 1736px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SingleProfessionalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 402px;
  .info {
    .socials-container {
      width: 90px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function SingleProfessional({ professional }) {
  const picture = professional.image.asset.fluid;
  return (
    <SingleProfessionalStyle>
      <Img fluid={picture} />
      <div className="info">
        <h3>{professional.name}</h3>
        <p>{professional.position}</p>
        <div className="socials-container">
          <IoLogoLinkedin style={{ fontSize: '2.3rem', marginLeft: '-4px' }} />
          <IoLogoTwitter style={{ fontSize: '2.3rem' }} />
        </div>
      </div>
    </SingleProfessionalStyle>
  );
}

function BottomComponentPhone({ professionals }) {
  return (
    <BottomComponentPhoneStyle>
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
    </BottomComponentPhoneStyle>
  );
}

export default BottomComponentPhone;
