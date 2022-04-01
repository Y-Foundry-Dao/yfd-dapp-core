import { useRef } from 'react';

import BurgerIcon from 'components/navigation/burgerIcon/BurgerIcon';
import BurgerMenu from 'components/navigation/burgerMenu/BurgerMenu';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

interface ComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: Array<string>;
}

function Burger({ open, setOpen, navLinks }: ComponentProps) {
  const burgerRef = useRef<HTMLDivElement>(null);

  // closes menu when clicking anywhere outside of it
  useOnClickOutside(burgerRef, () => setOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} navLinks={navLinks} />
    </div>
  );
}

export default Burger;
