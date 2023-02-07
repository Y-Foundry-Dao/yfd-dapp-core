import { useEffect } from 'react';
import { WrapItem, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { minFYFDEmergencyPropAtom } from '@recoil/governance/parameters/atoms';

import { Icons } from '@var/icons';
import styles from '@scss/app.module.scss';
import { addressCanProposeEmergencyAtom } from '@recoil/connected/address/atoms';

let styleIcon = 'material-symbols-outlined';

export default function PopoverIconEmergency() {
  const canEmergency = useRecoilValue(addressCanProposeEmergencyAtom);
  const minEmergency = useRecoilValue(minFYFDEmergencyPropAtom);

  useEffect(() => {
    if (canEmergency) {
      styleIcon = styleIcon + ' ' + styles['iconLockYFD-enable'];
    } else {
      styleIcon = styleIcon + ' ' + styles.iconLockYFD;
    }
  }, [canEmergency]);

  const title = minEmergency + ' fYFD';
  return (
    <WrapItem className={styles['lockAction']}>
      <SimpleGrid>
        <GridItem>
          <span title={title} className={styleIcon}>
            {Icons.guardian}
          </span>
        </GridItem>
        <GridItem>Protect</GridItem>
      </SimpleGrid>
    </WrapItem>
  );
}
