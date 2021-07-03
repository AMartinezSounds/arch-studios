import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Fade from 'react-reveal/Fade';

import TextField from './TextField';
import TextArea from './TextArea';

const BottomComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  width: 82.94%;
  min-width: 311px;
  max-width: 572px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  .title {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 3rem;
    width: 92%;
  }
  @media (min-width: 500px) {
    margin-bottom: 10rem;
    height: 500px;
    .title {
      width: 100%;
    }
  }
  @media (min-width: 1300px) {
    flex-direction: row;
    justify-content: space-between;
    min-width: 1110px;
    width: 77.08%;
    height: 400px;
    margin-bottom: 10rem;
    .title {
      font-size: 3.3rem;
      width: 25%;
      text-align: left;
    }
  }
`;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 450px;

  input,
  textarea {
    width: 90%;
  }
  textarea {
    height: 145px;
    resize: none;
  }
  button {
    margin-top: -0.2rem;
    width: 80px;
    height: 80px;
    margin-right: 0;
    margin-left: auto;
    color: white;
    background-color: black;
    border: none;
  }
  @media (min-width: 500px) {
    input,
    textarea {
      width: 92%;
    }
  }
  @media (min-width: 768px) {
    input,
    textarea {
      width: 94%;
    }
  }
  @media (min-width: 1300px) {
    width: 75%;
    height: 100%;
    input,
    textarea {
      width: 96%;
    }
  }
`;

function BottomComponent2() {
  const validate = Yup.object({
    name: Yup.string()
      .min(2, 'Enter a valid name')
      .max(15, 'Must be 15 characters or less')
      .required("Can't be empty"),
    email: Yup.string().email('Enter a valid email').required("Can't be empty"),
    message: Yup.string()
      .max(500, 'Must be 500 characters or less')
      .required("Can't be empty"),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Fade fraction="0.3">
          <BottomComponentStyle>
          <h2 className="title">Connect with us</h2>
          <FormStyle>
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextArea label="Message" name="message" />
            <button type="submit">Send</button>
          </FormStyle>
        </BottomComponentStyle>
        </Fade>
      )}
    </Formik>
  );
}

export default BottomComponent2;
