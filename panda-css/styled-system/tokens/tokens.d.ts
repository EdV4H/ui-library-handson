/* eslint-disable */
export type Token = "colors.primary.0" | "colors.primary.10" | "colors.primary.20" | "colors.primary.30" | "colors.primary.40" | "colors.primary.50" | "colors.primary.60" | "colors.primary.70" | "colors.primary.80" | "colors.primary.90" | "colors.primary.95" | "colors.primary.99" | "colors.primary.100" | "colors.error.0" | "colors.error.10" | "colors.error.20" | "colors.error.30" | "colors.error.40" | "colors.error.50" | "colors.error.60" | "colors.error.70" | "colors.error.80" | "colors.error.90" | "colors.error.95" | "colors.error.99" | "colors.error.100" | "colors.neutral.0" | "colors.neutral.10" | "colors.neutral.20" | "colors.neutral.30" | "colors.neutral.40" | "colors.neutral.50" | "colors.neutral.60" | "colors.neutral.70" | "colors.neutral.80" | "colors.neutral.87" | "colors.neutral.90" | "colors.neutral.92" | "colors.neutral.94" | "colors.neutral.95" | "colors.neutral.96" | "colors.neutral.98" | "colors.neutral.99" | "colors.neutral.100" | "colors.iconSpecified.success" | "colors.iconSpecified.error" | "colors.iconSpecified.stared" | "radii.non" | "radii.xs" | "radii.sm" | "radii.md" | "radii.lg" | "radii.xl" | "radii.full" | "radii.2xl" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.primary" | "colors.onPrimary" | "colors.stateLayer.onPrimary.008" | "colors.stateLayer.onPrimary.012" | "colors.colorPalette.0" | "colors.colorPalette.10" | "colors.colorPalette.20" | "colors.colorPalette.30" | "colors.colorPalette.40" | "colors.colorPalette.50" | "colors.colorPalette.60" | "colors.colorPalette.70" | "colors.colorPalette.80" | "colors.colorPalette.90" | "colors.colorPalette.95" | "colors.colorPalette.99" | "colors.colorPalette.100" | "colors.colorPalette.87" | "colors.colorPalette.92" | "colors.colorPalette.94" | "colors.colorPalette.96" | "colors.colorPalette.98" | "colors.colorPalette.success" | "colors.colorPalette.error" | "colors.colorPalette.stared" | "colors.colorPalette.onPrimary.008" | "colors.colorPalette.008" | "colors.colorPalette.onPrimary.012" | "colors.colorPalette.012"

export type ColorPalette = "primary" | "error" | "neutral" | "iconSpecified" | "stateLayer" | "stateLayer.onPrimary"

export type ColorToken = "primary.0" | "primary.10" | "primary.20" | "primary.30" | "primary.40" | "primary.50" | "primary.60" | "primary.70" | "primary.80" | "primary.90" | "primary.95" | "primary.99" | "primary.100" | "error.0" | "error.10" | "error.20" | "error.30" | "error.40" | "error.50" | "error.60" | "error.70" | "error.80" | "error.90" | "error.95" | "error.99" | "error.100" | "neutral.0" | "neutral.10" | "neutral.20" | "neutral.30" | "neutral.40" | "neutral.50" | "neutral.60" | "neutral.70" | "neutral.80" | "neutral.87" | "neutral.90" | "neutral.92" | "neutral.94" | "neutral.95" | "neutral.96" | "neutral.98" | "neutral.99" | "neutral.100" | "iconSpecified.success" | "iconSpecified.error" | "iconSpecified.stared" | "primary" | "onPrimary" | "stateLayer.onPrimary.008" | "stateLayer.onPrimary.012" | "colorPalette.0" | "colorPalette.10" | "colorPalette.20" | "colorPalette.30" | "colorPalette.40" | "colorPalette.50" | "colorPalette.60" | "colorPalette.70" | "colorPalette.80" | "colorPalette.90" | "colorPalette.95" | "colorPalette.99" | "colorPalette.100" | "colorPalette.87" | "colorPalette.92" | "colorPalette.94" | "colorPalette.96" | "colorPalette.98" | "colorPalette.success" | "colorPalette.error" | "colorPalette.stared" | "colorPalette.onPrimary.008" | "colorPalette.008" | "colorPalette.onPrimary.012" | "colorPalette.012"

export type RadiusToken = "non" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | "2xl"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		radii: RadiusToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"