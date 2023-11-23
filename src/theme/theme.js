const breakpoints = {
  xs: "360",
  s: "480px",
  sm: "600px",
  md: "767px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  s: `@media (min-width: ${breakpoints.s})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};

export const isIE = (styles) =>
  `@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {${styles}}`;
