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
    border: "1px solid",
    borderColor: "outline",
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
        borderColor: "stateLayer.onSurface.012",
        color: "stateLayer.onSurface.038",
        pointerEvents: "none",
      },
      false: {},
    },
  },
});
