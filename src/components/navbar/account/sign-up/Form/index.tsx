import { Box, Grid } from "@mui/material";
import axios from "axios";
import { SignUpCEP } from "./Address/CEP";
import { SignUpAddressComplement } from "./Address/Complement";
import { SignUpAddressDistrict } from "./Address/District";
import { SignUpAddressNumber } from "./Address/Number";
import { SignUpAddressPublicPlace } from "./Address/PublicPlace";
import { SignUpBirthdate } from "./Birthdate";
import { SignUpConfirmPassword } from "./ConfirmPassword/Index";
import { SignUpCPF } from "./CPF";
import { SignupEmail } from "./Email";
import { SignUpGender } from "./Gender";
import { SignUpName } from "./Name";
import { SignUpPassword } from "./Password";
import { SignupPhone } from "./Phone";
import { SignUpSubmitButton } from "./SubmitButton";

const api = axios.create({
    baseURL: 'https://mais-fit-project-v2.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export function SignUpForm() {

    const SignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const data = new FormData(event.currentTarget);
        const formData = {
          nome_completo: data.get("completeName"),
          email: data.get("email"),
          numero: data.get("numero"),
          logradouro: data.get("logradouro"),
          bairro: data.get("bairro"),
          complemento: data.get("complemento"),
          cep: data.get("cep"),
          cpf: data.get("cpf"),
          genero: data.get("genero"),
          nascimento: data.get("birthdate"),
          celular: data.get("phone"),
          senha: data.get("password")
        }
    
    
        api.post('/clientes', formData).then(({data}) => {
          return data
        })
    };

    return (
        <Box component="form" onSubmit={SignUpSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SignUpName />
                </Grid>
                <Grid item xs={12}>
                    <SignUpGender />
                </Grid>
                <Grid item xs={12}>
                    <SignupEmail />
                </Grid>
                <Grid item xs={12}>
                    <SignUpBirthdate />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignupPhone />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpCPF />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpCEP />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpAddressNumber />
                </Grid>
                <Grid item xs={12}>
                    <SignUpAddressPublicPlace />
                </Grid>
                <Grid item xs={12}>
                    <SignUpAddressDistrict />
                </Grid>
                <Grid item xs={12}>
                    <SignUpAddressComplement />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpPassword />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SignUpConfirmPassword />
                </Grid>
            </Grid>
            <SignUpSubmitButton />
      </Box>
    )
}