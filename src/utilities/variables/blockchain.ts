type ChainDeploy = {
  chainID: string;
  config: { name: string; lcd: string; forge: string; token: string }[];
};

export const chainDeploy: ChainDeploy[] = [
  {
    chainID: 'pisco-1',
    config: [
      {
        name: 'Terra TestNet',
        lcd: 'https://pisco-lcd.terra.dev',
        forge:
          'terra1s5hg4kusnnp5q8r8l0das4tftd50xcve4e2l95eqjy3fgducekfsw6yder',
        token:
          'terra1293l9rgqk5vxndaeqmengssg3pdch57qpepgslh7p2sg3lqd87rss8du4s'
      }
    ]
  },
  {
    chainID: 'phoenix-1',
    config: [
      {
        name: 'Terra Mainnet',
        lcd: 'https://phoenix-lcd.terra.dev',
        forge: '',
        token: ''
      }
    ]
  }
];
