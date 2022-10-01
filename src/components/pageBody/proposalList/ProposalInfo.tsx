import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import { Flex, Text } from '@chakra-ui/react';

function ProposalInfo({ contract }: any) {
  const { queryMsg } = useContract();
  const [proposalInfo, setProposalInfo] = useState<any>({});

  const getProposalInfo = async () => {
    const response = await queryMsg(contract, queryProposalInfo());
    return response;
  };
  useEffect(() => {
    console.log(contract);
    getProposalInfo().then((res: any) => {
      if (res !== undefined) {
        console.log(res);
        setProposalInfo({ ...res });
      }
    });
  }, [contract]);

  return (
    <Flex direction="column" gap={4}>
      <Text>Proposal Name: {proposalInfo.name}</Text>
      <Text>Proposal URL: {proposalInfo.proposal_url}</Text>
      <Text>Statement of Work URL: {proposalInfo.statement_of_work}</Text>
      <Text>Developer: {proposalInfo.developer}</Text>
      <Text>Development Cost: {proposalInfo.development_cost}</Text>
      <Text>Developer Github: {proposalInfo.github}</Text>
      <Text>TVL Limit: {proposalInfo.tvl_limit}</Text>
    </Flex>
  );
}

export default ProposalInfo;
