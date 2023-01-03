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
import { Divider, Text } from '@chakra-ui/react';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import {
  inputWhitelistTokenAddress,
  inputWhitelistTokenName,
  inputWhitelistTokenAssetType,
  inputWhitelistTokenisStable,
  inputWhitelistTokenOracleAddress,
  inputWhitelistTokenToUsd
} from 'recoil/input/atoms';
import txHashAtom from 'recoil/txHash/atom';
import ProposalSubmittedText from '../ProposalSubmittedText';
import InputWhitelistWalletAddress from '@inputs/whitelist/role/address';

function CreationFormWhitelistTokenAddress({ onClose }: any) {
  const { handleClickCreateProposalWhitelistTokenAddress } = useHandleClicks();
  const onSubmit = () => {
    handleClickCreateProposalWhitelistTokenAddress();
  };

  const whitelistTokenAddress = useRecoilValue(inputWhitelistTokenAddress);
  const whitelistTokenName = useRecoilValue(inputWhitelistTokenName);
  const whitelistTokenAssetType = useRecoilValue(inputWhitelistTokenAssetType);
  const whitelistTokenisStable = useRecoilValue(inputWhitelistTokenisStable);
  const whitelistTokenOracleAddress = useRecoilValue(
    inputWhitelistTokenOracleAddress
  );
  const whitelistTokenToUsd = useRecoilValue(inputWhitelistTokenToUsd);

  const txHash = useRecoilValue(txHashAtom);

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="address" title="Token Whitelist Info">
            <FormLayout>
              {/* <InputWhitelistTokenAddress /> */}
              {/* <InputAddressWhitelistName />
              <InputAddressWhitelistImageLink /> */}
              <NextButton />
            </FormLayout>
          </FormStep>
          <FormStep name="role" title="Address Whitelist Role Selection">
            <FormLayout>
              {/* <InputAddressWhitelistRoles /> */}
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="socials" title="Address Whitelist Social Media">
            <FormLayout>
              {/* <InputGithub />
              <InputKeybase />
              <InputTelegram />
              <InputTwitter />
              <InputUrl /> */}
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="emergency" title="Emergency Info">
            <FormLayout>
              {/* <InputGithub />
              <InputKeybase />
              <InputTelegram />
              <InputTwitter />
              <InputUrl /> */}
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Proposal Info
                </Text>
                <Divider />
                <Property label="Address" value={whitelistTokenAddress} />
                <Property label="Name" value={whitelistTokenName} />
                <Property label="Image" value={whitelistTokenAssetType} />
                <Property label="Github" value={whitelistTokenisStable} />
                <Property label="Keybase" value={whitelistTokenOracleAddress} />
                <Property label="Telegram" value={whitelistTokenToUsd} />
                <Divider />
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

export default CreationFormWhitelistTokenAddress;
