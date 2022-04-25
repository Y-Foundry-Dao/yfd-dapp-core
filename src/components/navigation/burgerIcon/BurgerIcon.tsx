import React from 'react';

import styled from 'styled-components';

interface ComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface StyleProps {
  open: boolean;
  onClick: () => void;
}

const BurgerIcon: React.FC<ComponentProps> = ({
  open,
  setOpen
}: ComponentProps) => {
  return (
    <Burger aria-label="Burger Menu" open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  );
};

const Burger: React.FC<StyleProps> = styled.button<StyleProps>`
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 18px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;

  &:focus {
    outline: none;
  }

  /* styles for the hamburger and the x */
  div {
    width: 1.9rem;
    height: 0.19rem;
    background: ${(props) => `${props.theme.colors.color4}`};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.2s linear;

    /* transforms from hamburger to x */
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    /* transforms from hamburger to x */
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    /* transforms from hamburger to x */
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  /* hides burger on desktop */
  @media (min-width: 757px) {
    display: none;
  }
`;

export default BurgerIcon;
