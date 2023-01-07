type ChainConnect = {
  chainID: string;
  config: { name: string; lcd: string; forge: string; yfdtoken: string }[];
};

export const chainConnect: ChainConnect[] = [
  {
    chainID: 'pisco-1',
    config: [
      {
        name: 'Terra TestNet',
        lcd: 'https://pisco-lcd.terra.dev',
        forge:
          'terra1s5hg4kusnnp5q8r8l0das4tftd50xcve4e2l95eqjy3fgducekfsw6yder',
        yfdtoken:
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
        yfdtoken: ''
      }
    ]
  }
];

//const settenProject = 'a322f9bb68354790b8385d6b21df7a01';
//const settenKey = 'b1dbc97838ac4ec1b95fasdf5ccc61458210';
//  URL: `https://lcd.pisco.terra.setten.io/${settenProject}?key=${settenKey}`,
