import { cva } from "../../../../styled-system/css";
import { stateLayerBase } from "../constants.local";

export const button = cva({
  base: {
    position: "relative",
    display: "flex",
    paddingX: "24px",
    paddingY: "10px",
    borderRadius: "full",
    cursor: "pointer",
    color: "primary",
    _hover: {
      _before: {
        ...stateLayerBase,
        bg: "stateLayer.primary.008",
      },
    },
    _active: {
      _before: {
        ...stateLayerBase,
        bg: "stateLayer.primary.012",
      },
    },
  },
  variants: {
    disabled: {
      true: {
        color: "stateLayer.onSurface.038",
        pointerEvents: "none",
      },
      false: {},
    },
  },
});
