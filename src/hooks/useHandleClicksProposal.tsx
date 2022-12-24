import useMsg from './useMsg';
import { FORGE_TEST } from '@utilities/variables';
import { useRecoilValue } from 'recoil';
import {
  inputEmergencyExpiration,
  inputEmergencyJustification
} from 'recoil/input/atoms';
import { SUCCESS_INITIATE_EMERGENCY } from 'utilities/variables/toastMessages';
import useTx from './useTx';
import msgMintNFT from 'utilities/messagesExecute/proposal/msgMintNFT';

// Needed to create a separate hook that takes a proposalIndex
// did this to use it in the inputExpirationEmergency atomFamily
const useHandleClicksProposal = ({ proposalContract, proposalIndex }: any) => {
  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  // Pulling in Recoil Values
  const emergencyExpiration = useRecoilValue(
    inputEmergencyExpiration(proposalIndex)
  );
  const emergencyJustification = useRecoilValue(
    inputEmergencyJustification(proposalIndex)
  );

  const handleClickMintNFT = async () => {
    const tx = await executeMsg(proposalContract, msgMintNFT());
    toastSuccessful(tx, SUCCESS_INITIATE_EMERGENCY);
  };

  return {
    handleClickMintNFT
  };
};

export default useHandleClicksProposal;
