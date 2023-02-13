import useMsg from 'hooks/useMsg';
import Base64 from 'utilities/base64';
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import msgExecuteSend from 'utilities/messagesExecute/yfd/msgExecuteSend';
import {
  inputStakeYFD,
  inputWhitelistWalletAddress,
  inputWhitelistWalletAddressName,
  inputWhitelistWalletAddressUrl,
  inputWhitelistWalletAddressTwitter,
  inputWhitelistWalletAddressKeybase,
  inputWhitelistWalletAddressTelegram,
  inputWhitelistWalletAddressGithub,
  inputWhitelistWalletAddressImageLink,
  inputWhitelistWalletAddressRoles,
  inputIsEmergency,
  inputJustificationLink,
  inputWhitelistTokenAddress,
  inputWhitelistTokenName,
  inputWhitelistTokenAssetType,
  inputWhitelistTokenisStable,
  inputWhitelistTokenOracleAddress,
  inputWhitelistTokenToUsd
} from 'recoil/input/atoms';
import convertToBase from 'utilities/converters/convertToBase';
import msgVoteAffirm from 'utilities/messagesExecute/vote/msgVoteAffirm';
import msgVoteDeny from 'utilities/messagesExecute/vote/msgVoteDeny';
import msgVoteAbstain from 'utilities/messagesExecute/vote/msgVoteAbstain';
import msgVoteDenyWithPenalty from 'utilities/messagesExecute/vote/msgVoteDenyWithPenalty';
import txHashAtom from 'recoil/txHash/atom';
import {
  SUCCESS_FINALIZED,
  SUCCESS_FUND_PROPOSAL,
  SUCCESS_STAKE,
  SUCCESS_VOTE
} from 'utilities/variables/toastMessages';
import useTx from './useTx';
import msgCreateProposalWhitelistRole from '@utilities/messagesExecute/forge/msgCreateProposalWhitelistRole';
import msgCreateProposalWhitelistTokenAddress from '@utilities/messagesExecute/forge/msgCreateProposalWhitelistToken';
import msgCreateProposalParameter from 'utilities/messagesExecute/forge/msgCreateProposalParameter';
import msgCreateProposalText from 'utilities/messagesExecute/forge/msgCreateProposalText';
import msgCreateProposalMessage from 'utilities/messagesExecute/forge/msgCreateProposalMessage';
import msgCreateProposalLiquidateVault from 'utilities/messagesExecute/forge/msgCreateProposalLiquidateVault';
import msgCreateProposalStopVaultProposal from 'utilities/messagesExecute/forge/msgCreateProposalStopVaultProposal';
import msgCreateProposalVaultMigrate from 'utilities/messagesExecute/forge/msgCreateProposalVaultMigrate';
import {
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import { CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MINIMUM } from '@utilities/variables';
import msgClaimYFD from '@utilities/messagesExecute/forge/msgClaimYFD';
import {
  selectMyFYFD,
  selectMyYFD,
  selectMyYFDLocked
} from '@recoil/connected/balance/selectors';

const useHandleClicks = () => {
  const refreshFYFD = useRecoilRefresher_UNSTABLE(selectMyFYFD);
  const refreshYFD = useRecoilRefresher_UNSTABLE(selectMyYFD);
  const refreshYFDLocked = useRecoilRefresher_UNSTABLE(selectMyYFDLocked);
  const { executeMsg } = useMsg();
  const { toastSuccessful, toastError } = useTx();
  const connectedWallet = useConnectedWallet();
  const contractForge = useRecoilValue(currentContractForgeAtom);
  const contractGovToken = useRecoilValue(currentContractGovTokenAtom);

  // used to reset the input fields after a successful transaction
  const setAmountStakeYFD = useSetRecoilState(inputStakeYFD);

  const isEmergency = useRecoilValue(inputIsEmergency);
  const justificationLink = useRecoilValue(inputJustificationLink);

  // Pulling in Recoil Values for Address Whitelist
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

  // Pulling in Recoil Values for Token Whitelist
  const whitelistTokenAddress = useRecoilValue(inputWhitelistTokenAddress);
  const whitelistTokenName = useRecoilValue(inputWhitelistTokenName);
  const whitelistTokenAssetType = useRecoilValue(inputWhitelistTokenAssetType);
  const whitelistTokenisStable = useRecoilValue(inputWhitelistTokenisStable);
  const whitelistTokenOracleAddress = useRecoilValue(
    inputWhitelistTokenOracleAddress
  );
  const whitelistTokenToUsd = useRecoilValue(inputWhitelistTokenToUsd);

  const handleClickStakeYFD = async (amount: number, duration: number) => {
    if (!connectedWallet) {
      const e = new Error('No connected wallet');
      toastError(e);
      return;
    }

    if (amount <= 0) {
      const e = new Error('Amount must be greater than 0');
      toastError(e);
      return;
    }

    if (duration < CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MINIMUM) {
      const e = new Error(
        `Duration ` +
          duration +
          ` must be greater than ${CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MINIMUM} blocks`
      );
      toastError(e);
      return;
    }

    // parameter is stake lock duration and set to maximum time
    const msgToEncode = msgEncodedStake(duration);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgStakeYFDToken = msgStakeYFD(
      contractForge,
      convertToBase(amount),
      encodedMessage
    );
    // YFD will always be staked to the YFD contract.
    const tx = await executeMsg(contractGovToken, msgStakeYFDToken);
    toastSuccessful(tx, SUCCESS_STAKE);
    setAmountStakeYFD(0);
    return;
  };

  const handleClickClaimYFD = async (idx: string) => {
    if (!connectedWallet) {
      const e = new Error('No connected wallet');
      toastError(e);
      return;
    }

    const tx = await executeMsg(contractForge, msgClaimYFD(idx));
    toastSuccessful(tx, SUCCESS_STAKE);
    refreshYFD();
    refreshYFDLocked();
    console.log('refreshing YFD');
    return;
  };

  const handleClickCreateProposalWhitelistRole = async () => {
    const tx = await executeMsg(
      contractForge,
      msgCreateProposalWhitelistRole(
        whitelistWalletAddress,
        whitelistWalletAddressName,
        whitelistWalletAddressImageLink,
        whitelistWalletAddressRoles,
        whitelistWalletAddressGithub,
        whitelistWalletAddressKeybase,
        whitelistWalletAddressTelegram,
        whitelistWalletAddressTwitter,
        whitelistWalletAddressUrl,
        isEmergency,
        justificationLink
      )
    );

    console.log(tx);
    // toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
  };

  const handleClickCreateProposalWhitelistTokenAddress = async () => {
    const tx = await executeMsg(
      contractForge,
      msgCreateProposalWhitelistTokenAddress(
        whitelistTokenAddress,
        whitelistTokenName,
        whitelistTokenAssetType,
        whitelistTokenisStable,
        whitelistTokenOracleAddress,
        whitelistTokenToUsd,
        isEmergency,
        justificationLink
      )
    );

    console.log(tx);
    // toastSuccessful(tx, SUCCESS_CREATE_PROPOSAL);
  };

  const handleClickFundProposal = async (
    proposalContract: any,
    inputFundingAmount: any
  ) => {
    const msgFundProposal = msgExecuteSend(
      proposalContract,
      'eyJzdGFrZSI6e319',
      convertToBase(inputFundingAmount)
    );
    const tx = await executeMsg(contractGovToken, msgFundProposal);
    toastSuccessful(tx, SUCCESS_FUND_PROPOSAL);
  };

  const handleClickVoteAffirm = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAffirm(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteDeny = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDeny(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteAbstain = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteAbstain(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickVoteDenyWithPenalty = async (
    contract: any,
    inputVoteTokenAmount: any
  ) => {
    if (connectedWallet) {
      const tx = await executeMsg(
        contract,
        msgVoteDenyWithPenalty(convertToBase(inputVoteTokenAmount))
      );
      toastSuccessful(tx, SUCCESS_VOTE);
    }
  };

  const handleClickFinalizeEmergency = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(contractForge, {
        finalize_emergency: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  const handleClickFinalizeProposal = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(contractForge, {
        finalize_proposal: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  const handleClickFinalizeVaultProposal = async (index: any) => {
    if (connectedWallet) {
      const tx = await executeMsg(contractForge, {
        finalize_vault_proposal: { idx: index }
      });
      toastSuccessful(tx, SUCCESS_FINALIZED);
    }
  };

  return {
    handleClickStakeYFD,
    handleClickClaimYFD,
    // handleClickCreateVaultProposal,
    handleClickFundProposal,
    handleClickVoteAffirm,
    handleClickVoteDeny,
    handleClickVoteAbstain,
    handleClickVoteDenyWithPenalty,
    handleClickFinalizeEmergency,
    handleClickFinalizeProposal,
    handleClickFinalizeVaultProposal,
    // handleClickCreateProposalWhitelistRole,
    handleClickCreateProposalWhitelistTokenAddress
  };
};

export default useHandleClicks;
