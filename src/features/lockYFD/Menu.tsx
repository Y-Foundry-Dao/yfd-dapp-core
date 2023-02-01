import { useEffect } from 'react';
import { Button, Popover, PopoverTrigger, Flex } from '@chakra-ui/react';
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil';
import useChainInfo from 'hooks/useChainInfo';
import { selectMyFYFD } from '@recoil/connected/balance/selectors';
import styles from '@scss/app.module.scss';
import MenuPopoverBalance from './MenuPopoverBalance';
import MenuPopoverNoFYFD from './MenuNoFYFD';
import NoticeLoading from '@components/NoticeLoading';
import IconProposal from './IconProposal';
import IconVote from './IconVote';
import IconEmergency from './IconEmergency';
import { addressHasFYFDAtom } from '@recoil/connected/address/atoms';

export default function MenuLockYFD() {
  // load the chain contracts and parameters into state
  useChainInfo();
  // get the user's fyfd and yfd balances and format them for display ( 6 decimals )
  const myFYFD = useRecoilValueLoadable(selectMyFYFD);
  const hasFYFD = useRecoilValue(addressHasFYFDAtom);
  // prepare variables to set the minimum fyfd required for each proposal type to state

  useEffect(() => {
    // if the fyfd or yfd balances are loading, return until the data is loaded
    console.log('hasFYFD state changed. hasFYFD: ', hasFYFD);
  }, [hasFYFD]);

  // if the user has no fyfd, return the "Lock $YFD" button instead of the fyfd menu
  if (hasFYFD) {
    return (
      <Popover>
        <PopoverTrigger>
          <Button className={styles.stakeYfd}>
            <Flex className={styles.stakeYfdIcons}>
              <IconVote />
              <IconProposal />
              <IconEmergency />
            </Flex>
          </Button>
        </PopoverTrigger>
        <MenuPopoverBalance />
      </Popover>
    );
  }

  return <MenuPopoverNoFYFD />;
}
