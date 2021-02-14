const fonts = {
  body: "'Roboto', sans-serif",
};

export const fontStyles = {
  normal: 'normal',
};

export const fontWeights = {
  normal: '400',
  bold: '700',
};

const variants = {
  '3xl-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '40px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
  },
  '2xl-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '24px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
  },
  'xl-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '22px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    lineHeight: '26px',
  },
  'l-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '20px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '32px',
  },
  'l-spaced-bold-caps': {
    fontFamily: fonts.body,
    fontSize: '20px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    lineHeight: '24px',
    textTransform: 'uppercase',
  },
  'm-spaced': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '24px',
  },
  'm-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    lineHeight: '24px',
  },
  'm-spaced-bold-caps': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
    lineHeight: '24px',
  },
  's-spaced': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '24px',
  },
  's-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    lineHeight: '24px',
  },
  's-spaced-bold-caps': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
  },
  'xs-spaced': {
    fontFamily: fonts.body,
    fontSize: '12px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '18px',
  },
};

export default { fontWeights, variants };
