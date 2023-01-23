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
    const queryResponse = await lcd.wasm.contractQuery(
      contractAddress,
      msgQuery
    );
    return queryResponse as T;
  } catch (error: any) {
    console.log(error);
  }
  return undefined as T;
};

export default queryMsg;
