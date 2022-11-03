import { Box, Button, Text, VStack } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractEmergency from 'hooks/useContractEmergency';
import useHandleClicks from 'hooks/useHandleClicks';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import InputVoteAmount from '../../governanceProposals/proposalList/proposalInfo/voting/InputVoteAmount';
import VoteButtons from '../../governanceProposals/proposalList/proposalInfo/voting/VoteButtons';
import EmergencyVoteBalance from './voting/EmergencyVoteBalance';

function EmergencyProposalInfo({ emergency }: any) {
  const { emergencyInfo, emergencyVoteBalance, votes } = useContractEmergency({
    emergency
  });
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeEmergency } = useHandleClicks();
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return emergencyInfo !== undefined ? (
    <>
      <FinderContractLink contract={emergencyInfo.addr} />
      <Text>{emergencyInfo.name}</Text>
      <Text>Closing block: {emergencyInfo.closing_block}</Text>
      <Text>State of Proposal: {Object.keys(emergencyInfo.state)[0]}</Text>
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

      {currentBlockHeight > emergencyInfo.closing_block
        ? emergencyInfo.state.NotFinalized && (
            <Box layerStyle="emergencyVote">
              <VStack>
                <Text>
                  Proposal Ready to finalize. Would you like to do that now?
                </Text>
                <Button
                  onClick={async () => {
                    await handleClickFinalizeEmergency(emergency.index);
                  }}
                >
                  Finalize Proposal
                </Button>
              </VStack>
            </Box>
          )
        : null}
    </>
  ) : (
    <>Loading...</>
  );
}

export default EmergencyProposalInfo;
