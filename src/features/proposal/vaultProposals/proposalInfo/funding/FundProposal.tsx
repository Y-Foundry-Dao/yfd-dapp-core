import { Box, Button } from '@chakra-ui/react';
import InputFundingAmount from './InputFundingAmount';
import useHandleClicks from 'hooks/useHandleClicks';
import { useState } from 'react';
import useContractVote from 'hooks/useContractVote';

function FundProposal({ proposalContract }: any) {
  const { handleClickFundProposal } = useHandleClicks();
  const { voteTokenBalance } = useContractVote({
    proposalContract
  });
  const [inputFundingAmount, setInputFundingAmount] = useState(0);
  return (
    <>
      {voteTokenBalance > 0 ? (
        <Box bg="blue.400" p={4}>
          <InputFundingAmount
            inputFundingAmount={inputFundingAmount}
            setInputFundingAmount={setInputFundingAmount}
          />
          <Button
            onClick={async () =>
              await handleClickFundProposal(
                proposalContract,
                inputFundingAmount
              )
            }
          >
            Fund proposal
          </Button>
        </Box>
      ) : null}
    </>
  );
}

export default FundProposal;
