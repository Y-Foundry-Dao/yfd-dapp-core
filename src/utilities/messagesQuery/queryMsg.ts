import { useLCDClient } from '@terra-money/wallet-provider';

function ConnectLCDClient() {
  return useLCDClient();
}

const queryMsg = async (contractAddress: string, msgQuery: object) => {
  const lcd = ConnectLCDClient();
  try {
    if (contractAddress) {
      const queryResponse: any = await lcd.wasm.contractQuery(
        contractAddress,
        msgQuery
      );
      return queryResponse;
    }
  } catch (error: any) {
    if (
      error.response.data.message ===
      'cosmwasm_std::addresses::Addr not found: query wasm contract failed: invalid request'
    ) {
      // console.log({ addr: 'Contract Address Not Found' });
      return { addr: 'Contract Address Not Found' };
    }
  }
};

export default queryMsg;
