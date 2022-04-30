import { TextField } from "@mui/material";

export function SignUpAddressNumber() {
    return (
        <TextField
            required
            fullWidth
            type="number"
            id="numero"
            label="Número"
            name="numero"
            autoComplete="numero"
        />
    )    
}