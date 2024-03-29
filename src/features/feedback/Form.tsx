import { Form, FormLayout, Field, SubmitButton } from '@saas-ui/react';
import { Box, Flex, Select } from '@chakra-ui/react';
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
import { WEBHOOK_FEEDBACK } from 'utilities/variables/discord';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

import styles from '@scss/app.module.scss';
import { URL_DISCORD } from '@var/links';

export default function FeedbackForm({ onClose }: any) {
  const webhookUrl: any = WEBHOOK_FEEDBACK;
  const feedbackName: string = useRecoilValue(inputFeedbackName);
  const feedbackHandle: string = useRecoilValue(inputFeedbackHandle);
  const feedbackMethod: string = useRecoilValue(inputFeedbackMethod);
  const feedbackDesc: string = useRecoilValue(inputFeedbackDesc);
  const connectedWallet: string = useRecoilValue(addressConnectedAtom);
  const {
    handleInputFeedbackName,
    handleInputFeedbackHandle,
    handleInputFeedbackMethod,
    handleInputFeedbackDesc
  } = useHandleInputsFeedback();

  const { toastSuccessful } = useTx();

  const onSubmit = async () => {
    const msgContent = `**${feedbackHandle}** from ${feedbackMethod}\n${connectedWallet}\n\n ${feedbackDesc}`;
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

    fetch(webhookUrl, {
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
    <Form onSubmit={onSubmit} className={styles.feedbackSelect}>
      <FormLayout>
        <Box>
          Information provided is sent to a private support channel on the{' '}
          <a href={URL_DISCORD}>Y-Foundry Discord Server.</a>
        </Box>
        <Field
          name="feedbackName"
          placeholder="Name"
          value={feedbackName}
          onChange={handleInputFeedbackName}
          type="text"
          rules={{ required: false }}
        />
        <Flex>
          <Box width="100%">
            <Field
              width="90%"
              name="feedbackHandle"
              placeholder="Account"
              onChange={handleInputFeedbackHandle}
              value={feedbackHandle}
              type="text"
              rules={{ required: false }}
            />
          </Box>
          <Box width="80%">
            <Select
              value={feedbackMethod}
              onChange={handleInputFeedbackMethod}
              placeholder="Account Platform"
            >
              <option value="Twitter">Twitter</option>
              <option value="Telegram">Telegram</option>
              <option value="Email">Email</option>
              <option value="Discord">Discord</option>
              <option value="Keybase">Keybase</option>
            </Select>
          </Box>
        </Flex>
        <Field
          name="feedbackDesc"
          onChange={handleInputFeedbackDesc}
          value={feedbackDesc}
          type="textarea"
          placeholder="Provide your feedback here"
        />

        <SubmitButton className={styles.standard} disableIfUntouched>
          Submit Feedback
        </SubmitButton>
      </FormLayout>
    </Form>
  );
}
