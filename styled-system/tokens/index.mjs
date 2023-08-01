const tokens = {
  "spacing.primary.sm": {
    "value": "10px",
    "variable": "var(--spacing-primary-sm)"
  },
  "colors.primary": {
    "value": "#0FEE0F",
    "variable": "var(--colors-primary)"
  },
  "colors.secondary": {
    "value": "#EE0F0F",
    "variable": "var(--colors-secondary)"
  },
  "colors.badge.iconSizeSmall": {
    "value": "10px",
    "variable": "var(--colors-badge-icon-size-small)"
  },
  "colors.badge.paddingVertical": {
    "value": "20px",
    "variable": "var(--colors-badge-padding-vertical)"
  },
  "fonts.body": {
    "value": "system-ui, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.badge": {
    "value": "var(--spacing-badge)",
    "variable": "var(--spacing-badge)"
  },
  "colors.danger": {
    "value": "var(--colors-danger)",
    "variable": "var(--colors-danger)"
  },
  "colors.success": {
    "value": "var(--colors-success)",
    "variable": "var(--colors-success)"
  },
  "spacing.primary.-sm": {
    "value": "calc(var(--spacing-primary-sm) * -1)",
    "variable": "var(--spacing-primary-sm)"
  },
  "spacing.-badge": {
    "value": "var(--spacing-badge)",
    "variable": "var(--spacing-badge)"
  },
  "colors.colorPalette.iconSizeSmall": {
    "value": "var(--colors-color-palette-icon-size-small)",
    "variable": "var(--colors-color-palette-icon-size-small)"
  },
  "colors.colorPalette.paddingVertical": {
    "value": "var(--colors-color-palette-padding-vertical)",
    "variable": "var(--colors-color-palette-padding-vertical)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar