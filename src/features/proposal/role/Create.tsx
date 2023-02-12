import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { bech32 } from 'bech32';
import {
  ButtonGroup,
  FormLayout,
  FormStep,
  FormStepper,
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
  SimpleGrid,
  Box,
  Heading,
  Flex,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon
} from '@chakra-ui/react';

import useTx from '@hooks/useTx';
import useMsg from '@hooks/useMsg';

import txHashAtom from 'recoil/txHash/atom';
import { currentContractForgeAtom } from '@recoil/chainInfo/atoms';

import ProposalSubmittedText from '../create/SubmittedText';

import msgExecuteSend from '@utilities/messagesExecute/yfd/msgExecuteSend';
import { SUCCESS_CREATE_PROPOSAL } from '@utilities/variables/toastMessages';
import msgCreateProposalWhitelistRole from '@utilities/messagesExecute/forge/msgCreateProposalWhitelistRole';
import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';
import {
  addressCanProposeEmergencyAtom,
  addressConnectedAtom
} from '@recoil/connected/address/atoms';
import { profileState } from '@recoil/profile/atoms';
import {
  REGEX_GITHUB,
  REGEX_TELEGRAM,
  REGEX_TWITTER,
  REGEX_KEYBASE,
  PATH_PROFILE_PFP_DEFAULT,
  PATH_PROFILE_PFP,
  PATH_PROFILE_PFP_SUFFIX
} from '@utilities/variables';

