const base = {
  fonts: {
    heading: 'Kodchasan, sans-serif',
    body: 'Roboto Mono, monospace',
    mono: 'Roboto Mono, monospace'
  },
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
  },
  header: {
    backgroundColor: 'rgba(4, 3, 7, 0.5)'
  },
  sectionTitle: {
    textColor: '#D7B9A3',
    textShadowColor1: '#000',
    textShadowColor2: 'gray',
    textShadowColor3: '#333'
  }
};
const primary = {
  ...base,
  layerStyles: {
    pageBody: {
      width: '100%',
      bgGradient: 'linear(to-b, yellow.50, orange.50, orange.300)',
      border: '3px solid gray',
      padding: '10px'
    },
    stakeYFD: {
      color: 'white',
      padding: '10px'
    },
    stakeItemCard: {
      bg: 'color5'
    }
  },
  textStyles: {
    pageBody: {
      color: 'black'
    }
  },
  colors: {
    ...base.colors,
    color5: 'linear-gradient(180deg, #FEC221 0%, #D8552A 100%);',
    color7: 'linear-gradient(180deg, #885555 0%, #D8552A 80%);'
  }
};

/*
html {
  font-family: 'Kodchasan', sans-serif;
  background: radial-gradient(53% 108% at -12% 17%, rgba(70, 56, 4, 0.2) 0%, rgba(0, 0, 0, 0) 98.24%), linear-gradient(111.53deg, #060E1B 0.63%, #1F0D0E 98.4%);
  color: ${(props) => `${props.theme.colors.color4}`};
}

body {
  margin: 0;
  padding: 0;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;

  background: ${(props) => `${props.theme.background.color1}`};
  background: -moz-linear-gradient(-45deg, 
    ${(props) => `${props.theme.background.color1}`} 0%, 
    ${(props) => `${props.theme.background.color2}`} 51%, 
    ${(props) => `${props.theme.background.color3}`} 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, 
    ${(props) => `${props.theme.background.color1}`}), 
    color-stop(51%, ${(props) => `${props.theme.background.color2}`}), 
    color-stop(100%, ${(props) => `${props.theme.background.color3}`}));
  background: -webkit-linear-gradient(-45deg, 
    ${(props) => `${props.theme.background.color1}`} 0%, 
    ${(props) => `${props.theme.background.color2}`} 51%, 
    ${(props) => `${props.theme.background.color3}`} 100%);
  background: -o-linear-gradient(-45deg, 
    ${(props) => `${props.theme.background.color1}`} 0%, 
    ${(props) => `${props.theme.background.color2}`} 51%, 
    ${(props) => `${props.theme.background.color3}`} 100%);
  background: -ms-linear-gradient(-45deg, 
    ${(props) => `${props.theme.background.color1}`} 0%, 
    ${(props) => `${props.theme.background.color2}`} 51%, 
    ${(props) => `${props.theme.background.color3}`} 100%);
  background: linear-gradient(135deg, 
    ${(props) => `${props.theme.background.color1}`} 0%, 
    ${(props) => `${props.theme.background.color2}`} 51%, 
    ${(props) => `${props.theme.background.color3}`} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cebc9b', endColorstr='#2a1f19', GradientType=1 );

  &::-webkit-scrollbar {
    width: ${(props) => `${props.theme.scrollbar.width}`};
    background: ${(props) =>
      `${props.theme.colors.color1}`};
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => `${props.theme.scrollbar.colorTrack}`};  
    border-radius: ${(props) => `${props.theme.scrollbar.borderRadius}`};
  }

  &::-webkit-scrollbar-thumb {
    background:  linear-gradient(186deg, 
      ${(props) => `${props.theme.scrollbar.thumbColor1}`} 5%,
      ${(props) => `${props.theme.scrollbar.thumbColor2}`} 90%);
    border-radius: ${(props) => `${props.theme.scrollbar.borderRadius}`}; 
    border: 3px solid ${(props) => `${props.theme.scrollbar.thumbBorderColor}`};
  }
}
`;
*/
export default primary;
