import { defineStyleConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export default defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base' // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3 // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4 // <-- these values are tokens from the design system
    }
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'teal.500',
      color: 'teal.500'
    },
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'rgb(19, 95, 93)',
      color: 'gray.200',
      _hover: {
        bg: 'rgb(0, 172, 169)'
      },
      _active: {
        bg: 'brand4'
      }
    }),
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde'
    },
    // 4. We can override existing variants
    link: {
      bg: 'transparent',
      fontWeight: 'normal',
      letterSpacing: '0.25rem',
      fontSize: '1em',
      _hover: {
        bg: 'transparent',
        fontWeight: 'bold',
        textDecoration: 'none'
      }
    },
    // 5. We can add responsive variants
    sm: {
      bg: 'red.400',
      color: 'gray.300',
      fontSize: 'md'
    },
    // The default size and variant values
    defaultProps: {
      fontWeight: 'bold', // Normally, it is "semibold"
      bg: 'rgb(19, 95, 93)',
      color: 'gray.200',
      _hover: {
        bg: 'rgb(0, 172, 169)'
      }
    }
  }
});
