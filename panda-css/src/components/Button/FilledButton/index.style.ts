import { cva } from "../../../../styled-system/css";
import { stateLayerBase } from "../constants.local";

export const button = cva({
  base: {
    position: "relative",
    display: "flex",
    gap: "4px",
    paddingX: "24px",
    paddingY: "10px",
    borderRadius: "full",
    cursor: "pointer",
    bg: {
      base: "primary",
    },
    color: "onPrimary",
    shadow: {
      base: "none",
      _hover: "light.1",
      _active: "none",
    },
    _hover: {
      _before: {
        ...stateLayerBase,
        bg: "stateLayer.onPrimary.008",
      },
    },
    _active: {
      _before: {
        ...stateLayerBase,
        bg: "stateLayer.onPrimary.012",
      },
    },
  },
  variants: {
    hasIcon: {
      true: {
        paddingLeft: "16px",
      },
      false: {},
    },
    disabled: {
      true: {
        bg: "stateLayer.onSurface.012",
        color: "stateLayer.onSurface.038",
        pointerEvents: "none",
      },
      false: {},
    },
  },
});
