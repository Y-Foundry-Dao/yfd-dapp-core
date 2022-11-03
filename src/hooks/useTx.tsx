import { useToast } from '@chakra-ui/react';
import { CreateTxFailed } from '@terra-money/wallet-provider';
import FinderTxLink from 'components/basic/finder/FinderTxLink';

const useTx = () => {
  const toast = useToast();

  const toastSuccessful = (tx: any, message: any) => {
    tx !== 'failed' &&
      tx !== undefined &&
      toast({
        title: message,
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
  };
  const toastError = (error: any) => {
    if (error instanceof CreateTxFailed) {
      toast({
        title: error.name,
        description: error.message
          .replace('failed to execute message; message index: 0: ', '')
          .replace(': execute wasm contract failed: invalid request', '')
          .replace('dispatch: submessages: ', '')
          .replace('Generic error: ', ''),
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
    return 'failed';
  };

  return {
    toastSuccessful,
    toastError
  };
};

export default useTx;
