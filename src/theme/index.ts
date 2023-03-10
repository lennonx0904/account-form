export const basicTheme = {
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
        size: "md",
        color: "white.basic",
        bgColor: "red.primary",
        _focus: { boxShadow: "none" },
        _hover: { bgColor: "red.primaryHover" },
        _active: { bgColor: "red.primaryDark" },
      },
    },
    Input: {
      baseStyle: {
        field: {
          _disabled: {
            bgColor: "gray.200",
            color: "gray.300",
            opacity: 1,
            cursor: "not-allowed",
          },
          _placeholder: { color: "gray.700", fontSize: "14px" },
          _hover: { borderColor: "gray.100" },
        },
      },
    },
  },
};
