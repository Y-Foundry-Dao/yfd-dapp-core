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
      styleIcon = styleIcon + ' ' + styles['icon-create'];
    }
  }, [canEmergency]);

  return (
    <WrapItem className={styles['lockAction']}>
      <SimpleGrid>
        <GridItem>
          <i className={styleIcon}>{Icons.guardian}</i>
        </GridItem>
        <GridItem>
          Protect
          <br />
          {minEmergency}
        </GridItem>
      </SimpleGrid>
    </WrapItem>
  );
}
