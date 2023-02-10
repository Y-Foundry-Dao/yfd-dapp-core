import { useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import useHandleClicks from '@hooks/useHandleClicks';
import { format } from 'date-fns';
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
  Spacer,
  Divider
} from '@chakra-ui/react';
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
} from '@utilities/variables';
import { inputStakeYFD } from 'recoil/input/atoms';
import useHandleInputs from '@hooks/useHandleInputs';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';
import { selectMyYFD } from '@recoil/connected/balance/selectors';

export default function LockYfdForm() {
  const myYFD = useRecoilValueLoadable(selectMyYFD);
  const balanceYFD = myYFD.state == 'hasValue' ? +myYFD.contents : 0;
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
    <Flex alignItems="center" gap={0}>
      <NumberInput
        id="stake-yfd-input"
        name="stake-yfd-input"
        precision={0}
        min={1000}
        step={1000}
        max={balanceYFD}
        maxW="140px"
        inputMode="decimal"
        onChange={handleInputStakeYFD}
        value={amountStakeYFD}
        variant="primary"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Menu placement="bottom-end">
        <MenuButton as={Button} marginLeft={3}>
          {durationDepositYFDDate}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue="{DEFAULT_YFD_LOCK_DURATION}">
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
                  {format(DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER, 'dd-MMM-yyyy')}{' '}
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
      <Box>
        <Button
          as="button"
          variant="outline"
          title="Lock YFD for fYFD"
          size="sm"
          ml={'1em'}
          className={styles.buttonMinimal}
          onClick={async () => {
            return await handleClickStakeYFD(
              amountStakeYFD,
              Number(durationDepositYFD)
            );
          }}
        >
          <span className="material-symbols-outlined">{Icons.submit}</span>
        </Button>
      </Box>
    </Flex>
  );
}
