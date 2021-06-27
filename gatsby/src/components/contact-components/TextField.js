import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, useField } from 'formik';

const TextFieldStyle = styled.div`
  position: relative;
  margin-block: 0.5rem;
`;

const ErrorMessageStyle = styled(ErrorMessage)`
  position: absolute;
  top: 18px;
  right: 0;
`;

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextFieldStyle>
      <input
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
    </TextFieldStyle>
  );
}

export default TextField;
