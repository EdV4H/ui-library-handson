import { cva } from "../../../styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    paddingX: "24px",
    paddingY: "10px",
    borderRadius: "full",
    cursor: "pointer",
  },
  variants: {
    variant: {
      filled: {
        bg: {
          base: "primary",
          _hover: "stateLayers.onPrimary.008",
        },
        color: "onPrimary",
      },
    },
  },
});
