import { Container, CssBaseline } from "@mui/material"
import React from "react"
import Kit from "./components/kit"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
        <Kit />
      </Container>
    </React.Fragment>
  )
}

export default App
