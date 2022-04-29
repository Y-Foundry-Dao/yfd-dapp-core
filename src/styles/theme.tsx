const base = {
  colors: {
    color1: '#040307',
    color2: '#D8552A',
    color3: '#D7B9A3',
    color4: '#FCFEFF',
    color5: '#1F43BF',
    color6: 'rgba(255, 255, 255, 0.8)',
    color7: '#1F43BF'
  }
};
const primary = {
  ...base,
  colors: {
    ...base.colors,
    color5: 'linear-gradient(180deg, #FEC221 0%, #D8552A 100%);',
    color7: 'linear-gradient(180deg, #885555 0%, #D8552A 80%);'
  }
};
export { base, primary };
