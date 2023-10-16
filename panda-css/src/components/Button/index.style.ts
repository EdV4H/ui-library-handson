import { cva } from "../../../styled-system/css";

export const stateLayer = cva({
  base: {
    width: "fit-content",
    borderRadius: "full",
  },
  variants: {
    variant: {
      filled: {
        bg: "primary",
      },
    },
  },
});

export const button = cva({
  base: {
    position: "relative",
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
        },
        color: "onPrimary",
      },
    },
  },
});
