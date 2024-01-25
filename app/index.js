import { Redirect } from "expo-router"
import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { useStore } from "../store"

const Home = () => {
  return (
    <ThemeProvider theme={{}}>
      <Redirect href="/dashboard" />
    </ThemeProvider>
  )
}

export default Home
