import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import useHandleClicks from 'hooks/useHandleClicks';
import BalanceYFD from './stake/BalanceYFD';
import BalancefYFD from './stake/BalancefYFD';
import { format } from 'date-fns';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
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

import styles from 'styles/app.module.scss';

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
    <Popover>
      <PopoverTrigger>
        <Button className={styles['button-wrapper']} margin={1}>
          <Text as="sup" marginRight={1}>
            fYFD
          </Text>
          <BalancefYFD />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent className={styles.portal}>
          <PopoverArrow />
          <PopoverHeader>
            <Text as="sup" marginBottom={0} width="100%">
              YFD:
              <b>
                <BalanceYFD />
              </b>
            </Text>
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex alignItems="center" gap={0}>
              <NumberInput
                id="stake-yfd-input"
                name="stake-yfd-input"
                precision={0}
                min={1000}
                step={1000}
                maxW="140px"
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
                <MenuButton as={Button} variant="outline" marginLeft={3}>
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
                          format(
                            DATE_FYFD_YFD_LOCK_VALUE_MINIMUM,
                            'dd-MMM-yyyy'
                          )
                        );
                      }}
                    >
                      <Flex width="full" minWidth="max-content">
                        <Box>
                          {format(
                            DATE_FYFD_YFD_LOCK_VALUE_MINIMUM,
                            'dd-MMM-yyyy'
                          )}
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
                          format(
                            DATE_FYFD_YFD_LOCK_VALUE_QUARTER,
                            'dd-MMM-yyyy'
                          )
                        );
                      }}
                    >
                      <Flex width="full" minWidth="max-content">
                        <Box>
                          <b>
                            {format(
                              DATE_FYFD_YFD_LOCK_VALUE_QUARTER,
                              'dd-MMM-yyyy'
                            )}
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
                            {format(
                              DATE_FYFD_YFD_LOCK_VALUE_PARITY,
                              'dd-MMM-yyyy'
                            )}
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
                          format(
                            DATE_FYFD_YFD_LOCK_VALUE_THREEQUARTER,
                            'dd-MMM-yyyy'
                          )
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
                          format(
                            DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM,
                            'dd-MMM-yyyy'
                          )
                        );
                      }}
                    >
                      <Flex width="full" minWidth="max-content">
                        <Box>
                          {format(
                            DATE_FYFD_YFD_LOCK_VALUE_MAXIMUM,
                            'dd-MMM-yyyy'
                          )}
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
            </Flex>
          </PopoverBody>
          <PopoverFooter>
            <Button
              colorScheme="blue"
              margin={1}
              onClick={async () => {
                return await handleClickStakeYFD(
                  amountStakeYFD,
                  Number(durationDepositYFD)
                );
              }}
            >
              <Text>Deposit</Text>
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default StakeYFD;
