import { Box, Button, useToast } from '@chakra-ui/react';
import useContract from 'hooks/useContract';
import InputFundingAmount from './InputFundingAmount';
import msgExecuteSend from 'utilities/messagesExecute/msgExecuteSend';
import { YFD_TEST } from 'utilities/variables';
import FinderTxLink from 'components/basic/finder/FinderTxLink';
import convertToBase from 'utilities/converters/convertToBase';

function FundProposal({
  contract,
  inputFundingAmount,
  setInputFundingAmount
}: any) {
  const toast = useToast();
  const { executeMsg } = useContract();
  const handleClickFundProposal = async () => {
    const msgFundProposal = msgExecuteSend(
      contract,
      convertToBase(inputFundingAmount),
      'eyJzdGFrZSI6e319'
    );
    const tx = await executeMsg(YFD_TEST, msgFundProposal);
    (tx !== 0 || undefined) &&
      toast({
        title: 'Successfully staked YFD',
        description: <FinderTxLink txHash={tx} />,
        status: 'success',
        duration: 9000,
        isClosable: true
      });
  };

  return (
    <Box bg="blue.600" p={4}>
      <InputFundingAmount
        inputFundingAmount={inputFundingAmount}
        setInputFundingAmount={setInputFundingAmount}
      />
      <Button onClick={handleClickFundProposal}>Fund proposal</Button>
    </Box>
  );
}

export default FundProposal;
