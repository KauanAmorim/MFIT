import { TextField } from "@mui/material";

export function SignUpConfirmPassword() {
    return (
        <TextField
            required
            fullWidth
            name="confirm_password"
            label="Confirm Password"
            type="password"
            id="confirm_password"
            autoComplete="new-confirm_password"
        />
    )
}