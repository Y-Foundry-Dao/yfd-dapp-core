type ChainDeploy = {
  chainID: string;
  config: { interval: number; forge: string; token: string }[];
};

const chain: ChainDeploy[] = [
  {
    chainID: 'pisco-1',
    config: [
      {
        interval: 6000,
        forge:
          'terra1s5hg4kusnnp5q8r8l0das4tftd50xcve4e2l95eqjy3fgducekfsw6yder',
        token:
          'terra1293l9rgqk5vxndaeqmengssg3pdch57qpepgslh7p2sg3lqd87rss8du4s'
      }
    ]
  },
  {
    chainID: 'uni-6',
    config: [
      {
        interval: 6000,
        forge:
          'juno103rwhg7qyaj4m5dzhl92mm74h97x68swraxcsp9aehex38v0zwjqhtdl4q',
        token: 'juno1fpql6u3l3q5eakz3ansam3kdzmc9ew5ctq75mwdmwf4qh84svevqamlket'
      }
    ]
  }
];

const testnet: ChainDeploy[] = [
  {
    chainID: 'testnet',
    config: [
      {
        interval: chain[0].config[0].interval,
        forge: chain[0].config[0].forge,
        token: chain[0].config[0].token
      }
    ]
  }
];

export const chainDeploy = [...chain, ...testnet];
