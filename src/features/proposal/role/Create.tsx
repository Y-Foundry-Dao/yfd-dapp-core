import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import {
  ButtonGroup,
  FormLayout,
  FormStep,
  FormStepper,
  ListHeader,
  Loader,
  NextButton,
  PrevButton,
  Property,
  PropertyList,
  StepForm,
  StepperCompleted
} from '@saas-ui/react';
import {
  Divider,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Switch,
  useBoolean,
  Heading
} from '@chakra-ui/react';

import useTx from '@hooks/useTx';
import useMsg from '@hooks/useMsg';

import txHashAtom from 'recoil/txHash/atom';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';

import ProposalSubmittedText from '../create/SubmittedText';

import msgExecuteSend from '@utilities/messagesExecute/yfd/msgExecuteSend';
import { SUCCESS_CREATE_PROPOSAL } from '@utilities/variables/toastMessages';
import msgCreateProposalWhitelistRole from '@utilities/messagesExecute/forge/msgCreateProposalWhitelistRole';

function FormRoleProposalCreation({ onClose }: any) {
  const connectedWallet = useConnectedWallet();
  const contractForge = useRecoilValue(currentContractForgeAtom);
  const txHash = useRecoilValue(txHashAtom);
  const [isEmergency, setIsEmergency] = useState(false);
  const [justification, setJustification] = useState('');
  // details
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [image_link, setImageLink] = useState('');
  // roles
  const [isDeveloper, setIsDeveloper] = useState<boolean>(false);
  const [isBooster, setIsBooster] = useState<boolean>(false);
  const [isStrategist, setIsStrategist] = useState<boolean>(false);
  const [isProposer, setIsProposer] = useState<boolean>(false);
  const [isPayee, setIsPayee] = useState<boolean>(false);

  // links
  const [github, setGithub] = useState('');
  const [keybase, setKeybase] = useState('');
  const [twitter, setTwitter] = useState('');
  const [telegram, setTelegram] = useState('');
  const [url, setUrl] = useState('');

  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  const handleClickCreateRoleProposal = async () => {
    if (connectedWallet) {
      const roles: Array<string> = [];
      if (isDeveloper) {
        roles.push('developer');
      }
      if (isBooster) {
        roles.push('booster');
      }
      if (isStrategist) {
        roles.push('strategist');
      }
      if (isProposer) {
        roles.push('proposer');
      }
      if (isPayee) {
        roles.push('payee');
      }
      const msgCreateProposal = msgCreateProposalWhitelistRole(
        address,
        name,
        image_link,
        roles,
        github,
        keybase,
        telegram,
        twitter,
        url,
        isEmergency,
        justification
      );
      const tx = await executeMsg(contractForge, msgCreateProposal);
      console.log(
        'Proposal Message: ',
        msgCreateProposal,
        '\n\n TX Submission: ',
        tx
      );
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const onSubmit = () => {
    handleClickCreateRoleProposal();
  };

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="proposal" title="Role Whitelist Proposal Details">
            <FormLayout>
              <Input
                value={name}
                onChange={(event: any) => setName(event.target.value)}
                placeholder="Whitelisted Name"
              />
              <Input
                value={address}
                onChange={(event: any) => setAddress(event.target.value)}
                placeholder="Whitelisted Address"
              />
              <Input
                value={image_link}
                onChange={(event: any) => setImageLink(event.target.value)}
                placeholder="Whitelisted Image URL"
              />
              Emergency Proposal
              <Switch
                id="emergencyTextSwitch"
                size="lg"
                onChange={() => setIsEmergency(!isEmergency)}
                isChecked={isEmergency}
              />
              <InputGroup>
                <InputLeftAddon children="https://" />
                <Input
                  value={justification}
                  onChange={(event: any) =>
                    setJustification(event.target.value)
                  }
                  placeholder="Enter Justification URL"
                />
              </InputGroup>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="whitelistRoles" title="Whitelist Roles">
            <FormLayout>
              Developer
              <Switch
                id="developerRoleSwitch"
                size="lg"
                onChange={() => setIsDeveloper(!isDeveloper)}
                isChecked={isDeveloper}
              />
              Booster
              <Switch
                id="boosterRoleSwitch"
                size="lg"
                onChange={() => setIsBooster(!isBooster)}
                isChecked={isBooster}
              />
              Strategist
              <Switch
                id="strategistRoleSwitch"
                size="lg"
                onChange={() => setIsStrategist(!isStrategist)}
                isChecked={isStrategist}
              />
              Proposer : {isProposer ? 'true' : 'false'}
              <Switch
                id="proposerRoleSwitch"
                size="lg"
                onChange={() => setIsProposer(!isProposer)}
                isChecked={isProposer}
              />
              Payee
              <Switch
                id="payeeRoleSwitch"
                size="lg"
                onChange={() => setIsPayee(!isPayee)}
                isChecked={isPayee}
              />
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep
            name="whitelistRoleLinks"
            title="Whitelist Address Social Links"
          >
            <FormLayout>
              <InputGroup>
                <InputLeftAddon width="20%" children="Github" />
                <Input
                  id="github"
                  value={github}
                  onChange={(event) => setGithub(event.target.value)}
                  placeholder="https://github.com/"
                  width="100%"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="Keybase" />
                <Input
                  id="keybase"
                  value={keybase}
                  onChange={(event) => setKeybase(event.target.value)}
                  placeholder="https://keybase.io/"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="Telegram" />
                <Input
                  id="telegram"
                  value={telegram}
                  onChange={(event) => setTelegram(event.target.value)}
                  placeholder="https://t.me/"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="Twitter" />
                <Input
                  id="twitter"
                  value={twitter}
                  onChange={(event) => setTwitter(event.target.value)}
                  placeholder="https://twitter.com/"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="Custom URL" />
                <Input
                  id="url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder="https://"
                />
              </InputGroup>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm the information below is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Text Proposal Info
                </Text>
                <Divider />
                <br />
                <Heading size="sm">Emergency Details</Heading>
                <Property
                  label="Emergency Proposal?"
                  value={isEmergency ? 'yes' : 'no'}
                />
                <Property label="Justification URL" value={justification} />
                <Divider />
                <br />
                <Heading size="sm">Whitelisted Details</Heading>
                <Property label="Name" value={name} />
                <Property label="Address" value={address} />
                <Property label="Image Link" value={image_link} />
                <img src={image_link} alt="image link" width={100} />
                <Divider />
                <br />
                <Heading size="sm">Whitelisted Roles</Heading>
                <Property
                  label="Developer"
                  value={isDeveloper ? 'yes' : 'no'}
                />
                <Property label="Booster" value={isBooster ? 'yes' : 'no'} />
                <Property
                  label="Strategist"
                  value={isStrategist ? 'yes' : 'no'}
                />
                <Property label="Proposer" value={isProposer ? 'yes' : 'no'} />
                <Property label="Payee" value={isPayee ? 'yes' : 'no'} />
                <Divider />
                <br />
                <Heading size="sm">Social Links</Heading>
                <Property label="Github" value={github} />
                <Property label="Keybase" value={keybase} />
                <Property label="Telegram" value={telegram} />
                <Property label="Twitter" value={twitter} />
                <Property label="Custom URL" value={url} />
              </PropertyList>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>

          <StepperCompleted>
            {txHash !== '' ? (
              <ProposalSubmittedText onClose={onClose} />
            ) : (
              <Loader>Submitting proposal, just a moment...</Loader>
            )}
          </StepperCompleted>
        </FormStepper>
      </FormLayout>
    </StepForm>
  );
}

export default FormRoleProposalCreation;
