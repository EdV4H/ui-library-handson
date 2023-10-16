import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    wevoxTeal: {
      40: "#006A67",
    },
    primary: "#006A67",
  },
  spacings: {},
  sizes: {},
  components: {
    Button: {
      defaultProps: {
        bg: "colors.primary",
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
