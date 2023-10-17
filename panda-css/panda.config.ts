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
      shadows: {
        light: {
          1: {
            value:
              "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
          },
        },
      },
      radii: getRadius(),
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.primary.40}" },
        onPrimary: { value: "{colors.primary.100}" },
        outline: { value: "{colors.neutral.50}" },
        stateLayer: {
          primary: {
            "008": { value: "rgba(0, 106, 103, 0.08)" },
            "012": { value: "rgba(0, 106, 103, 0.12)" },
          },
          onPrimary: {
            "008": { value: "rgba(255, 255, 255, 0.08)" },
            "012": { value: "rgba(255, 255, 255, 0.12)" },
          },
          onSurface: {
            "008": { value: "rgba(29, 27, 32, 0.08)" },
            "012": { value: "rgba(29, 27, 32, 0.12)" },
            "038": { value: "rgba(29, 27, 32, 0.38)" },
          },
        },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
