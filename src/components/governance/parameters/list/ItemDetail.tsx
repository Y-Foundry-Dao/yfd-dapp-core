import { Stack } from '@chakra-ui/react';
import buttonStyle from '@scss/button.module.scss';

function ItemDetail() {
  return (
    <Stack>
      <button className={buttonStyle.standard}>Change</button>
      <button className={buttonStyle.disable}>Deprecate</button>
    </Stack>
  );
}

export default ItemDetail;
