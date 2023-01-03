// the forge contract address
type ContractGovernance = { network: string; contract: string };
export const contractForge: ContractGovernance[] = [
  {
    network: 'pisco-1',
    contract: 'terra1s5hg4kusnnp5q8r8l0das4tftd50xcve4e2l95eqjy3fgducekfsw6yder'
  }
];

// the YFD token address
type ContractGovernanceToken = {
  chainID: string;
  address: string;
  symbol: string;
};
export const contractYFD: ContractGovernanceToken[] = [
  {
    chainID: 'pisco-1',
    address: 'terra1293l9rgqk5vxndaeqmengssg3pdch57qpepgslh7p2sg3lqd87rss8du4s',
    symbol: 'YFD'
  }
];

//contracts -- deprecated for arrays
export const FORGE_TEST_VERYOLD =
  'terra1pmayk6e2zt78hlmkwyk6qxfhu390urw6prkd46jc9e7d8k45wq3sldycwz';
export const YFD_TEST =
  'terra1293l9rgqk5vxndaeqmengssg3pdch57qpepgslh7p2sg3lqd87rss8du4s';
export const YFD_TEST_OLD =
  'terra1ss9zz4873vk4dd8dvua0vm83m6s8k7ctwp9efac0arytn6jthfgsy2d4a9';
export const FORGE_TEST_BROKEN =
  'terra168rvweaknfd7dhde02ex66fjsm9e3xppkj4xskvtnuql4vwr0ptsy444dx';
export const FORGE_TEST_OLDEST =
  'terra1vd662ag5prc89szmdezsr8gythmhqp2tp6d7faeqpq8the349ymsmrwa87';
export const FORGE_TEST_OLDER =
  'terra1ua4nwargz3udh5wlnu0l8knvymr4fsc0mnq426qz442f93zjrw5s63jcst';
export const FORGE_TEST_OLD =
  'terra1utkv5z538t32t0a2dkut2qncc4xs29jldjw2ez5s9tuzjsy59d0sm5p2mz';
export const FORGE_TEST =
  'terra1s5hg4kusnnp5q8r8l0das4tftd50xcve4e2l95eqjy3fgducekfsw6yder';
