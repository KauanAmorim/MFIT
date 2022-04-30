import { TextField } from "@mui/material";

export function SignUpAddressPublicPlace() {
    return (
        <TextField
            required
            fullWidth
            id="logradouro"
            label="Logradouro"
            name="logradouro"
            autoComplete="logradouro"
        />
    )
}