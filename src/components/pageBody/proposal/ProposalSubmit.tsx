import { Button, Flex, Heading } from '@chakra-ui/react';
import useHandleClicks from 'hooks/useHandleClicks';
import InputDevelopmentCost from './inputs/InputDevelopmentCost';
import InputExpiration from './inputs/InputExpiration';
import InputGithub from './inputs/InputGithub';
import InputInitialFunding from './inputs/InputInitialFunding';
import InputPaymentFrequency from './inputs/InputPaymentFrequency';
import InputPaymentSchedule from './inputs/InputPaymentSchedule';
import InputProposalName from './inputs/InputProposalName';
import InputProposalUrl from './inputs/InputProposalUrl';
import InputQuorumPercentage from './inputs/InputQuorumPercentage';
import InputSelfVouchedInformation from './inputs/InputSelfVouchedInformation';
import InputStatementOfWork from './inputs/InputStatementOfWork';
import InputTvlLimit from './inputs/InputTvlLimit';

function ProposalSubmit() {
  const { handleClickCreateProposal } = useHandleClicks();

  return (
    <Flex direction="column" alignItems="center" minWidth="50%" mt={5}>
      <Heading as="h2" size="lg">
        Submit a Proposal
      </Heading>
      <InputProposalName />
      <InputProposalUrl />
      <InputStatementOfWork />
      <InputGithub />
      <InputSelfVouchedInformation />

      <InputTvlLimit />
      <InputDevelopmentCost />
      <InputInitialFunding />
      <InputExpiration />

      <InputPaymentSchedule />
      <InputPaymentFrequency />

      <InputQuorumPercentage />
      <Button
        my={5}
        onClick={() => {
          handleClickCreateProposal();
        }}
      >
        ProposalSubmit
      </Button>
    </Flex>
  );
}

export default ProposalSubmit;
