import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const TextFieldComponent = ({
  error,
  dataTestId,
  label,
  onChange,
  placeholder,
  value,
}) => (
  <TextField
    error={ error }
    data-testid={ dataTestId }
    fullWidth
    label={ label }
    onChange={ onChange }
    placeholder={ placeholder }
    variant="standard"
    value={ value }
  />
);

TextFieldComponent.propTypes = {
  error: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextFieldComponent;
