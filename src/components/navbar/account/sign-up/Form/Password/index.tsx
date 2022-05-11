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



/*
function validar(){
  var senha = formData.senha.value;
  var rep_senha = formData.rep_senha.value;

  if(senha == "" || senha.length <= 5){
    alert('preencha o campo senha com no mínimo 6 caracteres');
    formData.senha.focus();
    return false;
  }

  if(rep_senha == "" || rep_senha.length <= 5){
    alert('preencha o campo senha com no mínimo 6 caracteres');
    formData.rep_senha.focus();
    return false;
  }
  
  if (senha != rep_senha) {
    alert('As senhas devem ser iguais!');
    form1.senha.focus();
    return false;
  }

} */