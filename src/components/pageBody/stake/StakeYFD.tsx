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
import { DEFAULT_YFD_LOCK_DURATION } from 'utilities/variables';

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
              <MenuItem>2 Weeks</MenuItem>
              <MenuItem>1 Month</MenuItem>
              <MenuItem>3 Months</MenuItem>
              <MenuItem>6 Months</MenuItem>
              <MenuItem>9 Months</MenuItem>
              <MenuItem
                value="5256000"
                onClick={(event) =>
                  setDurationDepositYFD(event.currentTarget.value)
                }
              >
                12 Months
              </MenuItem>
              <MenuItem>18 Months</MenuItem>
              <MenuItem
                value="10512000"
                onClick={(event) =>
                  setDurationDepositYFD(event.currentTarget.value)
                }
              >
                2 Years - {durationDepositYFD} blocks
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
