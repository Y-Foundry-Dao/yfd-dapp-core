import { Form, FormLayout, Field, SubmitButton } from '@saas-ui/react';
import { Select } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { format } from 'date-fns';
import {
  inputFeedbackName,
  inputFeedbackHandle,
  inputFeedbackMethod,
  inputFeedbackDesc
} from 'recoil/input/feedback/atoms';
import useHandleInputsFeedback from 'hooks/handleInput/useFeedback';
import { SUCCESS_FEEDBACK_DISCORD } from 'utilities/variables/toastMessages';
import useTx from 'hooks/useTx';
import { FEEDBACK_WEBHOOK } from 'utilities/variables/discord';
import { useConnectedWallet } from '@terra-money/wallet-provider';

export default function FeedbackForm({ onClose }: any) {
  const feedbackName: string = useRecoilValue(inputFeedbackName);
  const feedbackHandle: string = useRecoilValue(inputFeedbackHandle);
  const feedbackMethod: string = useRecoilValue(inputFeedbackMethod);
  const feedbackDesc: string = useRecoilValue(inputFeedbackDesc);
  const connectedWallet: any = useConnectedWallet();
  const {
    handleInputFeedbackName,
    handleInputFeedbackHandle,
    handleInputFeedbackMethod,
    handleInputFeedbackDesc
  } = useHandleInputsFeedback();

  const { toastSuccessful } = useTx();

  const onSubmit = async () => {
    const msgContent = `**${feedbackHandle}** from ${feedbackMethod}\n${connectedWallet.walletAddress}\n\n ${feedbackDesc}`;
    const message = {
      content: '**Beep. Boop.**',
      embeds: [
        {
          title: feedbackName,
          description: msgContent,
          footer: {
            text:
              format(Date.now(), 'dd-MMM-yyyy hh:mm aaa') +
              `\n https://dapp-test.yfoundry.io/\n`
          }
        }
      ]
    };

    fetch(FEEDBACK_WEBHOOK, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res: any) => {
      console.log('Feedback Sent to Discord');
      toastSuccessful('', SUCCESS_FEEDBACK_DISCORD);
      onClose();
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        <Field
          name="feedbackName"
          value={feedbackName}
          onChange={handleInputFeedbackName}
          type="text"
          rules={{ required: false }}
        />
        <Field
          name="feedbackHandle"
          onChange={handleInputFeedbackHandle}
          value={feedbackHandle}
          type="text"
          rules={{ required: false }}
        />
        <Select
          value={feedbackMethod}
          onChange={handleInputFeedbackMethod}
          placeholder="Type of Account"
        >
          <option value="Twitter">Twitter</option>
          <option value="Telegram">Telegram</option>
          <option value="Email">Email</option>
          <option value="Discord">Discord</option>
          <option value="Keybase">Keybase</option>
        </Select>
        <Field
          name="feedbackDesc"
          onChange={handleInputFeedbackDesc}
          value={feedbackDesc}
          type="textarea"
          label="Description"
          placeholder="Provide your feedback here"
        />

        <SubmitButton disableIfUntouched>Submit Feedback</SubmitButton>
      </FormLayout>
    </Form>
  );
}
