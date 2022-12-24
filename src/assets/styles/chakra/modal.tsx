import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  header: {
    borderRadius: '0.5rem'
  },
  overlay: {
    bg: 'rgba(16, 18, 23, 0.8)',
    backdropFilter: 'auto',
    backdropBlur: '0.2rem'
  },
  dialogContainer: {},
  dialog: {
    color: 'gray.300',
    bg: 'rgba(32, 36, 46, 0.8)',
    backdropFilter: 'auto',
    backdropBlur: '30px'
  },
  body: {},
  closeButton: {
    bg: 'orange.500',
    color: 'yellow.500',
    _hover: {
      color: 'black',
      bg: 'purple.500'
    }
  },
  footer: {},
  variants: {
    bold: {
      item: {
        fontWeight: 'bold'
      },
      menu: {
        boxShadow: 'xl'
      }
    },
    colorful: {
      item: {
        color: 'orange.600'
      },
      menu: {
        bg: 'orange.100'
      }
    }
  },
  defaultProps: {
    size: 'md'
  }
});

export default defineMultiStyleConfig({ baseStyle });
