import { useState } from 'react';
import Button from 'components/buttons/basic/Button';
import styled from 'styled-components';
import cardstyles from './card.module.css';
import PositionInfo from 'components/openPositions/PositionInfo';
import ReactCardFlip from 'react-card-flip';
import positionToUpdateAtom from 'recoil/positionToUpdate/atom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import cardLogoYFD from 'src/assets/yfd/logo_square_orange_64_transparent.png';
import contractForPositionAtom from 'recoil/contractForPosition/atom';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';

interface Props {
  position: string;
  contract: string;
}

interface StyledProps {
  modalIsOpenUpdate: boolean;
}

function PositionCard({ position, contract }: Props) {
  const [modalIsOpenUpdate, setModalIsOpenUpdate] = useRecoilState(
    modalIsOpenUpdateAtom
  );
  const setPositionToUpdate = useSetRecoilState(positionToUpdateAtom);
  const setContractForPosition = useSetRecoilState(contractForPositionAtom);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setPositionToUpdate(position);
    setContractForPosition(contract);
    return setModalIsOpenUpdate(true);
  };

  const handleFlip = (e: React.MouseEvent) => {
    e.preventDefault();
    return setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className={cardstyles.card}>
        <Position
          modalIsOpenUpdate={modalIsOpenUpdate}
          className={cardstyles.front}
        >
          <div className={CardLogo}>
            <img src={cardLogoYFD} />
          </div>
          <h2>DGSF Position {position}</h2>
          <ContractInfo>
            <Link
              href={`https://terrasco.pe/testnet/address/${contract}`}
              target="_blank"
            >
              View Contract
            </Link>
          </ContractInfo>
          <PositionInfo position={position} contract={contract} />
          <ButtonFlip onClick={(e) => handleFlip(e)}>MODIFY</ButtonFlip>
        </Position>
      </div>
      <div className={cardstyles.card}>
        <Position
          modalIsOpenUpdate={modalIsOpenUpdate}
          className={cardstyles.back}
        >
          <CardBackTitle>Manage Position</CardBackTitle>
          <div>#{position}</div>
          <div>
            <UpdateTable>
              <tr>
                <TdHeader>Increase Collateral Value:</TdHeader>
                <td></td>
              </tr>
              <TrPositionUpdate>
                <td colSpan={2}>Add xxx UST</td>
              </TrPositionUpdate>
              <tr>
                <TdHeader>Partially Close Position:</TdHeader>
                <td></td>
              </tr>
              <TrPositionUpdate>
                <TdValue colSpan={2}>xxx mAsset</TdValue>
              </TrPositionUpdate>
              <tr>
                <TdHeader>Mint mAsset:</TdHeader>
                <td></td>
              </tr>
              <TrPositionUpdate>
                <td colSpan={2}>xxx</td>
              </TrPositionUpdate>
            </UpdateTable>
          </div>
          <Button
            children="Update Position"
            disabled={false}
            onClick={() => handleClick()}
          />
          <ButtonFlipCardBack>
            <Link onClick={(e) => handleFlip(e)}>Flip Card</Link>
          </ButtonFlipCardBack>
        </Position>
      </div>
    </ReactCardFlip>
  );
}

const ButtonFlipCardBack = styled.div`
  margin-top: 25%;
  margin-bottom: 10%;
`;

const TrPositionUpdate = styled.tr`
  margin-bottom: 10px;
`;

const UpdateTable = styled.table`
  width: 100%;
  text-align: center;
  align: center;
  margin-top: 25px;
  margin-bottom: 50px;
`;

const TdHeader = styled.td`
  padding-top: 15px;
  color: ${(props) => `${props.theme.colors.color3}`};
  border-bottom: 1px dotted hsl(215, 7%, 25%);
`;

const TdValue = styled.td`
  align: center;
`;

const CardBackTitle = styled.h2`
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

const ContractInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CardLogo = styled.div`
  margin-top: 10px;
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
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  text-shadow: 1px 1px 5px black;
`;
const Position = styled.div<StyledProps>`
  box-shadow: 1px 1px 9px 0 ${(props) => `${props.theme.colors.color3}`};
  border: 2px solid ${(props) => `${props.theme.colors.color3}`};
  width: 25%;
  margin: 3% 6%;
  padding: 10% 3% 5% 2%;
  border-radius: 20px;
  background: rgba(8, 6, 11, 0.75);
  min-width: 300px;
  z-index: 1;
  overflow: hidden;
  filter: ${({ modalIsOpenUpdate }) =>
    modalIsOpenUpdate ? 'blur(20px)' : 'blur(0)'};
`;

export default PositionCard;
