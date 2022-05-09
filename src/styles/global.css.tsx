import { createGlobalStyle } from 'styled-components';

import ThemeType from 'styles/ThemeType';

const GlobalCss = createGlobalStyle<{ theme: ThemeType }>` 
html {
  font-family: 'Kodchasan', sans-seri f;
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
      `${props.theme.colors.color1}`};               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => `${props.theme.scrollbar.colorTrack}`};  
    border-radius: ${(props) => `${props.theme.scrollbar.borderRadius}`};
  }

  &::-webkit-scrollbar-thumb {      /* color of the scroll thumb */
    background:  linear-gradient(186deg, 
      ${(props) => `${props.theme.scrollbar.thumbColor1}`} 5%,
      ${(props) => `${props.theme.scrollbar.thumbColor2}`} 90%);
    border-radius: ${(props) => `${props.theme.scrollbar.borderRadius}`}; 
    border: 3px solid ${(props) => `${props.theme.scrollbar.thumbBorderColor}`};
  }
}
`;

export default GlobalCss;
