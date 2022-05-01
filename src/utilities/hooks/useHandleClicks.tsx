import { useConnectedWallet } from '@terra-money/wallet-provider';
import { Coins } from '@terra-money/terra.js';
import useContractDGSF from './useContractDGSF';
import { AUST, MBTC, MBTC_UST } from 'utilities/variables';
import Base64 from 'utilities/base64';

const useHandleClicks = () => {
  const { executeMsg } = useContractDGSF();
  const connectedWallet: any = useConnectedWallet();

  const handleClickDepositDgsf = async (
    amount: number,
    contract: string,
    position: string
  ) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    const msgAddToPosition = {
      deposit: {
        loops: '4',
        asset: MBTC,
        asset_pair: MBTC_UST,
        collateral_ratio: '2.5',
        position_idx: position
      }
    };
    return await executeMsg(
      connectedWallet,
      contract,
      msgAddToPosition,
      amountInCoin
    );
  };

  const handleClickDepositMirror = async (
    amount: number,
    position: string,
    contract: string
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);

    const msgToEncode = `{
      "deposit": {
        "position_idx": "${position}",
        "collateral": {
          "amount": "${amountConverted}",
          "info": {
            "token": {
              "contract_addr": "${AUST}"
            }
          }
        }
      }
    }`;

    const encodedMessage = Base64.btoa(msgToEncode);
    const msgDepositMirror = {
      send: {
        msg: encodedMessage,
        amount: String(amountConverted),
        contract: contract
      }
    };
    return await executeMsg(connectedWallet, AUST, msgDepositMirror);
  };

  const handleClickRepayPosition = async (
    amount: number,
    position: string,
    contract: string
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);

    const msgToEncode = `{
      "burn": {
        "position_idx": "${position}"
      }
    }`;

    const encodedMessage = Base64.btoa(msgToEncode);

    const msgBurnMirror = {
      send: {
        msg: encodedMessage,
        amount: String(amountConverted),
        contract: contract
      }
    };
    return await executeMsg(connectedWallet, MBTC, msgBurnMirror);
  };

  const handleClickBorrowFromPosition = async (
    amount: number,
    contract: string,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgBorrowFromPosition = {
      mirror: {
        mint: {
          asset: {
            info: {
              token: {
                contract_addr: MBTC
              }
            },
            amount: String(amountInCoin)
          },
          position_idx: position
        }
      }
    };
    return await executeMsg(connectedWallet, contract, msgBorrowFromPosition);
  };

  const handleClickWithdrawFromPosition = async (
    amount: number,
    contract: string,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgWithdrawFromPosition = {
      mirror: {
        withdraw: {
          collateral: {
            info: {
              token: {
                contract_addr: AUST
              }
            },
            amount: String(amountInCoin)
          },
          position_idx: position
        }
      }
    };
    return await executeMsg(connectedWallet, contract, msgWithdrawFromPosition);
  };

  return {
    handleClickDepositMirror,
    handleClickRepayPosition,
    handleClickBorrowFromPosition,
    handleClickWithdrawFromPosition,
    handleClickDepositDgsf
  };
};

export default useHandleClicks;
