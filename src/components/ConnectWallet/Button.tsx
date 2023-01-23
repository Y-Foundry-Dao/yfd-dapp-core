import { Button } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

type ButtonConnectWalletProps = {
  onOpen: () => void;
};

export default function ButtonConnectWallet({
  onOpen
}: ButtonConnectWalletProps) {
  return (
    <Button
      minW={120}
      onClick={onOpen}
      leftIcon={
        <span className="material-symbols-outlined">{Icons.wallet}</span>
      }
    >
      <div className={styles.menuButton}>Connect Wallet</div>
    </Button>
  );
}
