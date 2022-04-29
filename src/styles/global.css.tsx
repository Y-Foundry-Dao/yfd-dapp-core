import { createGlobalStyle } from 'styled-components';

import ThemeType from 'styles/ThemeType';

const GlobalCss = createGlobalStyle<{ theme: ThemeType }>` 
html{
  font-family: 'Kodchasan', sans-seri f;
  background: radial-gradient(53% 108% at -12% 17%, rgba(70, 56, 4, 0.2) 0%, rgba(0, 0, 0, 0) 98.24%), linear-gradient(111.53deg, #060E1B 0.63%, #1F0D0E 98.4%);
  color: ${(props) => `${props.theme.colors.color4}`};
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;

  &::-webkit-scrollbar {
    width: 16px; 
    background: ${(props) =>
      `${props.theme.colors.color1}`};               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #202833;  
    border-radius: 10px;      /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background:  linear-gradient(186deg, #DA5F37 5%, #805446 90%);    /* color of the scroll thumb */
    border-radius: 10px; 
    border: 3px solid #202833;
  }
  margin: 0;
  padding: 0;
  background: rgba(206,188,155,1);
  background: -moz-linear-gradient(-45deg, rgba(206,188,155,1) 0%, rgba(85,63,50,1) 51%, rgba(42,31,25,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(206,188,155,1)), color-stop(51%, rgba(85,63,50,1)), color-stop(100%, rgba(42,31,25,1)));
  background: -webkit-linear-gradient(-45deg, rgba(206,188,155,1) 0%, rgba(85,63,50,1) 51%, rgba(42,31,25,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(206,188,155,1) 0%, rgba(85,63,50,1) 51%, rgba(42,31,25,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(206,188,155,1) 0%, rgba(85,63,50,1) 51%, rgba(42,31,25,1) 100%);
  background: linear-gradient(135deg, rgba(206,188,155,1) 0%, rgba(85,63,50,1) 51%, rgba(42,31,25,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cebc9b', endColorstr='#2a1f19', GradientType=1 );
}
`;

export default GlobalCss;