function FormRoleProposalCreation({ onClose }: any) {
  const connectedWallet = useConnectedWallet();
  const contractForge = useRecoilValue(currentContractForgeAtom);
  const txHash = useRecoilValue(txHashAtom);
  const addressConnected = useRecoilValue(addressConnectedAtom);
  const addressCanProposeEmergency = useRecoilValue(
    addressCanProposeEmergencyAtom
  );

  type platforms = {
    github: string;
    twitter: string;
    telegram: string;
    keybase: string;
  };
  // profile info
  const profile = useRecoilValue(profileState);
  const platforms: any = profile.platforms;
  console.log(platforms);
  let whitelistName = '';

  if (profile.name.length > 0) {
    whitelistName = profile.name.toString();
  }
  let whitelistImage = PATH_PROFILE_PFP_DEFAULT;
  if (profile.address.length > 0) {
    whitelistImage =
      PATH_PROFILE_PFP + profile.address.toString() + PATH_PROFILE_PFP_SUFFIX;
  }

  const whitelistGithub = platforms.github.toString();
  const whitelistTwitter = platforms.twitter.toString();
  const whitelistTelegram = platforms.telegram.toString();
  const whitelistKeybase = platforms.keybase.toString();

  // emergency
  const [isEmergency, setIsEmergency] = useState(false);
  const [justification, setJustification] = useState('');
  // details
  const [address, setAddress] = useState('');
  const [addressValid, setAddressValid] = useState<boolean>(false);
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
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const onSubmit = () => {
    handleClickCreateRoleProposal();
  };

  function addressValidate(value: any) {
    console.log('trying to validate address', value);
    setAddress(value);
    try {
      bech32.decode(value);
      setAddressValid(true);
    } catch (err) {
      setAddressValid(false);
    }
  }

  const addressInvalidMessage = () => {
    if (address.length > 0) {
      return (
        <>
          <span className={styles.inputInvalid}>Invalid Address</span>
        </>
      );
    } else {
      return '';
    }
  };

  const contentEmergency = () => {
    return (
      <>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.inputInvalid}>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className={styles.inputInvalid}
                >
                  Declare this Proposal an Emergency
                </Box>
                <Box>
                  <Switch
                    id="emergencyTextSwitch"
                    size="md"
                    onChange={() => setIsEmergency(!isEmergency)}
                    isChecked={isEmergency}
                  />
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
                <Text>
                  Emergency proposals are used to quickly act on a situation.
                  Emergency Proposals execute immediately after reaching quorum
                  with a majority affirming vote.
                </Text>
                <br />
              </Box>
              <Box>
                {isEmergency ? (
                  <>
                    <span
                      className={
                        'material-symbols-outlined ' + styles.inputEmergency
                      }
                    >
                      {Icons.checkmark}
                    </span>{' '}
                    <span className={styles.inputEmergency}>
                      This proposal is an Emergency.
                    </span>
                    <Box>
                      <br />
                      <Text>
                        Provide justification for declaring an emergency below:
                      </Text>
                    </Box>
                    <Box>
                      <InputGroup>
                        <InputLeftAddon children="Justification" />
                        <Input
                          value={justification}
                          onChange={(event: any) =>
                            setJustification(event.target.value)
                          }
                          placeholder="Brief Explaination or link to location for discussion"
                          width="100%"
                        />
                      </InputGroup>
                    </Box>
                  </>
                ) : (
                  <>This proposal is NOT an Emergency.</>
                )}{' '}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="proposal" title="Details">
            <FormLayout>
              <Box>
                <span>
                  Name{' '}
                  <span
                    title={whitelistName}
                    className={'material-symbols-outlined ' + styles.iconPaste}
                    onClick={() => {
                      setName(whitelistName);
                    }}
                  >
                    {Icons.profile_paste}
                  </span>
                </span>
                <Input
                  value={name}
                  onChange={(event: any) => setName(event.target.value)}
                  placeholder="Name"
                />
              </Box>
              <Box>
                <span>
                  Address{' '}
                  <span
                    title={addressConnected}
                    className={'material-symbols-outlined ' + styles.iconPaste}
                    onClick={() => {
                      setAddress(addressConnected);
                      addressValidate(addressConnected);
                    }}
                  >
                    {Icons.profile_paste}
                  </span>
                </span>
                <Input
                  value={address}
                  onChange={(event: any) => addressValidate(event.target.value)}
                  placeholder="bech32 Wallet or Contract Address"
                  className={
                    addressValid ? styles.inputValid : styles.inputInvalid
                  }
                />
                {addressValid ? (
                  <span className={styles.inputValid}>Address is Valid</span>
                ) : (
                  addressInvalidMessage()
                )}
              </Box>
              <Box>
                <span>
                  Image for Whitelisted Address{' '}
                  <span
                    title={whitelistImage}
                    className={'material-symbols-outlined ' + styles.iconPaste}
                    onClick={() => {
                      setImageLink(whitelistImage);
                    }}
                  >
                    <img src={whitelistImage} width="25px" />
                  </span>
                </span>
                <Input
                  type="url"
                  pattern="https://.*|http://.*|ipfs://.*"
                  value={image_link}
                  onChange={(event: any) => setImageLink(event.target.value)}
                  placeholder="Whitelisted Image URL"
                />
              </Box>
            </FormLayout>
          </FormStep>
          <FormStep name="whitelistRoles" title="Roles">
            <FormLayout>
              <SimpleGrid columns={2} spacing={5}>
                <Box>
                  {isDeveloper ? (
                    <>
                      <span
                        className={
                          'material-symbols-outlined ' + styles.iconConfirm
                        }
                      >
                        {Icons.person_confirm}
                      </span>{' '}
                      Builder
                    </>
                  ) : (
                    <>
                      <span
                        className={'material-symbols-outlined ' + styles.icon}
                      >
                        {Icons.person}
                      </span>{' '}
                      Builder
                    </>
                  )}{' '}
                </Box>
                <Box>
                  <Switch
                    id="developerRoleSwitch"
                    size="md"
                    onChange={() => setIsDeveloper(!isDeveloper)}
                    isChecked={isDeveloper}
                  />
                </Box>
                <Box>
                  {isBooster ? (
                    <>
                      <span
                        className={
                          'material-symbols-outlined ' + styles.iconConfirm
                        }
                      >
                        {Icons.person_confirm}
                      </span>{' '}
                      Supporter
                    </>
                  ) : (
                    <>
                      <span
                        className={'material-symbols-outlined ' + styles.icon}
                      >
                        {Icons.person}
                      </span>{' '}
                      Supporter
                    </>
                  )}{' '}
                </Box>
                <Box>
                  <Switch
                    id="boosterRoleSwitch"
                    size="md"
                    onChange={() => setIsBooster(!isBooster)}
                    isChecked={isBooster}
                  />
                </Box>
                <Box>
                  {isStrategist ? (
                    <>
                      <span
                        className={
                          'material-symbols-outlined ' + styles.iconConfirm
                        }
                      >
                        {Icons.person_confirm}
                      </span>{' '}
                      Strategist
                    </>
                  ) : (
                    <>
                      <span
                        className={'material-symbols-outlined ' + styles.icon}
                      >
                        {Icons.person}
                      </span>{' '}
                      Strategist
                    </>
                  )}{' '}
                </Box>
                <Box>
                  <Switch
                    id="strategistRoleSwitch"
                    size="md"
                    onChange={() => setIsStrategist(!isStrategist)}
                    isChecked={isStrategist}
                  />
                </Box>
                <Box>
                  {isProposer ? (
                    <>
                      <span
                        className={
                          'material-symbols-outlined ' + styles.iconConfirm
                        }
                      >
                        {Icons.person_confirm}
                      </span>{' '}
                      Proposer
                    </>
                  ) : (
                    <>
                      <span
                        className={'material-symbols-outlined ' + styles.icon}
                      >
                        {Icons.person}
                      </span>{' '}
                      Proposer
                    </>
                  )}{' '}
                </Box>
                <Box>
                  <Switch
                    id="proposerRoleSwitch"
                    size="md"
                    onChange={() => setIsProposer(!isProposer)}
                    isChecked={isProposer}
                  />
                </Box>
                <Box>
                  {isPayee ? (
                    <>
                      <span
                        className={
                          'material-symbols-outlined ' + styles.iconConfirm
                        }
                      >
                        {Icons.person_confirm}
                      </span>{' '}
                      Payee
                    </>
                  ) : (
                    <>
                      <span
                        className={'material-symbols-outlined ' + styles.icon}
                      >
                        {Icons.person}
                      </span>{' '}
                      Payee
                    </>
                  )}{' '}
                </Box>
                <Box>
                  <Switch
                    id="payeeRoleSwitch"
                    size="md"
                    onChange={() => setIsPayee(!isPayee)}
                    isChecked={isPayee}
                  />
                </Box>
              </SimpleGrid>
            </FormLayout>
          </FormStep>
          <FormStep name="whitelistRoleLinks" title="Idenity/Social">
            <FormLayout>
              <InputGroup>
                <Flex width="100%">
                  <Box width="20%">
                    <InputLeftAddon width="100%" children="github.com/" />
                  </Box>
                  <Box width="75%">
                    <Input
                      id="github"
                      type="text"
                      value={github}
                      onChange={(event) => setGithub(event.target.value)}
                      placeholder="Github Username"
                      pattern={REGEX_GITHUB.toString()}
                      width="100%"
                      className={styles.inputUsername}
                    />
                  </Box>
                  <Box>
                    <span
                      title={whitelistGithub}
                      className={
                        'material-symbols-outlined ' + styles.iconPaste
                      }
                      onClick={() => {
                        setGithub(whitelistGithub);
                      }}
                    >
                      {Icons.profile_paste}
                    </span>
                  </Box>
                </Flex>
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="keybase.io/" />
                <Input
                  id="keybase"
                  type="text"
                  value={keybase}
                  onChange={(event) => setKeybase(event.target.value)}
                  placeholder="Keybase Username"
                  pattern={REGEX_KEYBASE.toString()}
                  className={styles.inputUsername}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="t.me/" />
                <Input
                  id="telegram"
                  type="text"
                  value={telegram}
                  onChange={(event) => setTelegram(event.target.value)}
                  placeholder="Telegram Username"
                  pattern={REGEX_TELEGRAM.toString()}
                  className={styles.inputUsername}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="twitter.com/" />
                <Input
                  id="twitter"
                  type="text"
                  value={twitter}
                  onChange={(event) => setTwitter(event.target.value)}
                  placeholder="Twitter Username"
                  pattern={REGEX_TWITTER.toString()}
                  className={styles.inputUsername}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon width="20%" children="Personal URL" />
                <Input
                  id="url"
                  type="url"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder="https:// or ipfs://"
                  pattern="https://.*|ipfs://.*"
                  className={styles.inputUrl}
                />
              </InputGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Divider />
              <Heading size="md">Address Role Whitelist Proposal</Heading>
              <PropertyList>
                <Heading size="sm">Address Details</Heading>
                <Divider />
                <Property label="Name" value={name} />
                <Property label="Address" value={address} />
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <Property label="Image" />
                  </Box>
                  <Box>
                    <a href={image_link} target="_blank" rel="noreferrer">
                      <img
                        src={image_link}
                        title={image_link}
                        alt={image_link}
                        width={50}
                      />
                    </a>
                  </Box>
                </SimpleGrid>
                <br />
                <Heading size="sm">Roles Assigned</Heading>
                <Divider />
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
                <br />
                <Heading size="sm">Social Links</Heading>
                <Divider />
                <Property label="Github" value={github} />
                <Property label="Keybase" value={keybase} />
                <Property label="Telegram" value={telegram} />
                <Property label="Twitter" value={twitter} />
                <Property label="Custom URL" value={url} />
              </PropertyList>
              {addressCanProposeEmergency ? contentEmergency() : ''}
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
        <ButtonGroup>
          <NextButton className={styles['buttonStandard']} />
          <PrevButton
            variant="unstyled"
            className={styles['buttonStandard-dark']}
          />
        </ButtonGroup>
      </FormLayout>
    </StepForm>
  );
}

export default FormRoleProposalCreation;
