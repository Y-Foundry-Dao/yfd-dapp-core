import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    borderRadius: '5rem',
    borderWidth: '0',
    p: 2
  },
  thumb: {
    bg: 'color4'
  },
  track: {
    bg: 'brand4',
    _checked: {
      bg: 'button'
    }
  }
});

export default defineMultiStyleConfig({ baseStyle });
