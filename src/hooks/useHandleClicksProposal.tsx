import useMsg from './useMsg';
import { FORGE_TEST } from 'utilities/variables/variables';
import { useRecoilValue } from 'recoil';
import {
  inputEmergencyExpiration,
  inputEmergencyJustification
} from 'recoil/input/atoms';
import msgExecuteEmergencyEndProposal from 'utilities/messagesExecute/msgExecuteEmergencyEndProposal';
import { SUCCESS_INITIATE_EMERGENCY } from 'utilities/variables/toastMessages';
import useTx from './useTx';
import msgMintNFT from 'utilities/messagesExecute/msgMintNFT';

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

  const handleClickEmergencyEndProposal = async () => {
    const msgEmergencyEndProposal = msgExecuteEmergencyEndProposal(
      proposalIndex,
      emergencyExpiration,
      emergencyJustification
    );
    const tx = await executeMsg(FORGE_TEST, msgEmergencyEndProposal);
    toastSuccessful(tx, SUCCESS_INITIATE_EMERGENCY);
  };

  return {
    handleClickEmergencyEndProposal,
    handleClickMintNFT
  };
};

export default useHandleClicksProposal;
