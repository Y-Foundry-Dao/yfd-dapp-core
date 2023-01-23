import styles from '@scss/app.module.scss';
import { Text } from '@chakra-ui/react';
import { useRecoilValueLoadable } from 'recoil';
import { selectYFDConnected } from '@recoil/connected/balance/selectors';

function MyYFD() {
  const myYFD = useRecoilValueLoadable(selectYFDConnected);

  switch (myYFD.state) {
    case 'hasValue':
      return (
        <div className={styles.containerProfileMenuText}>
          <Text className={styles.containerProfileMenuTextTitle}>
            Testing Objectives
          </Text>
          <br />
          <hr />
          <br />
          <div>My YFD Balance: {myYFD.contents}</div>
          <br />
          <hr />
          <br />
        </div>
      );
    case 'loading':
      return <Text>Loading...</Text>;
    case 'hasError':
      throw myYFD.contents;
  }
}

export default MyYFD;
