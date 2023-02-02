import { useDisclosure } from '@chakra-ui/react';
import ModalConnectWallet from '@components/ConnectWallet/Modal';
import ButtonConnectWallet from '@components/ConnectWallet/Button';

export default function ConnectWallet() {
  const {
    isOpen: connectWalletIsOpen,
    onOpen: connectWalletOnOpen,
    onClose: connectWalletOnClose
  } = useDisclosure();

  return (
    <>
      <ButtonConnectWallet onOpen={connectWalletOnOpen} />
      <ModalConnectWallet
        isOpen={connectWalletIsOpen}
        onClose={connectWalletOnClose}
      />
    </>
  );
}
