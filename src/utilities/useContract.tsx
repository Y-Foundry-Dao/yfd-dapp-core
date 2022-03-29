import { terra } from 'utilities/lcd';

interface Props {
  contract: string;
  msg: object;
}

export const useContract = async ({ contract, msg }: Props) => {
  try {
    const contractResponse: object = await terra.wasm.contractQuery(
      contract,
      msg
    );
    return contractResponse;
  } catch (error) {
    console.log(error);
  }
};
