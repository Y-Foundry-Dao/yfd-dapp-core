import { useState } from 'react';
import useHandleClicks from 'hooks/useHandleClicks';
import BalanceYFD from './BalanceYFD';
import BalancefYFD from './BalancefYFD';
import { useRecoilState, useRecoilValue } from 'recoil';
import { format } from 'date-fns';
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
  MenuOptionGroup,
  MenuDivider,
  Badge,
  Box,
  Spacer
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
} from 'utilities/variables/variables';
import { inputStakeYFD } from 'recoil/input/atoms';
import useHandleInputs from 'hooks/useHandleInputs';

function StakeYFD() {
  const [durationDepositYFD, setDurationDepositYFD] = useState(
    DEFAULT_YFD_LOCK_DURATION
  );
  const [durationDepositYFDDate, setDurationDepositYFDDate] = useState(
    format(DEFAULT_YFD_LOCK_DURATION_DATE, 'dd-MMM-yyyy')
  );
  const amountStakeYFD = useRecoilValue(inputStakeYFD);
  const { handleClickStakeYFD } = useHandleClicks();
  const { handleInputStakeYFD } = useHandleInputs();

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
          onChange={handleInputStakeYFD}
          value={amountStakeYFD}
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
              <MenuDivider />
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    {format(DATE_FYFD_YFD_LOCK_VALUE_MINIMUM, 'dd-MMM-yyyy')}
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="red"
                      variant="solid"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      MINIMUM -95.20%
                    </Badge>
                  </Box>
                </Flex>
                <Text color="red"></Text>
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    <b>{format(DATE_ONE_MONTH, 'dd-MMM-yyyy')}</b>
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="blue"
                      variant="subtle"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      ONE MONTH
                    </Badge>
                  </Box>
                </Flex>
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    <b>
                      {format(DATE_FYFD_YFD_LOCK_VALUE_QUARTER, 'dd-MMM-yyyy')}
                    </b>
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="blue"
                      variant="subtle"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      62.5%
                    </Badge>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    <b>
                      {format(DATE_FYFD_YFD_LOCK_VALUE_PARITY, 'dd-MMM-yyyy')}
                    </b>
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="green"
                      variant="solid"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                      marginLeft="25px"
                    >
                      Value Parity 100%
                    </Badge>
                  </Box>
                </Flex>
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    {format(DATE_FYFD_YFD_LOCK_VALUE_HALF, 'dd-MMM-yyyy')}
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="blue"
                      variant="subtle"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      125%
                    </Badge>
                  </Box>
                </Flex>
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    {format(
                      DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER,
                      'dd-MMM-yyyy'
                    )}{' '}
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="blue"
                      variant="subtle"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      187.5%
                    </Badge>
                  </Box>
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem
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
                <Flex width="full" minWidth="max-content">
                  <Box>
                    {format(DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM, 'dd-MMM-yyyy')}
                  </Box>
                  <Spacer />
                  <Box>
                    <Badge
                      colorScheme="purple"
                      variant="solid"
                      borderRadius="full"
                      paddingLeft="10px"
                      paddingRight="10px"
                    >
                      Max Power 250%
                    </Badge>
                  </Box>
                </Flex>
              </MenuItem>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button
          width="100px"
          margin={1}
          onClick={async () => {
            return await handleClickStakeYFD(
              amountStakeYFD,
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
