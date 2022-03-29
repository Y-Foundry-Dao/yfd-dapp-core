import { terra } from './lcd';

export const contractTest = async () => {
  try {
    const contract = 'terra1vczcg64dm6aekryfyq9x09p26nn6k6xwzpwml7';
    const depositResponse: any = await terra.wasm.contractQuery(contract, {
      deposit: {
        loops: '3',
        asset: 'terra1csr22xvxs6r3gkjsl7pmjkmpt39mwjsrm0e2r8',
        asset_pair: 'terra134jl4dt20mqfryhnmhauryr754vuw7990jdell',
        collateral_ratio: '2.5'
      }
    });
    return await depositResponse;
  } catch (error) {
    console.log(error);
  }
};
