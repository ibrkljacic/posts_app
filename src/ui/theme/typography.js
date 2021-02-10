const fonts = {
  body: "'Roboto', sans-serif",
};

export const fontStyles = {
  normal: 'normal',
};

export const fontWeights = {
  normal: 'normal',
  medium: '500',
  bold: 'bold',
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
    fontWeight: fontWeights.medium,
    lineHeight: '26px',
  },
  '2l-spaced': {
    fontFamily: fonts.body,
    fontSize: '20px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '24px',
  },
  'l-spaced-medium': {
    fontFamily: fonts.body,
    fontSize: '18px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
  },
  'm-spaced': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
  },
  'm-spaced-medium': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
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
  'm-spaced-medium-caps': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    textTransform: 'uppercase',
  },
  's-spaced': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '24px',
  },
  's-spaced-bold-caps': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.bold,
    textTransform: 'uppercase',
  },
  's-spaced-medium': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    lineHeight: '16px',
  },
  's-spaced-medium-caps': {
    fontFamily: fonts.body,
    fontSize: '14px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    textTransform: 'uppercase',
  },
  'xs-spaced': {
    fontFamily: fonts.body,
    fontSize: '12px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    lineHeight: '18px',
  },
  'xs-spaced-medium': {
    fontFamily: fonts.body,
    fontSize: '12px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    lineHeight: '21px',
  },
};

export default { fontWeights, variants };
