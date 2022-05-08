import { useRef } from 'react';

import BurgerIcon from 'components/header/burger/burgerIcon/BurgerIcon';
import BurgerMenu from 'components/header/burger/burgerMenu/BurgerMenu';

import useOnClickOutside from 'hooks/useOnClickOutside';
import burgerAtom from 'recoil/burger/atom';
import { useRecoilState } from 'recoil';

function Burger() {
  const [burgerIsOpen, setBurgerIsOpen] = useRecoilState(burgerAtom);

  const burgerRef = useRef<HTMLDivElement>(null);

  // closes menu when clicking anywhere outside of it
  useOnClickOutside(burgerRef, () => setBurgerIsOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={burgerIsOpen} setOpen={setBurgerIsOpen} />
      <BurgerMenu open={burgerIsOpen} setOpen={setBurgerIsOpen} />
    </div>
  );
}

export default Burger;
