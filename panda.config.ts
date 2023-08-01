import { defineConfig } from "@pandacss/dev";

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
      spacing: {
        primary: {
          sm: { value: "10px" },
        },
      },
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
        badge: {
          iconSizeSmall: {
            value: "10px",
          },
          paddingVertical: {
            value: "20px",
          },
        },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
    semanticTokens: {
      spacing: {
        badge: { value: `{spacing.primary.sm}` },
      },
      colors: {
        danger: { value: "{colors.red}" },
        success: { value: "{colors.green}" },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
