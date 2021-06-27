import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, useField } from 'formik';

const TextAreaStyle = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

const ErrorMessageStyle = styled(ErrorMessage)`
  position: absolute;
  top: 144px;
  right: 0;
`;

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextAreaStyle>
      <textarea
        className={`formStyleInput ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="off"
        placeholder={field.name.replace(
          field.name[0],
          field.name[0].toLocaleUpperCase()
        )}
      />
      <ErrorMessageStyle component="div" name={field.name} className="error" />
    </TextAreaStyle>
  );
}

export default TextArea;
