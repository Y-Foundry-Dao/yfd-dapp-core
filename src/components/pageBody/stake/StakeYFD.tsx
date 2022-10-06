import { useEffect, useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import useContract from 'hooks/useContract';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { useRecoilState } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';

import {
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import yLogo from 'assets/yfd/logo-orange.svg';
import {
  DATE_TWO_WEEK,
  DATE_ONE_MONTH,
  DATE_TWO_MONTH,
  DATE_THREE_MONTH,
  DATE_SIX_MONTH,
  DATE_NINE_MONTH,
  DATE_EIGHTEEN_MONTH,
  DATE_ONE_YEAR,
  DATE_TWO_YEAR,
  DEFAULT_YFD_LOCK_DURATION,
  CHAIN_BLOCK_ONE_YEAR,
  CHAIN_BLOCK_EIGHTEEN_MONTH,
  CHAIN_BLOCK_TWO_YEAR,
  CHAIN_BLOCK_TWO_WEEK,
  CHAIN_BLOCK_ONE_MONTH,
  CHAIN_BLOCK_TWO_MONTH,
  CHAIN_BLOCK_THREE_MONTH,
  CHAIN_BLOCK_SIX_MONTH,
  CHAIN_BLOCK_NINE_MONTH,
  DATE_FYFD_YFD_LOCK_VALUE_PARITY,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_PARITY
} from 'utilities/variables';

function StakeYFD() {
  const [amountDepositYFD, setAmountDepositYFD] =
    useRecoilState(amountDepositYFDAtom);
  const { handleClickStakeYFD } = useHandleClicks();
  const { txHashTest } = useHandleClicks();
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const handleInputDepositYFD = (value: any) => setAmountDepositYFD(value);

  // useEffect(() => {
  //   console.log(txHashTest);
  // }, [txHashTest, amountDepositYFD]);

  return (
    <Flex alignItems="center" gap={10}>
      <Flex layerStyle={'stakeYFD'} direction="column">
        <BalanceYFD />
        <BalancefYFD />
      </Flex>
      <Flex alignItems="center" gap={0}>
        <NumberInput
          id="stake-yfd-input"
          name="stake-yfd-input"
          precision={6}
          min={0}
          step={100}
          maxW="150px"
          color="tomato"
          inputMode="decimal"
          onChange={handleInputDepositYFD}
          value={amountDepositYFD}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {durationDepositYFD}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              defaultValue="{DEFAULT_YFD_LOCK_DURATION}"
              title="Duration"
            >
              <MenuItem
                value={CHAIN_BLOCK_TWO_WEEK}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_TWO_WEEK)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_ONE_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_ONE_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_TWO_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_TWO_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_THREE_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_THREE_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_SIX_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_SIX_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_NINE_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_NINE_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_PARITY}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                <b>{String(DATE_FYFD_YFD_LOCK_VALUE_PARITY)}</b>
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_ONE_YEAR}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_ONE_YEAR)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_EIGHTEEN_MONTH}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_EIGHTEEN_MONTH)}
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_TWO_YEAR}
                onClick={(event) =>
                  setDurationDepositYFD(Number(event.currentTarget.value))
                }
              >
                {String(DATE_TWO_YEAR)}
              </MenuItem>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button
          width="100px"
          margin={1}
          onClick={async () => {
            // console.log(amountDepositYFD);
            return await handleClickStakeYFD(
              amountDepositYFD,
              Number(durationDepositYFD)
            );
          }}
        >
          Deposit
          <img src={yLogo} width="25px" alt="y logo" />
        </Button>
      </Flex>
    </Flex>
  );
}

export default StakeYFD;
