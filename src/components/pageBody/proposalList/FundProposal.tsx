import { Box, Button } from '@chakra-ui/react';
import InputFundingAmount from './InputFundingAmount';
import useHandleClicks from 'hooks/useHandleClicks';

function FundProposal({
  voteTokenBalance,
  proposalContract,
  inputFundingAmount,
  setInputFundingAmount
}: any) {
  const { handleClickFundProposal } = useHandleClicks();

  return (
    <>
      {voteTokenBalance > 0 ? (
        <Box bg="blue.600" p={4}>
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
