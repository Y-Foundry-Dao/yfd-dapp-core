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
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  extendTheme,
  Divider,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Switch,
  SimpleGrid,
  Box,
  Heading,
  Select,
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

import { SUCCESS_CREATE_PROPOSAL } from '@utilities/variables/toastMessages';
import styles from '@scss/app.module.scss';
import { Icons } from '@utilities/variables/icons';
import { addressCanProposeEmergencyAtom } from '@recoil/connected/address/atoms';
import msgCreateProposalTokenWhitelist from '@utilities/messagesExecute/forge/msgCreateProposalWhitelistToken';

function FormTokenProposalCreation({ onClose }: any) {
  const connectedWallet = useConnectedWallet();
  const contractForge = useRecoilValue(currentContractForgeAtom);
  const txHash = useRecoilValue(txHashAtom);
  const addressCanProposeEmergency = useRecoilValue(
    addressCanProposeEmergencyAtom
  );

  // emergency
  const [isEmergency, setIsEmergency] = useState(false);
  const [justification, setJustification] = useState('');
  // details
  const [addressToken, setAddressToken] = useState('');
  const [addressTokenValid, setAddressTokenValid] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [assetType, setAssetType] = useState('');
  const [addressOracle, setAddressOracle] = useState('');
  const [addressOracleValid, setAddressOracleValid] = useState<boolean>(false);
  const [tokenUSD, setTokenUSD] = useState('');
  // booleans
  const [isStable, setIsStable] = useState<boolean>(false);

  const { executeMsg } = useMsg();
  const { toastSuccessful } = useTx();

  const handleClickCreateTokenProposal = async () => {
    if (connectedWallet) {
      const msgCreateProposal = msgCreateProposalTokenWhitelist(
        addressToken,
        name,
        assetType,
        isStable,
        addressOracle,
        tokenUSD,
        isEmergency,
        justification
      );
      const tx = await executeMsg(contractForge, msgCreateProposal);
      toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
    }
  };

  const onSubmit = () => {
    handleClickCreateTokenProposal();
  };

  function addressTokenValidate(value: any) {
    console.log('trying to validate address', value);
    setAddressToken(value);
    try {
      bech32.decode(value);
      setAddressTokenValid(true);
    } catch (err) {
      setAddressTokenValid(false);
    }
  }

  function addressOracleValidate(value: any) {
    console.log('trying to validate oracle address', value);
    setAddressOracle(value);
    try {
      bech32.decode(value);
      setAddressOracleValid(true);
    } catch (err) {
      setAddressOracleValid(false);
    }
  }

  const addressTokenInvalidMessage = () => {
    if (addressToken.length > 0) {
      return (
        <>
          <p className={styles.inputInvalid}>Invalid Address</p>
        </>
      );
    } else {
      return '';
    }
  };

  const addressOracleInvalidMessage = () => {
    if (addressToken.length > 0) {
      return (
        <>
          <p className={styles.inputInvalid}>Invalid Address</p>
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
      <FormStepper orientation="vertical">
        <FormStep name="proposal" title="Overview">
          <FormControl>
            <FormLabel>
              Name
              <Input
                value={name}
                onChange={(event: any) => setName(event.target.value)}
                placeholder="Name"
                isRequired
              />
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Token Address
              <Input
                value={addressToken}
                onChange={(event: any) =>
                  addressTokenValidate(event.target.value)
                }
                placeholder="bech32 Wallet or Contract Address"
                className={
                  addressTokenValid ? styles.inputValid : styles.inputInvalid
                }
                isRequired
              />
              {addressTokenValid ? (
                <FormHelperText className={styles.inputValid}>
                  Address is Valid
                </FormHelperText>
              ) : (
                addressTokenInvalidMessage()
              )}
            </FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>
              Asset Type
              <Select
                placeholder="Select option"
                onChange={(event: any) => setAssetType(event.target.value)}
                isRequired
              >
                <option value="CW20">CW20</option>
                <option value="CW721">CW721</option>
                <option value="CW1155">CW1155</option>
                <option value="Native">Native</option>
              </Select>
            </FormLabel>
          </FormControl>
        </FormStep>
        <FormStep name="whitelistTokenExchange" title="Exchange">
          <FormLayout>
            <Divider />
            <SimpleGrid columns={2} spacing={5}>
              <FormControl>
                {isStable ? (
                  <>
                    <span
                      className={
                        'material-symbols-outlined ' + styles.iconConfirm
                      }
                    >
                      {Icons.money}
                    </span>{' '}
                    Stable Coin
                  </>
                ) : (
                  <>
                    <span
                      className={'material-symbols-outlined ' + styles.icon}
                    >
                      {Icons.money_disable}
                    </span>{' '}
                    Stable Coin
                  </>
                )}{' '}
              </FormControl>
              <FormControl>
                <Switch
                  id="stableCoinSwitch"
                  size="md"
                  onChange={() => setIsStable(!isStable)}
                  isChecked={isStable}
                />
              </FormControl>
            </SimpleGrid>
            <Divider />
            <FormControl>
              <FormLabel>
                Token to USD Exchange
                <NumberInput variant="primary">
                  <NumberInputField
                    value={tokenUSD}
                    onChange={(event: any) => setTokenUSD(event.target.value)}
                    placeholder="numeric value"
                    inputMode="decimal"
                  />
                  <FormHelperText>
                    USD Exchange Value of One Token
                  </FormHelperText>
                </NumberInput>
              </FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel>
                Oracle Address
                <Input
                  value={addressOracle}
                  onChange={(event: any) =>
                    addressOracleValidate(event.target.value)
                  }
                  placeholder="bech32 Wallet or Contract Address"
                  className={
                    addressOracleValid ? styles.inputValid : styles.inputInvalid
                  }
                />
                {addressOracleValid ? (
                  <p className={styles.inputValid}>Address is Valid</p>
                ) : (
                  addressOracleInvalidMessage()
                )}
              </FormLabel>
            </FormControl>
          </FormLayout>
        </FormStep>
        <FormStep name="confirm" title="Confirm">
          <FormLayout>
            <Divider />
            <Heading size="md">Token Whitelist Proposal</Heading>
            <PropertyList>
              <Heading size="sm">Token Details</Heading>
              <Divider />
              <Property label="Name" value={name} />
              <Property label="Address" value={addressToken} />
              <br />
              <Heading size="sm">Exchange Information</Heading>
              <Divider />
              <Property label="Stable Coin" value={isStable ? 'yes' : 'no'} />
              <Property label="Value to USD" value={'$ ' + tokenUSD} />
              <Property label="Oracle Address" value={addressOracle} />
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
    </StepForm>
  );
}

export default FormTokenProposalCreation;
