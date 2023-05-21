import React from "react";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/GlobalStyles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
