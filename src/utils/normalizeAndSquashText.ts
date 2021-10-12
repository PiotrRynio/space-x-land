export const normalizeAndSquashText = (text: string): string =>
  text.trim().toLowerCase().replaceAll(' ', '');
