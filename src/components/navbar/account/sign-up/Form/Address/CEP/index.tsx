import { TextField } from "@mui/material";

export function SignUpCEP(){

    return (
        <TextField
        required
        fullWidth
        type="number"
        id="cep"
        label="CEP"
        name="cep"
        autoComplete="cep"
      />
    )
}