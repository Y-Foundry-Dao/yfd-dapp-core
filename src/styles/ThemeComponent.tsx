import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

interface Props {
  children?: React.ReactNode;
}

const ThemeComponent = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
