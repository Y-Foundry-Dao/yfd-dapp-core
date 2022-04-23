import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children?: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function Button({ className, children, disabled, onClick }: Props) {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<Props>`
  background-color: ${(props) => `${props.theme.colors.blue}`};
  color: ${(props) => `${props.theme.colors.white}`};
  border: none;
  border-radius: 10px;
  padding: 13px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default Button;
