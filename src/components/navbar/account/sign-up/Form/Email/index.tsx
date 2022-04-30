import { TextField } from "@mui/material";

export function SignupEmail(){
    return (
        <TextField
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            type="email"
            autoComplete="email"
        />
    )
}