import { TextField } from "@mui/material";

export function SignUpAddressComplement() {
    return (
        <TextField
            fullWidth
            id="complemento"
            label="Complemento"
            name="complemento"
            autoComplete="complemento"
        />
    )
}