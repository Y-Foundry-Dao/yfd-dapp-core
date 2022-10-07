import { useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { useRecoilState } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import { format, formatRelative } from 'date-fns';
import { AiFillCaretRight, AiFillStar } from 'react-icons/ai';
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
  Text,
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
import yLogo from 'assets/yfd/logo-orange.svg';
import {
  DATE_ONE_MONTH,
  DEFAULT_YFD_LOCK_DURATION,
  CHAIN_BLOCK_ONE_MONTH,
  DATE_FYFD_YFD_LOCK_VALUE_PARITY,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_PARITY,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MINIMUM,
  DATE_FYFD_YFD_LOCK_VALUE_MINIMUM,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_QUARTER,
  DATE_FYFD_YFD_LOCK_VALUE_QUARTER,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_HALF,
  DATE_FYFD_YFD_LOCK_VALUE_HALF,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_THREEQUARTER,
  DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER,
  CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MAXIMUM,
  DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM,
  DEFAULT_YFD_LOCK_DURATION_DATE
} from 'utilities/variables';

function StakeYFD() {
  const [amountDepositYFD, setAmountDepositYFD] =
    useRecoilState(amountDepositYFDAtom);
  const { handleClickStakeYFD } = useHandleClicks();
  const { txHashTest } = useHandleClicks();
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
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
          <MenuButton
            as={Button}
            colorScheme="gray"
            m={2}
            rightIcon={<ChevronDownIcon />}
          >
            {durationDepositYFDDate}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              defaultValue="{DEFAULT_YFD_LOCK_DURATION}"
              title="Lock Duration : Power"
            >
              <MenuItem
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MINIMUM}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_MINIMUM, 'dd-MMM-yyyy')
                  );
                }}
              >
                {format(DATE_FYFD_YFD_LOCK_VALUE_MINIMUM, 'dd-MMM-yyyy')} :
                <Text color="red">
                  &nbsp;Minimum <b>(-95.20%)</b>
                </Text>
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_ONE_MONTH}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_ONE_MONTH, 'dd-MMM-yyyy')
                  );
                }}
              >
                {format(DATE_ONE_MONTH, 'dd-MMM-yyyy')} : One Month
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_QUARTER}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_QUARTER, 'dd-MMM-yyyy')
                  );
                }}
              >
                {format(DATE_FYFD_YFD_LOCK_VALUE_QUARTER, 'dd-MMM-yyyy')} : 1/4
                Power (62.5%)
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<AiFillCaretRight color="green" />}
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_PARITY}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_PARITY, 'dd-MMM-yyyy')
                  );
                }}
              >
                <b>
                  {format(DATE_FYFD_YFD_LOCK_VALUE_PARITY, 'dd-MMM-yyyy')} :
                  Value Parity (100%)
                </b>
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_HALF}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_HALF, 'dd-MMM-yyyy')
                  );
                }}
              >
                {format(DATE_FYFD_YFD_LOCK_VALUE_HALF, 'dd-MMM-yyyy')} : 1/2
                Power (125%)
              </MenuItem>
              <MenuItem
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_THREEQUARTER}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER, 'dd-MMM-yyyy')
                  );
                }}
              >
                {format(DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER, 'dd-MMM-yyyy')} :
                3/4 Power (187.5%)
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<AiFillStar color="orange" />}
                value={CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_MAXIMUM}
                onClick={(event) => {
                  setDurationDepositYFD(
                    Math.round(Number(event.currentTarget.value))
                  );
                  setDurationDepositYFDDate(
                    format(DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM, 'dd-MMM-yyyy')
                  );
                }}
              >
                <b>
                  {format(DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM, 'dd-MMM-yyyy')} :
                  Max Power (250%)
                </b>
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
