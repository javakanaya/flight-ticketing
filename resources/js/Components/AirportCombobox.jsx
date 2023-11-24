import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AirportCombobox({option, label}) {
  return (
    <Autocomplete
      autoHighlight
      id="combo-box"
      options={option}
      sx={{width:250}}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
