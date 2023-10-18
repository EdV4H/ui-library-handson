import { sva } from "../../../styled-system/css";

export const checkbox = sva({
  slots: ["root", "control", "icon"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      cursor: "pointer",
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "full",
      _before: {
        position: "absolute",
        inset: "0",
        content: '""',
        margin: "auto",
        width: "18px",
        height: "18px",
        borderRadius: "2px",
      },
    },
    icon: {
      position: "relative",
      fill: "onPrimary",
    },
  },
  variants: {
    checked: {
      true: {
        control: {
          _hover: {
            bg: "stateLayer.primary.008",
          },
          _active: {
            bg: "stateLayer.primary.012",
          },
          _before: {
            bg: "primary",
          },
        },
      },
      false: {
        control: {
          _hover: {
            bg: "stateLayer.onSurface.008",
          },
          _active: {
            bg: "stateLayer.onSurface.012",
          },
          _before: {
            border: "2px solid",
            borderColor: "surfaceVariant",
          },
        },
      },
      indeterminate: {},
    },
    disabled: {
      true: {
        root: {
          pointerEvents: "none",
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      checked: true,
      disabled: true,
      css: {
        control: {
          _before: {
            bg: "stateLayer.onSurface.038",
          },
        },
      },
    },
    {
      checked: false,
      disabled: true,
      css: {
        control: {
          _before: {
            borderColor: "stateLayer.onSurface.038",
          },
        },
      },
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});
