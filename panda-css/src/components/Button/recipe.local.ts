import { cva } from "../../../styled-system/css";

export const button = cva({
  base: {
    position: "relative",
    display: "flex",
    gap: "4px",
    paddingX: "24px",
    paddingY: "10px",
    borderRadius: "full",
    cursor: "pointer",
    _hover: {
      _before: {
        position: "absolute",
        inset: 0,
        content: '""',
        borderRadius: "inherit",
      },
    },
    _active: {
      _before: {
        position: "absolute",
        inset: 0,
        content: '""',
        borderRadius: "inherit",
      },
    },
  },
  variants: {
    variant: {
      filled: {
        bg: "primary",
        color: "onPrimary",
        shadow: {
          base: "none",
          _hover: "light.1",
          _active: "none",
        },
        _hover: {
          _before: { bg: "stateLayer.onPrimary.008" },
        },
        _active: {
          _before: { bg: "stateLayer.onPrimary.012" },
        },
      },
      outlined: {
        outline: "1px solid",
        outlineColor: "outline",
        color: "primary",
        _hover: {
          _before: { bg: "stateLayer.primary.008" },
        },
        _active: {
          _before: { bg: "stateLayer.primary.012" },
        },
      },
      text: {
        color: "primary",
        _hover: {
          _before: { bg: "stateLayer.primary.008" },
        },
        _active: {
          _before: { bg: "stateLayer.primary.012" },
        },
      },
    },
    hasIcon: {
      true: { paddingLeft: "16px" },
      false: {},
    },
    disabled: {
      true: { pointerEvents: "none" },
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      disabled: true,
      css: {
        bg: "stateLayer.onSurface.012",
        color: "stateLayer.onSurface.038",
      },
    },
    {
      variant: "outlined",
      disabled: true,
      css: {
        borderColor: "stateLayer.onSurface.012",
        color: "stateLayer.onSurface.038",
      },
    },
    {
      variant: "text",
      disabled: true,
      css: {
        color: "stateLayer.onSurface.038",
      },
    },
  ],
  defaultVariants: {
    variant: "filled",
    hasIcon: false,
    disabled: false,
  },
});
