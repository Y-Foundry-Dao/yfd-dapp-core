import { Stack } from '@chakra-ui/react';
import buttonStyle from '@scss/chakra.module.scss';

function ItemDetail() {
  return (
    <Stack>
      <button className={buttonStyle.standard}>Change</button>
      <button className={buttonStyle['standard-disable']}>Deprecate</button>
    </Stack>
  );
}

export default ItemDetail;
