import { css } from 'styled-components';

export const theme: any = {
  breakpoints: {
    sm: '560px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  letterSpacing: {
    xxs: '0px',
    xs: '0.15px',
    sm: '0.18px',
    md: '0.25px',
    lg: '0.5px',
    xl: '1.25px',
    xxl: '1.5px',
  },
  colors: {
    primary: '#34FFC8',
    secondary: '#6A0572',
    surface: '#EEEEEE',
    outline: '#E4E4E4',
    darkHard: '#000000',
    darkMedium: '#121212',
    darkSoft: '#9F9F9F',
    lightHard: '#FFFFFF',
    lightMedium: '#FFFFFF',
  },
  fontFamily: {
    primary: `'Roboto', sans-serif`,
  },
  fontSize: {
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '34px',
  },
  fontStyle: {
    normal: 'normal',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  lineHeight: {
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '36px',
  },
  textTransform: {
    upperCase: 'uppercase',
  },
  mixins: {
    typography: {
      body1: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.md};
        line-height: ${() => theme.lineHeight.lg};
        letter-spacing: ${() => theme.letterSpacing.lg};
        color: ${() => theme.colors.darkHard};
      `,
      body2: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.sm};
        line-height: ${() => theme.lineHeight.md};
        letter-spacing: ${() => theme.letterSpacing.md};
        color: ${() => theme.colors.darkSoft};
      `,
      overline: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.medium};
        font-size: ${() => theme.fontSize.xs};
        line-height: ${() => theme.lineHeight.sm};
        letter-spacing: ${() => theme.letterSpacing.xxl};
        color: ${() => theme.colors.darkHard};
        text-transform: ${() => theme.textTransform.upperCase};
      `,
      heading4: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.xxl};
        line-height: ${() => theme.lineHeight.xl};
        letter-spacing: ${() => theme.letterSpacing.xxs};
        color: ${() => theme.colors.darkHard};
      `,
      heading5: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.regular};
        font-size: ${() => theme.fontSize.xl};
        line-height: ${() => theme.lineHeight.lg};
        letter-spacing: ${() => theme.letterSpacing.sm};
        color: ${() => theme.colors.primary};
      `,
      heading6: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.medium};
        font-size: ${() => theme.fontSize.lg};
        line-height: ${() => theme.lineHeight.lg};
        letter-spacing: ${() => theme.letterSpacing.xs};
        color: ${() => theme.colors.primary};
      `,
      buttonText: css`
        font-family: ${() => theme.fontFamily.primary};
        font-style: ${() => theme.fontStyle.normal};
        font-weight: ${() => theme.fontWeight.medium};
        font-size: ${() => theme.fontSize.sm};
        line-height: ${() => theme.lineHeight.sm};
        letter-spacing: ${() => theme.letterSpacing.xl};
        color: ${() => theme.colors.primary};
      `,
    },
    positions: {
      center: css`
        display: flex;
        justify-content: center;
        align-items: center;
      `,
    },
  },
};
