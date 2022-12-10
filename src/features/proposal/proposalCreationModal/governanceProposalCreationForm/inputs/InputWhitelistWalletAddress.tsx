import { Input } from '@chakra-ui/react';
import useHandleInputs from 'hooks/useHandleInputs';
import { useRecoilValue } from 'recoil';
import {
  inputDeveloperWallet,
  inputWhitelistWalletAddress
} from 'recoil/input/atoms';

function InputWhitelistWalletAddress() {
  const whitelistWalletAddress = useRecoilValue(inputWhitelistWalletAddress);
  const { handleInputWhitelistWalletAddress } = useHandleInputs();
  return (
    <Input
      mt={5}
      value={whitelistWalletAddress}
      onChange={handleInputWhitelistWalletAddress}
      placeholder="Enter Address to Whitelist"
    />
  );
}

export default InputWhitelistWalletAddress;
