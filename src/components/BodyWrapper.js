"use client";

import { ThemeProvider } from "styled-components";
import { chosenTheme } from "@/app/theme";
import { GlobalStyles } from "@/app/global";

export default function BodyWrapper({ children }) {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
}
