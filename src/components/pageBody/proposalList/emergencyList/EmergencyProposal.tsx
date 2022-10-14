import { Text } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractEmergency from 'hooks/useContractEmergency';
import { useState } from 'react';
import InputVoteAmount from '../proposalInfo/voting/InputVoteAmount';
import VoteButtons from '../proposalInfo/voting/VoteButtons';
import EmergencyVoteBalance from './voting/EmergencyVoteBalance';

function EmergencyProposal({ emergency }: any) {
  const { emergencyInfo, emergencyVoteBalance } = useContractEmergency({
    emergency
  });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return emergencyInfo !== undefined ? (
    <>
      <FinderContractLink contract={emergencyInfo.addr} />
      <Text>{emergencyInfo.name}</Text>
      <Text>{emergencyInfo.closing_block}</Text>
      <EmergencyVoteBalance
        symbol={emergencyInfo.name}
        voteTokenBalance={emergencyVoteBalance}
      />
      <InputVoteAmount
        voteTokenBalance={emergencyVoteBalance}
        inputVoteTokenAmount={inputVoteTokenAmount}
        setInputVoteTokenAmount={setInputVoteTokenAmount}
      />
      <VoteButtons
        contract={emergencyInfo.addr}
        voteTokenBalance={emergencyVoteBalance}
        inputVoteTokenAmount={inputVoteTokenAmount}
      />
    </>
  ) : (
    <>Loading...</>
  );
}

export default EmergencyProposal;
