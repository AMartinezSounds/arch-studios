import React from 'react';
import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi';

const BottomComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-inline: auto;
  width: 311px;
  height: 493px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 96px;
  }
  h2 {
    font-size: 2.55rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 349px;
  input,
  textarea {
    border: none;
    outline: none;
    resize: none;
    padding: 1rem 2rem;
    border-bottom: 1px solid black;
    font-size: 1.1rem;
  }
  button {
    width: 80px;
    height: 80px;
    align-self: flex-end;
    border: none;
    color: white;
    background-color: black;
  }
`;

function BottomComponent() {
  return (
    <BottomComponentStyle>
      <div className="title">
        <h2>Connect</h2>
        <h2>with us</h2>
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
