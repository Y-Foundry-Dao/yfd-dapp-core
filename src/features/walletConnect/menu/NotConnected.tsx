import { useWallet, WalletStatus } from '@terra-money/use-wallet';
import {
  Button,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuDivider
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';

export default function MenuNotConnected() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    connect,
    availableInstallations
  } = useWallet();

  console.log(network);
  return (
    <>
      <MenuButton minW={120} as={Button}>
        Connect Wallet
      </MenuButton>
      <MenuList className={styles['menu-wrapper']}>
        <MenuGroup title="Available Connections">
          {availableConnections.map(({ type, name, icon, identifier = '' }) => (
            <a
              href="#"
              key={'connection-' + type + identifier}
              onClick={() => connect(type, identifier)}
            >
              <img
                src={icon}
                alt={name}
                style={{ width: '1em', height: '1em' }}
              />
              {name}
              {identifier && <div>[{identifier}]</div>}
            </a>
          ))}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Available for Install">
          <ul>
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
