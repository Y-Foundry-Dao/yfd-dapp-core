import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    color: 'gray.700',
    background: 'teal.300',
    fontWeight: 'bold',
    bg: 'gray.100'
  },
  icon: {
    color: 'gray.600'
  }
});

export default defineMultiStyleConfig({ baseStyle });
