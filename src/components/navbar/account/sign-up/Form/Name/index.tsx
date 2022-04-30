import { TextField } from "@mui/material";

export function SignUpName(){
    return (
        <TextField
            autoComplete="given-name"
            name="completeName"
            required
            fullWidth
            id="completeName"
            label="Nome Completo"
            autoFocus
        />
    );
}