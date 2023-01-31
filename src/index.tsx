import { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

const theme = extendTheme({
  colors: {
    red: {
      100: "#f65e4e",
      200: "#ee5140",
      300: "#fc7365",
      400: "rgba(255,62,62, 0.1)",
    },
    gray: {
      100: "rgba(196,196,196, 1)",
      200: "#eeeeee",
      300: "#d0d0d0",
      400: "#585858",
    },
  },
});

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
