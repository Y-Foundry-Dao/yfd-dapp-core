import { MyLCD } from '@utilities/MyValues';
const queryMsg = async <T>(
  contractAddress: string,
  msgQuery: object
): Promise<T> => {
  const lcd = MyLCD();
  try {
    const queryResponse = await lcd.wasm.contractQuery(
      contractAddress,
      msgQuery
    );
    return queryResponse as T;
  } catch (error: any) {
    console.error(error);
  }
  return undefined as T;
};

export default queryMsg;
