import { Text } from '@chakra-ui/react';
import useMsg from 'hooks/useMsg';
import { useEffect, useState } from 'react';
import convertFromBase from 'utilities/converters/convertFromBase';
import queryTokenInfo from 'utilities/messagesQuery/queryTokenInfo';

function VoteTokenBalance({ contract, voteTokenBalance }: any) {
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const { queryMsg } = useMsg();
  const getTokenInfo = async () => {
    const response = await queryMsg(contract, queryTokenInfo());
    return response;
  };
  useEffect(() => {
    getTokenInfo().then((res: any) => {
      if (res !== undefined) {
        setTokenSymbol(res.symbol);
      }
    });
  }, []);
  return (
    <Text>
      {tokenSymbol} Tokens:{' '}
      {voteTokenBalance.balance > 0
        ? convertFromBase(voteTokenBalance.balance).toFixed(3)
        : '0'}
    </Text>
  );
}

export default VoteTokenBalance;
