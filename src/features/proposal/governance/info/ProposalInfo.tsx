import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  addSeconds,
  format,
  formatDuration,
  fromUnixTime,
  intervalToDuration,
  Duration
} from 'date-fns';
import { CHAIN_SECONDS_PER_BLOCK } from '@utilities/variables';
import useTx from 'hooks/useTx';
import { useLocation } from 'react-router';
import { useRecoilValue } from 'recoil';
import useContractGovernanceProposal from 'hooks/useContractGovernanceProposal';
import styles from '@scss/app.module.scss';
import useChainInfo from '@hooks/useChainInfo';

import { SUCCESS_PROPOSAL_DISCORD } from 'utilities/variables/toastMessages';
import { WEBHOOK_PROPOSALS_ALL } from 'utilities/variables/discord';

function ProposalInfo({ proposalContract, proposalIndex }: any) {
  const { currentBlockHeight } = useChainInfo();
  const { governanceProposalInfo } = useContractGovernanceProposal({
    proposalContract,
    proposalIndex
  });
  const handleClick = () => {
    sendToDiscord();
  };

  const objectConverted = Object.keys(governanceProposalInfo);
  const proposalType =
    objectConverted.length !== 0 &&
    Object.keys(governanceProposalInfo.detail)[0];

  const sendToDiscord = () => {
    const blockClosing = governanceProposalInfo.closing_block;
    const blockQuorum = governanceProposalInfo.quorum_block;
    const webhookUrl = WEBHOOK_PROPOSALS_ALL;
    const messageSuccess = SUCCESS_PROPOSAL_DISCORD;
    console.log('proposal Data: ' + JSON.stringify(governanceProposalInfo));
    const dateCurrent = format(Date.now(), 'dd-MMM-yyyy hh:mm aaa');
    const blocksUntilClosing = blockClosing - currentBlockHeight;
    const blocksUntilQuorum = blockQuorum - currentBlockHeight;
    const secondsUntilClosing = blocksUntilClosing * CHAIN_SECONDS_PER_BLOCK;
    const secondsUntilQuorum = blocksUntilQuorum * CHAIN_SECONDS_PER_BLOCK;
    const closingTime = addSeconds(Date.now(), secondsUntilClosing);
    const quorumTime = addSeconds(Date.now(), secondsUntilQuorum);
    const closingTimeFormatted = format(closingTime, 'dd-MMM-yyyy hh:mm aaa');
    const quorumTimeFormatted = format(quorumTime, 'dd-MMM-yyyy hh:mm aaa');

    console.log(
      'block ( ' +
        currentBlockHeight +
        ') time: compared to current time: ' +
        Date.now()
    );
    console.log(
      'blocks between now ( ' +
        currentBlockHeight +
        ' ) and closing ( ' +
        blockClosing +
        ' ): ' +
        blocksUntilClosing
    );
    console.log(
      'closing (' + blockClosing + ' ) time: ' + closingTimeFormatted
    );
    console.log('quorum (' + blockQuorum + ' ) time: ' + quorumTimeFormatted);

    const voteStatus =
      governanceProposalInfo.quorum_block === null
        ? 'Not Reached'
        : 'Reached: ' + quorumTimeFormatted;
    console.log('voteStatus: ' + voteStatus);

    const endTime: string = closingTimeFormatted;
    const header = '**Zrrtt. Zrrrop...**';
    const title = governanceProposalInfo.name;
    const description =
      `\n __` +
      proposalType +
      `__ Proposal Status at Block ` +
      currentBlockHeight +
      `!` +
      `\n\n__Closing Block__\n` +
      closingTime +
      //`\n\n__Quorum Block__\n` +
      //quorumTime +
      `\n\n__Quorum Status:__\n` +
      `||` +
      voteStatus +
      `||`;

    const footerText = dateCurrent + `\n ` + window.location.href + `\n\n`;

    const discordMessage = {
      content: header,
      embeds: [
        {
          title: title,
          description: description,
          url: window.location.href,
          footer: {
            text: footerText
          }
        }
      ]
    };

    console.log('discordMessage: ' + JSON.stringify(discordMessage));

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
      <Text>
        Block Closing Time ( {governanceProposalInfo.closing_block} ) : --
        closing time goes here -- {/*closingTimeFormatted*/}
      </Text>
      <Text>
        {
          governanceProposalInfo.quorum_block === null
            ? 'Quorum Not Yet Reached'
            : `Quorum Reached at Block ( ` +
              governanceProposalInfo.quorum_block +
              ` ) ` /*closingTimeFormatted*/
        }
      </Text>
    </Flex>
  );
}

export default ProposalInfo;
