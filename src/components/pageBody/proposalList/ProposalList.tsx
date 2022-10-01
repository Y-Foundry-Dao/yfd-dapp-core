import useContract from 'hooks/useContract';
import { useEffect } from 'react';
import { FORGE_TEST } from 'utilities/variables';
import queryAllProposalContracts from 'utilities/messagesQuery/queryAllProposalContracts';
import { useRecoilState } from 'recoil';
import proposalsAtom from 'recoil/proposals/atom';
import ProposalInfo from './ProposalInfo';
import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';

function ProposalList() {
  const { queryMsg } = useContract();
  const [proposals, setProposals] = useRecoilState(proposalsAtom);
  const getAllProposalContracts = async () => {
    const response = await queryMsg(FORGE_TEST, queryAllProposalContracts());
    return response;
  };
  useEffect(() => {
    getAllProposalContracts().then((res: any) => {
      if (res !== undefined) {
        setProposals(res.proposals);
      }
    });
  }, []);

  return (
    <>
      <Heading as="h2" size="lg">
        Current Proposals
      </Heading>
      <Flex wrap="wrap" gap={5} justifyContent="center">
        {proposals.map((proposal: any) => {
          return (
            <Box maxW="45%" my={6} p={5} borderRadius="md" bg="blue.900">
              <FinderContractLink contract={proposal.addr} />
              <Divider my={4} />
              <ProposalInfo contract={proposal.addr} />
            </Box>
          );
        })}
      </Flex>
    </>
  );
}

export default ProposalList;
