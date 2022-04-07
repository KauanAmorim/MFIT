import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";

axios.defaults.baseURL = "viacep.com.br/ws/"

// const getCEP = async (cep: number) => {
//     return axios.get(`/${cep}/json`).then(({data}) => {
//         return data
//     })
// }

// async function isValidCEP(cep: number): Promise<void> {
//     const cepData = await getCEP(cep);
//     console.log(cepData)
// }
// const cep = "05754070"

// await isValidCEP(parseInt(cep))


export default function CEP(){
    // const [text, setText] = React.useState("");

    return (
        <TextField
        required
        fullWidth
        type="number"
        id="cep"
        label="CEP"
        name="cep"
        autoComplete="cep"
        // onChange={(e) => setText(e.target.value)}
      />
    )
}