import { useLCDClient } from '@terra-money/wallet-provider';

function ConnectLCDClient() {
  return useLCDClient();
}

const queryMsg = async <T>(
  contractAddress: string,
  msgQuery: object
): Promise<T> => {
  const lcd = ConnectLCDClient();
  try {
    if (contractAddress) {
      const queryResponse = await lcd.wasm.contractQuery(
        contractAddress,
        msgQuery
      );
      return queryResponse as T;
    }
  } catch (error: any) {
    console.log('inside error in queryMsg function: ', error);
    if (
      error.response.data.message ===
      'cosmwasm_std::addresses::Addr not found: query wasm contract failed: invalid request'
    ) {
      // console.log({ addr: 'Contract Address Not Found' });
      return { addr: 'Contract Address Not Found' } as T;
    }
  }
  return undefined as T;
};

export default queryMsg;
