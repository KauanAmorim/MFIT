import { TextField } from "@mui/material";
import React from "react";
import './index.css'

function isValidCPF(cpf: string) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

export function SignUpCPF() {
    const [text, setText] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
  
    React.useEffect(() => {
      if (text.length >= 11 && !isValidCPF(text)) {
        setErrorMessage(
          "CPF Inválido"
        );
      }
    }, [text]);
  
    React.useEffect(() => {
      if (text.length < 11 || isValidCPF(text)) {
        setErrorMessage("");
      }
    }, [text, errorMessage]);
  
    return (
        <TextField
        error={text.length >= 11 && !isValidCPF(text)}
        required
        fullWidth
        type="number"
        id="cpf"
        label="CPF"
        name="cpf"
        autoComplete="cpf"
        helperText={errorMessage}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    )
}