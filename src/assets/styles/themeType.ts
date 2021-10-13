import { Interpolation, SimpleInterpolation, ThemeProps } from 'styled-components';

export type Theme = {
  mixins: {
    typography: {
      buttonText: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      body1: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      body2: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      heading4: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      heading5: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      overline: ReadonlyArray<Interpolation<ThemeProps<any>>>;
      heading6: ReadonlyArray<Interpolation<ThemeProps<any>>>;
    };
    positions: { center: ReadonlyArray<SimpleInterpolation> };
  };
  fontFamily: { primary: string };
  letterSpacing: {
    xxs: string;
    xl: string;
    md: string;
    sm: string;
    xs: string;
    lg: string;
    xxl: string;
  };
  fontSize: { xl: string; md: string; sm: string; xs: string; lg: string; xxl: string };
  lineHeight: { xl: string; md: string; sm: string; lg: string };
  breakpoints: { xl: string; md: string; sm: string; lg: string; xxl: string };
  fontStyle: { normal: string };
  colors: {
    secondary: string;
    darkHard: string;
    outline: string;
    surface: string;
    darkSoft: string;
    darkMedium: string;
    lightHard: string;
    primary: string;
    lightMedium: string;
  };
  fontWeight: { medium: string; bold: string; regular: string };
  textTransform: { upperCase: string };
};
