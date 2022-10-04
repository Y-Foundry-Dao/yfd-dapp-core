import { Text } from '@chakra-ui/react';
import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/queryTokenInfo';

function VoteTokenBalance({ contract, voteTokenBalance }: any) {
  const [tokenSymbol, setTokenSymbol] = useState('Vote');
  const { queryMsg } = useContract();
  const getTokenInfo = async () => {
    const response = await queryMsg(contract, queryTokenInfo());
    return response;
  };
  useEffect(() => {
    getTokenInfo().then((res: any) => {
      if (res !== undefined) {
        console.log(res);
        setTokenSymbol(res.symbol);
      }
    });
  }, []);
  return (
    <Text>
      {tokenSymbol} Tokens:{' '}
      {voteTokenBalance !== undefined
        ? (voteTokenBalance.balance * Math.pow(10, -6)).toFixed(3)
        : 'No vote tokens'}
    </Text>
  );
}

export default VoteTokenBalance;
