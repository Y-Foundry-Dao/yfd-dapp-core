import { StylesProvider, Text } from '@chakra-ui/react';
import useContractYFD from 'hooks/useContractYFD';
import convertFromBase from 'utilities/converters/convertFromBase';
import styles from '@scss/app.module.scss';

function BalanceYFD() {
  const { tokenBalance } = useContractYFD();

  return (
    <Text className={styles.menuYfdBalance}>
      {convertFromBase(Number(tokenBalance)).toFixed(5)}
    </Text>
  );
}

export default BalanceYFD;
