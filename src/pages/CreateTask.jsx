import React from 'react';
import { Box } from '@mui/system';
import { Button, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import TextFieldComponent from '../components/TextFieldComponent';
import DesktopDatePickerComponent from '../components/DesktopDatePickerComponent';
import TimePickerComponent from '../components/TimePickerComponent';
import Bar from '../components/Bar';

const warning = (
  <span className="warning">
    <WarningIcon fontSize="small" />
    {' '}
    Error
  </span>
);

const verdadeiro = true;

const CreateTask = () => (
  <Box sx={ { flexGrow: 1 } }>
    <Bar />
    <form
      onSubmit={ (event) => console.log(event) }
    >
      <Stack sx={ { p: 2, flexGrow: 1 } }>
        <TextFieldComponent
          dataTestId="input-name"
          error={ verdadeiro } // isNameError
          label="Nome *"
          // helperText={ verdadeiro ? warning : '' } // isNameError
          onChange={ () => verdadeiro }
          placeholder="Nome"
          value="" // fullNameUser
        />
      </Stack>
      <Stack
        direction="row"
        alignitens="center"
        justifyContent="space-around"
        spacing={ 2 }
        sx={ { mt: 4, mb: 2, flexGrow: 1 } }
      >
        <DesktopDatePickerComponent
          label="Data *"
          value={ new Date().toISOString() }
          onChange={ () => verdadeiro } // handleChangeInitialDate
          placeholder="Data"
          error={ verdadeiro } // isInitialDateError
          helperText={ warning }
          dataTestId="input-date"
        />
        <TimePickerComponent
          label="Hora *"
          value={ new Date().toISOString() }
          onChange={ () => verdadeiro } // handleChangeInitialDate
          dataTestId="input-time"
          placeholder="Hora"
          error={ verdadeiro } // isInitialDateError
          helperText={ warning }
        />
      </Stack>
      <Stack sx={ { p: 4, flexGrow: 1 } }>
        <TextFieldComponent
          dataTestId="input-description"
          error={ verdadeiro } // isNameError
          label="Descrição *"
          // helperText={ verdadeiro ? warning : '' } // isNameError
          onChange={ () => verdadeiro }
          placeholder="Descrição"
          value="" // fullNameUser
        />
      </Stack>
      <Stack sx={ { mt: 2, flexGrow: 1 } }>
        <Button
          name="btn-submit"
          data-testid="btn-submit"
          type="submit"
          variant="contained"
        >
          Salvar
        </Button>
      </Stack>
    </form>
  </Box>
);

export default CreateTask;
