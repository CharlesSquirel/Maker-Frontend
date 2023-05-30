import React from "react";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyles/theme";
import Benefits from "./components/Benefits/Benefits";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Benefits />
        <Pricing />
      </main>
    </ThemeProvider>
  );
}

export default App;
