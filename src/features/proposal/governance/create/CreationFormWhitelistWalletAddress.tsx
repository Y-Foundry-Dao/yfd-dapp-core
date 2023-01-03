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
  inputWhitelistWalletAddress,
  inputWhitelistWalletAddressName,
  inputWhitelistWalletAddressUrl,
  inputWhitelistWalletAddressTwitter,
  inputWhitelistWalletAddressKeybase,
  inputWhitelistWalletAddressTelegram,
  inputWhitelistWalletAddressGithub,
  inputWhitelistWalletAddressImageLink,
  inputWhitelistWalletAddressRoles
} from 'recoil/input/atoms';
import txHashAtom from 'recoil/txHash/atom';
import ProposalSubmittedText from '../../create/SubmittedText';
import InputWhitelistWalletAddress from '@inputs/whitelist/role/address';

function CreationFormWhitelistWalletAddress({ onClose }: any) {
  const { handleClickCreateProposalWhitelistWalletAddress } = useHandleClicks();
  const onSubmit = () => {
    handleClickCreateProposalWhitelistWalletAddress();
  };

  const whitelistWalletAddress = useRecoilValue(inputWhitelistWalletAddress);
  const whitelistWalletAddressName = useRecoilValue(
    inputWhitelistWalletAddressName
  );
  const whitelistWalletAddressUrl = useRecoilValue(
    inputWhitelistWalletAddressUrl
  );
  const whitelistWalletAddressTwitter = useRecoilValue(
    inputWhitelistWalletAddressTwitter
  );
  const whitelistWalletAddressKeybase = useRecoilValue(
    inputWhitelistWalletAddressKeybase
  );
  const whitelistWalletAddressTelegram = useRecoilValue(
    inputWhitelistWalletAddressTelegram
  );
  const whitelistWalletAddressGithub = useRecoilValue(
    inputWhitelistWalletAddressGithub
  );
  const whitelistWalletAddressImageLink = useRecoilValue(
    inputWhitelistWalletAddressImageLink
  );
  const whitelistWalletAddressRoles = useRecoilValue(
    inputWhitelistWalletAddressRoles
  );

  const txHash = useRecoilValue(txHashAtom);

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="address" title="Address Whitelist Info">
            <FormLayout>
              <InputWhitelistWalletAddress />
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
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Proposal Info
                </Text>
                <Divider />
                <Property label="Address" value={whitelistWalletAddress} />
                <Property label="Name" value={whitelistWalletAddressName} />
                <Property
                  label="Image"
                  value={whitelistWalletAddressImageLink}
                />
                <Property label="Github" value={whitelistWalletAddressGithub} />
                <Property
                  label="Keybase"
                  value={whitelistWalletAddressKeybase}
                />
                <Property
                  label="Telegram"
                  value={whitelistWalletAddressTelegram}
                />
                <Property
                  label="Twitter"
                  value={whitelistWalletAddressTwitter}
                />
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

export default CreationFormWhitelistWalletAddress;
