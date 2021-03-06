import { BreakpointAlias, ThemeScale } from '../types';

const breakpoints = ['375px', '768px', '1024px', '1280px'] as ThemeScale<
  string,
  BreakpointAlias
>;

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default breakpoints;
