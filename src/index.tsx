import { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

const theme = extendTheme({
  colors: {
    red: {
      primary: "#f65e4e",
      primaryDark: "#ee5140",
      primaryHover: "#fc7365",
      errorBg: "rgba(255,62,62, 0.1)",
    },
    gray: {
      100: "rgba(196,196,196, 1)",
      200: "#eeeeee",
      300: "#d0d0d0",
      400: "#585858",
      500: "#feeeed",
      600: "#f3f3f3",
      700: "#b2b2b2",
    },
    white: {
      basic: "#ffffff",
    },
  },
  components: {
    Button: {
      baseStyle: {
        size: "lg",
        color: "white.basic",
        bgColor: "red.primary",
        _focus: { boxShadow: "none" },
        _hover: { bgColor: "red.primaryHover" },
        _active: { bgColor: "red.primaryDark" },
      },
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
