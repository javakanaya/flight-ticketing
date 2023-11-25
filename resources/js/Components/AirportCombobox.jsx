import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AirportCombobox({option, label, id, name}) {
  return (
    <Autocomplete
      autoHighlight
      id={id}
      options={option}
      sx={{width:250}}
      getOptionLabel={(option) => option.label}

      renderOption={(props, option) => (
        <div {...props} style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start'}}>
            <h1 className='w-full'>{option.label}</h1>
            <p className='text-xs '>{option.name}</p>
        </div>
      )}
      name={name}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}
