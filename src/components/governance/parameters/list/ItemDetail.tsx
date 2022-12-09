import { Stack } from '@chakra-ui/react';
import chakra from 'styles/chakra.module.scss';

function ItemDetail() {
  return (
    <Stack>
      <button className={chakra.buttonStandard}>Change</button>
      <button className={chakra.buttonDisable}>Deprecate</button>
    </Stack>
  );
}

export default ItemDetail;
