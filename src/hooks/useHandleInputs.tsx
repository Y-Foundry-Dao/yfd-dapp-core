import { useSetRecoilState } from 'recoil';
import {
  inputStakeYFD,
  inputWhitelistWalletAddress,
  inputWhitelistWalletAddressGithub,
  inputWhitelistWalletAddressImageLink,
  inputWhitelistWalletAddressKeybase,
  inputWhitelistWalletAddressName,
  inputWhitelistWalletAddressTelegram,
  inputWhitelistWalletAddressTwitter,
  inputWhitelistWalletAddressUrl
} from 'recoil/input/atoms';

const useHandleInputs = () => {
  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);
  // Recoil values for address whitelist
  const setWhitelistWalletAddress = useSetRecoilState(
    inputWhitelistWalletAddress
  );
  const setWhitelistWalletAddressName = useSetRecoilState(
    inputWhitelistWalletAddressName
  );
  const setWhitelistWalletAddressImageLink = useSetRecoilState(
    inputWhitelistWalletAddressImageLink
  );
  const setWhitelistWalletAddressGithub = useSetRecoilState(
    inputWhitelistWalletAddressGithub
  );
  const setWhitelistWalletAddressKeybase = useSetRecoilState(
    inputWhitelistWalletAddressKeybase
  );
  const setWhitelistWalletAddressTelegram = useSetRecoilState(
    inputWhitelistWalletAddressTelegram
  );
  const setWhitelistWalletAddressTwitter = useSetRecoilState(
    inputWhitelistWalletAddressTwitter
  );
  const setWhitelistWalletAddressUrl = useSetRecoilState(
    inputWhitelistWalletAddressUrl
  );

  const handleInputStakeYFD = (value: any) => setAmountStakeYFD(value);

  const handleInputWhitelistWalletAddress = (event: any) =>
    setWhitelistWalletAddress(event.target.value);

  const handleInputWhitelistWalletAddressName = (event: any) =>
    setWhitelistWalletAddressName(event.target.value);

  const handleInputWhitelistWalletAddressImageLink = (event: any) =>
    setWhitelistWalletAddressImageLink(event.target.value);

  // TODO: Figure out role checkbox selection
  // const handleInputWhitelistWalletAddressRoles = (event: any) => setWhitelistWalletAddress(event.target.value);

  const handleInputWhitelistWalletAddressGithub = (event: any) =>
    setWhitelistWalletAddressGithub(event.target.value);

  const handleInputWhitelistWalletAddressKeybase = (event: any) =>
    setWhitelistWalletAddressKeybase(event.target.value);

  const handleInputWhitelistWalletAddressTelegram = (event: any) =>
    setWhitelistWalletAddressTelegram(event.target.value);

  const handleInputWhitelistWalletAddressTwitter = (event: any) =>
    setWhitelistWalletAddressTwitter(event.target.value);

  const handleInputWhitelistWalletAddressUrl = (event: any) =>
    setWhitelistWalletAddressUrl(event.target.value);

  return {
    handleInputStakeYFD,
    handleInputWhitelistWalletAddress,
    handleInputWhitelistWalletAddressName,
    handleInputWhitelistWalletAddressImageLink,
    handleInputWhitelistWalletAddressGithub,
    handleInputWhitelistWalletAddressKeybase,
    handleInputWhitelistWalletAddressTelegram,
    handleInputWhitelistWalletAddressTwitter,
    handleInputWhitelistWalletAddressUrl
  };
};

export default useHandleInputs;
