import { format } from 'date-fns';
import { useLocation } from 'react-router';
import useTx from './useTx';

import { SUCCESS_PROPOSAL_DISCORD } from 'utilities/variables/toastMessages';
import { WEBHOOK_PROPOSALS_ALL } from 'utilities/variables/discord';

// all your imports at the top
const { toastSuccessful } = useTx();
const location = useLocation();

const useWebhookProposal = (message: string) => {
  // other custom hooks get called within this custom hook but outside of the functions in this file

  const url = WEBHOOK_PROPOSALS_ALL;
  const messageSuccess = SUCCESS_PROPOSAL_DISCORD;

  console.log('message received: ' + message);

  console.log('useWebhookProposal() called');

  const header = '**Zrrtt. Zrrrop.**';
  const title = `New Proposal Submitted`;
  const description = `Proposal Summary goes here \n\n More Information`;
  const footerText =
    format(Date.now(), 'dd-MMM-yyyy hh:mm aaa') + `\n ` + location.hash + `\n`;

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

  function sendToDiscord(message: any) {
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
  }

  return {
    sendToDiscord
  };
};

export default useWebhookProposal;
