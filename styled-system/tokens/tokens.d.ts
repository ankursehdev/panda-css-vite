/* eslint-disable */
export type Token = "spacing.primary.sm" | "colors.primary" | "colors.secondary" | "colors.badge.iconSizeSmall" | "colors.badge.paddingVertical" | "fonts.body" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.badge" | "colors.danger" | "colors.success" | "spacing.primary.-sm" | "spacing.-badge" | "colors.colorPalette.iconSizeSmall" | "colors.colorPalette.paddingVertical"

export type ColorPalette = "badge"

export type SpacingToken = "primary.sm" | "badge" | "-primary.sm" | "-badge"

export type ColorToken = "primary" | "secondary" | "badge.iconSizeSmall" | "badge.paddingVertical" | "danger" | "success" | "colorPalette.iconSizeSmall" | "colorPalette.paddingVertical"

export type FontToken = "body"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type Tokens = {
		spacing: SpacingToken
		colors: ColorToken
		fonts: FontToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"