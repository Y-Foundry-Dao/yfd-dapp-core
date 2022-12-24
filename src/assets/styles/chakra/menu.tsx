import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['menu', 'list', 'item']);

export default helpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      rounded: 'lg',
      color: 'black',
      bg: 'rgba(32, 36, 46, 0.8)',
      flexDirection: 'column',
      py: '2'
    },
    list: {
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)',
      backdropFilter: 'auto',
      backdropBlur: '30px'
    },
    item: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)',
      _hover: {
        color: 'black',
        bg: 'teal.500'
      }
    },
    button: {
      bg: 'orange.500',
      color: 'yellow.500',
      _hover: {
        color: 'black',
        bg: 'purple.500'
      }
    }
  },
  sizes: {
    sm: {
      item: {
        fontSize: '0.75rem',
        px: 2,
        py: 1
      }
    },
    md: {
      item: {
        fontSize: '0.875rem',
        px: 3,
        py: 2
      }
    }
  },
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
