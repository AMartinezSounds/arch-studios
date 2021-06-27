import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

const BottomComponentPhoneStyle = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  width: 74.74%;
  height: 1000px;
  max-width: 574px;
  margin-inline: auto;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    height: 200px;
    width: 55%;
    font-size: 2.4rem;
  }
  @media (min-width: 1300px) {
    display: none;
  }
`;

const ProfessionalsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 820px;
`;

const SingleProfessionalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 281px;
  height: 374px;
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
