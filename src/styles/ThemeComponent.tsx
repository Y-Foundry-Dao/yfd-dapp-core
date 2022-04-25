import { ThemeProvider } from 'styled-components';
import { primary } from 'styles/theme';

interface Props {
  children?: React.ReactNode;
}

const ThemeComponent = ({ children }: Props) => {
  return <ThemeProvider theme={primary}>{children}</ThemeProvider>;
};

export default ThemeComponent;
