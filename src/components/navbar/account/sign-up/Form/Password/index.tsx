import { TextField } from "@mui/material";

export function SignUpPassword() {
    return (
        <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
        />
    )
}