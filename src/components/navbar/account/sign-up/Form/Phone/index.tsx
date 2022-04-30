import { TextField } from "@mui/material";

export function SignupPhone() {
    return (
        <TextField
            required
            fullWidth
            id="phone"
            label="Celular"
            name="phone"
            type="number"
            autoComplete="phone"
        />
    )
}