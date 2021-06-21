import React from 'react';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const BottomComponentStyle = styled.div`
  height: 493px;
  width: 82.94%;
  max-width: 572px;
  margin-inline: auto;
  .title {
    font-size: 1.9rem;
    height: 96px;
    width: 92%;
  }
  @media (min-width: 768px) {
    height: 469px;
  }
  @media (min-width: 1440px) {
    height: 500px;
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      width: 350px;
      height: 100%;
      font-size: 2rem;
    }
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input,
  textarea {
    border: none;
    background: none;
    padding: 1rem;
    border-bottom: 1px solid black;
    outline: none;
  }
  textarea {
    resize: none;
  }
  button {
    width: 80px;
    height: 80px;
    margin-right: 0;
    margin-left: auto;
    color: white;
    background-color: black;
    border: none;
  }
  @media (min-width: 1440px) {
    input,
    textarea {
      width: 730px;
      margin-right: 0;
      margin-left: auto;
    }
  }
`;

function BottomComponent() {
  return (
    <BottomComponentStyle>
      <div className="title">
        <h2>Connect with us</h2>
      </div>
      <FormStyle>
        <input type="text" name="Name" id="Name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea
          name="Message"
          id="Message"
          cols="30"
          rows="10"
          placeholder="Message"
        />
        <button type="submit">
          <HiArrowRight style={{ fontSize: '1.5rem' }} />
        </button>
      </FormStyle>
    </BottomComponentStyle>
  );
}

export default BottomComponent;
