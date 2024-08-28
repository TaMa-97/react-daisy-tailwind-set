const baseFont = 16;
const fonts = {
  size: {
    baseFont,
    baseLineHeight: '1.8',
    baseLetterSpacing: '0',
  },
  fz(size = baseFont, important = false) {
    const result = size / 16;
    return `font-size: ${important ? `${result}rem !important` : `${result}rem`};`;
  },
};

export default fonts;
