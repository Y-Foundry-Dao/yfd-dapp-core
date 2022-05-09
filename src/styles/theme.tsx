const base = {
  colors: {
    color1: '#040307',
    color2: '#D8552A', // orange
    color3: '#D7B9A3',
    color4: '#FCFEFF',
    color5: '#1F43BF',
    color6: 'rgba(255, 255, 255, 0.8)',
    color7: '#1F43BF'
  },
  background: {
    color1: 'rgba(206,188,155,1)',
    color2: 'rgba(85,63,50,1)',
    color3: 'rgba(42,31,25,1)',
    color4: ''
  },
  scrollbar: {
    color1: '#040307',
    colorTrack: '#202833',
    width: '16px',
    borderRadius: '10px',
    thumbColor1: '#DA5F37',
    thumbColor2: '#805446',
    thumbBorderColor: '#202833'
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
