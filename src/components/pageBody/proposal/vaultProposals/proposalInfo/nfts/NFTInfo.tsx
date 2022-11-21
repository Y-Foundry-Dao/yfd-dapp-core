import { Flex, Text } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';

function NFTInfo({ nftContractInfo }: any) {
  const nftContractAddress: string = nftContractInfo.addr;
  // const { tokenIds } = useContractNFT({ nftContractAddress });
  return (
    <Flex direction="column">
      NFTInfo
      <FinderContractLink contract={nftContractInfo.addr} />
      <Text>Total Shares: {nftContractInfo.total_shares}</Text>
    </Flex>
  );
}

export default NFTInfo;
