import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: 'mono', // change the font family
    color: 'gray.100',
    bg: 'gray.700',
    backgroundColor: 'gray.700'
  },
  addon: {
    fontFamily: 'mono', // change the font family
    bg: 'tealAlpha.500',
    backgroundColor: 'teal.500',
    color: 'gray.200'
  },
  element: {
    bg: 'white',
    rounded: 'full',
    border: '1px solid',
    borderColor: 'gray.100'
  }
});

export default defineMultiStyleConfig({ baseStyle });
