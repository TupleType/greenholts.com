import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import SeoHeader from "./components/seoHeader/SeoHeader";
import Error404 from "./error404/Error";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <SeoHeader />
          <Error404 theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
