import React from "react";
import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/index";
function App() {
  return (
    <>
      <ThemeProvider theme={theme()}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
