import * as React from "react";
import ptbrLocale from "date-fns/locale/pt-BR";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export function SignUpBirthdate() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptbrLocale}>
        <DatePicker
          mask="__/__/____"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField fullWidth required name="birthdate" {...params} />}
        />
    </LocalizationProvider>
  );
}
