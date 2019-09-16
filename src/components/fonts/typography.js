

import Typography from 'typography';

//TODO find way to specify font-display prop
const typo = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Monoton', 'georgia', 'serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  scaleRatio: 2,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
      '@media screen and (min-width: 600px){h1{font-size:180%} h2, p{font-size:150%}}': {},
  })
})


export default typo;
