import styles from '@scss/app.module.scss';
import { MenuList, MenuGroup, MenuDivider } from '@chakra-ui/react';

const favorites = [
  { key: 0, proposal: 'test 1' },
  { key: 10, proposal: 'test 3' },
  { key: 5, proposal: 'test 2' }
];

export default function MenuProfileFavorites() {
  return (
    <MenuList className={styles.menuSection}>
      <MenuGroup className={styles.menuTitle} title="Available Connections">
        <MenuDivider />
        <ul className={styles.menuList}>
          {favorites.map(({ key, proposal }) => (
            <li key={'favorite-' + key}>test{proposal}</li>
          ))}
        </ul>
      </MenuGroup>
      <MenuDivider />
    </MenuList>
  );
}
