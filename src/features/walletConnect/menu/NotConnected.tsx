import { useWallet } from '@terra-money/use-wallet';
import {
  Button,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuDivider
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';

export default function MenuNotConnected() {
  const { network, availableConnections, connect, availableInstallations } =
    useWallet();

  console.log(network);
  return (
    <>
      <MenuButton
        minW={120}
        as={Button}
        rightIcon={
          <span className="material-symbols-outlined">{Icons.expand_down}</span>
        }
      >
        Connect Wallet
      </MenuButton>
      <MenuList className={styles.menuSection}>
        <MenuGroup className={styles.menuTitle} title="Available Connections">
          <MenuDivider />
          <ul className={styles.menuList}>
            {availableConnections.map(
              ({ type, name, icon, identifier = '' }) => (
                <li key={'connection-' + type + identifier}>
                  <a href="#" onClick={() => connect(type, identifier)}>
                    <img
                      src={icon}
                      alt={name}
                      style={{ width: '1em', height: '1em' }}
                    />
                    {name}
                  </a>
                </li>
              )
            )}
          </ul>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup className={styles.menuTitle} title="Available for Install">
          <MenuDivider />
          <ul className={styles.menuList}>
            {availableInstallations.map(
              ({ icon, type, url, identifier, name }) => (
                <li key={`${type}:${identifier}`}>
                  <a href={url}>
                    <img src={icon} width="25px" /> {name}
                  </a>
                </li>
              )
            )}
          </ul>
        </MenuGroup>
      </MenuList>
    </>
  );
}
