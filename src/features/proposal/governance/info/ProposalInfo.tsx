import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { format } from 'date-fns';
import useTx from 'hooks/useTx';
import { useLocation } from 'react-router';
import useWebhookProposal from '@hooks/useWebhookProposal';

import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import styles from '@scss/app.module.scss';

import { SUCCESS_PROPOSAL_DISCORD } from 'utilities/variables/toastMessages';
import { WEBHOOK_PROPOSALS_ALL } from 'utilities/variables/discord';

function ProposalInfo({ proposalContract, proposalIndex }: any) {
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  const handleClick = () => {
    console.log('handleClick() called');
    useWebhookProposal('hello');
  };

  const objectConverted = Object.keys(governanceProposalInfo);
  const proposalType =
    objectConverted.length !== 0 &&
    Object.keys(governanceProposalInfo.detail)[0];

  const sendToDiscord = () => {
    const webhookUrl = WEBHOOK_PROPOSALS_ALL;
    const messageSuccess = SUCCESS_PROPOSAL_DISCORD;
    const header = '**Zrrtt. Zrrrop.**';
    const title = governanceProposalInfo.name;
    const description =
      proposalType +
        governanceProposalInfo.closing_block +
        governanceProposalInfo.quorum_block +
        governanceProposalInfo.quorum_block ===
      null
        ? 'Voting still in progress'
        : governanceProposalInfo.quorum_block;

    const footerText =
      format(Date.now(), 'dd-MMM-yyyy hh:mm aaa') +
      `\n ` +
      location.hash +
      `\n`;

    const discordMessage = {
      content: header,
      embeds: [
        {
          title: title,
          description: description,
          footer: {
            text: footerText
          }
        }
      ]
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordMessage)
    }).then(() => {
      console.log(
        'executed webhook to url: ' +
          webhookUrl +
          ' with message: ' +
          JSON.stringify(discordMessage)
      );
    });
  };

  return (
    <Flex direction="column" gap={4}>
      <button
        id="sendToDiscord"
        className={[styles['icon-create'], styles['standard']].join(' ')}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={brands('discord')} />
        <br />
        <span>Send to Discord</span>
      </button>
      <Text>Proposal Name: {governanceProposalInfo.name}</Text>
      <>Type of Proposal: {proposalType}</>
      <Text>Closing block: {governanceProposalInfo.closing_block}</Text>
      <Text>
        Quorum Block:{' '}
        {governanceProposalInfo.quorum_block === null
          ? 'Voting still in progress'
          : governanceProposalInfo.quorum_block}
      </Text>
    </Flex>
  );
}

export default ProposalInfo;
