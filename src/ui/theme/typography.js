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
  '2l-spaced': {
    fontFamily: fonts.body,
    fontSize: '20px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '24px',
  },
  'm-spaced': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
  },
  'm-spaced-bold': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
  },
  'm-spaced-bold-caps': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
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
  's-spaced-caps': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
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
