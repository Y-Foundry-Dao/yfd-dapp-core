import { format } from 'date-fns';
import { useLocation } from 'react-router';

import { useToast } from '@chakra-ui/react';
import { CreateTxFailed } from '@terra-money/wallet-provider';
import FinderTxLink from '@components/finder/FinderTxLink';

import { SUCCESS_PROPOSAL_DISCORD } from 'utilities/variables/toastMessages';
import { WEBHOOK_PROPOSALS_ALL } from 'utilities/variables/discord';

export default function sendItJimmy(message: any) {
  const url = WEBHOOK_PROPOSALS_ALL;
  const messageSuccess = SUCCESS_PROPOSAL_DISCORD;

  console.log('message received: ' + message);

  const useWebhookProposal = (message: any) => {
    location.hash = '0x' + message;
    console.log('useWebhookProposal() called');
    const url = WEBHOOK_PROPOSALS_ALL;
    const messageSuccess = SUCCESS_PROPOSAL_DISCORD;
    const header = '**Zrrtt. Zrrrop.**';
    const title = `New Proposal Submitted`;
    const description = `Proposal Summary goes here \n\n More Information`;
    const footerText =
      format(Date.now(), 'dd-MMM-yyyy hh:mm aaa') +
      `\n ` +
      location.hash +
      `\n`;

    const messageOut = {
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

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(messageOut),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      console.log(
        'executed webhook to url: ' + url + ' with message: ' + messageOut
      );
    });
  };
  useWebhookProposal(message);
  return useToast({
    title: SUCCESS_PROPOSAL_DISCORD,
    description: 'Proposal submitted successfully',
    status: 'success',
    duration: 9000,
    isClosable: true
  });
}
