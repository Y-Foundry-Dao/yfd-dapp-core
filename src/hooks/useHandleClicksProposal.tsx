import useMsg from './useMsg';
import { FORGE_TEST } from 'utilities/variables';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useToast } from '@chakra-ui/react';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
import {
  inputEmergencyExpiration,
  inputEmergencyJustification
} from 'recoil/input/atoms';
import txHashAtom from 'recoil/txHash/atom';
import msgExecuteEmergencyEndProposal from 'utilities/messagesExecute/msgExecuteEmergencyEndProposal';

// Needed to create a separate hook that takes a proposalIndex
// did this to use it in the inputExpirationEmergency atomFamily
const useHandleClicksProposal = ({ proposalIndex }: any) => {
  const { executeMsg } = useMsg();
  const toast = useToast();
  const setTxHashInRecoil = useSetRecoilState(txHashAtom);

  // Pulling in Recoil Values
  const emergencyExpiration = useRecoilValue(
    inputEmergencyExpiration(proposalIndex)
  );
  const emergencyJustification = useRecoilValue(
    inputEmergencyJustification(proposalIndex)
  );

  const handleClickEmergencyEndProposal = async () => {
    const msgEmergencyEndProposal = msgExecuteEmergencyEndProposal(
      proposalIndex,
      emergencyExpiration,
      emergencyJustification
    );
    const tx = await executeMsg(FORGE_TEST, msgEmergencyEndProposal);
    console.log(tx);
    setTxHashInRecoil(tx);
    (tx !== 0 || undefined) &&
      toast({
        title: 'Successfully Initiate Emergency Votes',
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
  };

  return {
    handleClickEmergencyEndProposal
  };
};

export default useHandleClicksProposal;
