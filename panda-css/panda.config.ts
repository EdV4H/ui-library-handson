import { defineConfig } from "@pandacss/dev";
import { getPalette, getRadius } from "./figma/utils";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: getPalette("wevox-teal"),
        error: getPalette("blood-red"),
        neutral: getPalette("ash-grey"),
        iconSpecified: {
          success: getPalette("forest-green")[50],
          error: getPalette("blood-red")[40],
          stared: getPalette("honey-yellow")[70],
        },
      },
      gradients: {
        stateLayer: {
          onPrimary: {
            value: {
              type: "linear",
              placement: "0deg",
              stops: ["red", "blue"],
            },
          },
        },
      },
      radii: getRadius(),
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.primary.40}" },
        onPrimary: { value: "{colors.primary.100}" },
        stateLayers: {
          onPrimary: {
            "008": { value: "{colors.primary.40}, 0.08" },
          },
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});