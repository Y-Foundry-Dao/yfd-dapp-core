import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useConnectedWallet } from '@terra-money/wallet-provider';
import ReactCardFlip from 'react-card-flip';

import dgsfLogo from 'assets/yfd/logo-dgsf.svg';

import cardstyles from 'components/availableOptionsCard/card.module.css';
import Title from 'components/availableOptionsCard/title/Title';
import Strategist from 'components/availableOptionsCard/strategist/Strategist';
import DepositModal from 'components/depositModal/modal/DepositModal';

import useInstantiateContract from 'utilities/hooks/useInstantiateContract';
import useContractRegistry from 'utilities/hooks/useContractRegistry';

function strategyCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [contractToDeposit, setContractToDeposit] = useState('');

  const connectedWallet: any = useConnectedWallet();
  const { queryRegistry } = useContractRegistry();

  const {
    instantiateContract,
    txHashFromInstantiate,
    contractFromInstantiation,
    setContractFromInstantiation,
    txHashFromExecute
  } = useInstantiateContract();

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    return setIsFlipped(!isFlipped);
  };

  const queryRegistryGetDefaultContract = async () => {
    if (!connectedWallet) {
      return;
    }
    const response: any = await queryRegistry();
    const contractInstantiations = await response.instantiations;

    contractInstantiations.map(async (instantiation: any) => {
      if (connectedWallet.walletAddress == instantiation.instance_owner) {
        return setContractToDeposit(instantiation.contract_addr);
      }
    });
  };
  useEffect(() => {
    const setDefaultContract = async () => {
      await queryRegistryGetDefaultContract();
    };
    setDefaultContract();
  }, [connectedWallet]);
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card className={cardstyles.card}>
        <CardFront className={cardstyles.front}>
          <Logo>
            <img
              src={dgsfLogo}
              alt="Degen Stable Farm logo"
              className={cardstyles.cardImage}
              onClick={(e) => handleFlip(e)}
            />
          </Logo>
          <Text>
            <Title />
            <Strategist />
          </Text>
          <ButtonFlip onClick={(e) => handleFlip(e)}>ENTER</ButtonFlip>
          <StyledTitle>More Information</StyledTitle>
          <StyledText>
            This section tells you a little bit more about DGSF and what its
            purpose is.
          </StyledText>
        </CardFront>
      </Card>
      <Card className={cardstyles.card}>
        <CardBack className={cardstyles.back}>
          <div className={cardstyles.backInner}>
            <Logo>
              <img
                src={dgsfLogo}
                alt="Degen Stable Farm logo"
                className={cardstyles.cardImageBack}
                onClick={(e) => handleFlip(e)}
              />
            </Logo>
            <StyledPageTitle>New Position</StyledPageTitle>
            <DepositModal
              instantiateContract={instantiateContract}
              txHashFromInstantiate={txHashFromInstantiate}
              txHashFromExecuteInstantiate={txHashFromExecute}
              contractToDeposit={contractToDeposit}
              setContractToDeposit={setContractToDeposit}
              contractFromInstantiation={contractFromInstantiation}
              setContractFromInstantiation={setContractFromInstantiation}
            />
            <CardFlip>
              <span onClick={(e) => handleFlip(e)}>↩️</span>
            </CardFlip>
          </div>
        </CardBack>
      </Card>
    </ReactCardFlip>
  );
}

const Card = styled.div`
  // styled in card.module.css file
`;

const CardFront = styled.div`
  // styled in card.module.css file
`;

const CardBack = styled.div`
  // styled in card.module.css file
`;

const CardFlip = styled.div`
  // styled in card.module.css file
  width: 100%;
  font-size: 2em;
  text-align: right;
  filter: hue-rotate(165deg);
`;

const Logo = styled.div`
  // styled in card.module.css file
`;

const StyledPageTitle = styled.h1`
  text-shadow: 1px 4px 6px black, 0 0 0 gray, 1px 4px 2px orange;
  text-align: center;
  position: relative;
  width: 90%;
  margin: 2% auto 0 auto;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.3em;
  text-shadow: 0px 1px 0 ${(props) => `${props.theme.colors.color1}`},
    4px 4px 0 #333;
  color: ${(props) => `${props.theme.colors.color3}`};
  border-bottom: 5px solid ${(props) => `${props.theme.colors.color3}`};
  border-top: 5px solid ${(props) => `${props.theme.colors.color3}`};
`;

const StyledTitle = styled.h2`
  text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
  margin: 8% 0 0 0;
  padding-bottom: 0px;

  font-size: 1em;
  color: ${(props) => `${props.theme.colors.color3}`};
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 21px;
  grid-gap: 10px;
  align-items: center;

  :after,
  :before {
    content: ' ';
    display: block;
    border-bottom: 1px solid ${(props) => `${props.theme.colors.color3}`};
    box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
    height: 5px;
  }
`;

const StyledText = styled.div`
  text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
  padding-bottom: 10%;
  color: ${(props) => `${props.theme.colors.color6}`};
  text-align: justify;
`;

const Text = styled.div`
  display: inline-block;
`;

const Link = styled.a`
  color: ${(props) => `${props.theme.colors.color3}`};
  text-decoration: none;
  width: auto;
  margin-left: 10px;
  margin-bottom: 5%;
  background: linear-gradient(hsl(203, 25%, 8%), hsl(203, 50%, 0%));
  padding: 0.6rem;
  padding-left: 2rem;
  padding-right: 2.2rem;
  text-align: center;
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
  cursor: pointer;
`;

const ButtonFlip = styled.button`
  background: ${(props) => `${props.theme.colors.color7}`};
  color: ${(props) => `${props.theme.colors.color4}`};
  border: none;
  border-radius: 10px;
  padding: 13px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  text-shadow: 1px 1px 5px black;
  letter-spacing: 5px;
  width: 80%;
  margin: 8% 5% 0% 10%;
  display: inline-block;
`;

const ButtonFlipCardBack = styled.div`
  margin-top: 25%;
  margin-bottom: 10%;
`;
export default strategyCard;
