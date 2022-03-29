import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

function DepositButton({ children, disabled, onClick }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  background-color: ${(props) => `${props.theme.colors.blue}`};
  color: ${(props) => `${props.theme.colors.white}`};
  border: none;
  border-radius: 10px;
  padding: 13px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default DepositButton;
