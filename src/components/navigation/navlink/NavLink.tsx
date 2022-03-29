import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

interface ComponentProps {
  text: string;
}

function NavLink({ text }: ComponentProps) {
  return (
    <li>
      <StyledLink smooth to={text}>
        {text}
      </StyledLink>
    </li>
  );
}

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: ${(props) => `${props.theme.colors.gray}`};
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
  cursor: pointer;
  &:hover {
    color: ${(props) => `${props.theme.colors.orange}`};
    transition: all 0.2s linear;

    /* Styles for orange underline on hover */
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 42px;
      height: 2px;
      animation: ${fadeIn} 0.2s 1 linear;
      background: ${(props) => `${props.theme.colors.orange}`};
      border-radius: 10px;
    }
  }
`;

export default NavLink;
