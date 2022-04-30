import { TextField } from "@mui/material";

export function SignUpAddressDistrict() {
    return (
        <TextField
            required
            fullWidth
            id="bairro"
            label="Bairro"
            name="bairro"
            type="text"
            autoComplete="bairro"
        />
    )
}