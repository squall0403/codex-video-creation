export const OPSWAT_COLORS = {
  midnight: "#050F22",
  navy: "#0D2654",
  neutral1200: "#0C121D",
  neutral1000: "#172234",
  neutral900: "#24324B",
  neutral800: "#344565",
  blue: "#1D6BFC",
  blueLight: "#77A6FD",
  bluePale: "#E8F0FF",
  teal: "#02E9F5",
  tealDark: "#018288",
  tealPale: "#E8FEFF",
  danger: "#FF003D",
  warning: "#FF6B00",
  success: "#00FFB2",
  caution: "#FFD600",
  white: "#FFFFFF",
  neutral500: "#A9B2C4",
  neutral300: "#DEE0E4",
  neutral100: "#F8F9F9",
  black: "#000000",
};

// Project-specific typography values. Font files are official supplied assets,
// while sizes and stacks below are implementation choices for this video.
export const TYPOGRAPHY = {
  primary: '"Simplon Norm", "Roboto", Arial, sans-serif',
  mono: '"Simplon Mono", "Roboto Mono", monospace',
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    impact: 96,
    headline: 58,
    body: 34,
    label: 26,
    detail: 24,
  },
};

// Project-specific layout tokens.
export const SAFE_AREA = 120;

export const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
  xl: 64,
  xxl: 96,
};

export const RADII = {
  small: 12,
  medium: 20,
  large: 32,
  pill: 999,
};

export const SURFACES = {
  canvas: OPSWAT_COLORS.midnight,
  panel: OPSWAT_COLORS.neutral1000,
  panelRaised: OPSWAT_COLORS.neutral900,
  panelBorder: OPSWAT_COLORS.neutral800,
  text: OPSWAT_COLORS.white,
  textMuted: OPSWAT_COLORS.neutral300,
};

// Project-specific animation durations in frames at 30 fps.
export const MOTION = {
  quick: 8,
  standard: 15,
  deliberate: 24,
};
