import { Button } from "@mui/material";

export function SignUpSubmitButton() {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Cadastrar
        </Button>
    )
}