import { formAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $fg = cssVar('form-control-color');

const baseStyleRequiredIndicator = defineStyle({
  marginStart: '1',
  [$fg.variable]: 'colors.red.500',
  _dark: {
    [$fg.variable]: 'colors.red.300'
  },
  color: $fg.reference
});

const baseStyleHelperText = defineStyle({
  mt: '2',
  [$fg.variable]: 'colors.white.600',
  _dark: {
    [$fg.variable]: 'colors.whiteAlpha.600'
  },
  color: $fg.reference,
  lineHeight: 'normal',
  fontSize: 'sm'
});

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)'
};

const baseStyle = definePartsStyle({
  container: {
    width: '100%',
    position: 'relative',
    _focusWithin: {
      label: {
        color: 'yellow.500'
      }
    },
    'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
      {
        color: 'lime'
      },
    label: {
      color: 'lightgray',
      border: 0
    }
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});

export default defineMultiStyleConfig({
  baseStyle
});
