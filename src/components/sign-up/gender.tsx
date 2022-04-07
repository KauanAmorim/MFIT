import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

export default function Gender() {
  const [gender, setGender] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
        <InputLabel id="genero">Gênero *</InputLabel>
        <Select
            value={gender}
            onChange={handleChange}
            required
            id="genero"
            label="Gênero"
            name="genero"
            autoComplete="gênero"
        >
            <MenuItem value={"M"}>Masculino</MenuItem>
            <MenuItem value={"F"}>Feminino</MenuItem>
            <MenuItem value={"N"}>Prefiro não declarar</MenuItem>
        </Select>
    </FormControl>
  );
}
