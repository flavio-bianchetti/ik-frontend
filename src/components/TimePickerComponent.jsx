import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimePickerComponent = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  dataTestId,

}) => (
  <LocalizationProvider dateAdapter={ AdapterDateFns }>
    <TimePicker
      label={ label }
      value={ value }
      onChange={ onChange }
      renderInput={
        (params) => (<TextField
          { ...params }
          placeholder={ placeholder }
          error={ error }
          helperText={ error ? helperText : '' }
          variant="standard"
          data-testid={ dataTestId }
        />)
      }
    />
  </LocalizationProvider>
);

TimePickerComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.element.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default TimePickerComponent;
