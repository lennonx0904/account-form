import { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { basicTheme } from "theme";
import App from "./App";

const theme = extendTheme(basicTheme);

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
