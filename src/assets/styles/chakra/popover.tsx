import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  'popover',
  'trigger',
  'content',
  'header',
  'body',
  'footer',
  'arrow'
]);

export default helpers.defineMultiStyleConfig({
  baseStyle: {
    popover: {
      boxShadow: 'lg',
      rounded: 'lg',
      color: 'black',
      bg: 'rgba(32, 36, 46, 0.8)',
      flexDirection: 'column',
      py: '2'
    },
    trigger: {
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)',
      backdropFilter: 'auto',
      backdropBlur: '30px'
    },
    content: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)'
    },
    header: {
      fontWeight: 'medium',
      lineHeight: 'normal'
    },
    body: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)'
    },
    footer: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)'
    },
    arrow: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.300',
      bg: 'rgba(32, 36, 46, 0.8)'
    }
  },
  sizes: {
    sm: {
      content: {
        fontSize: '0.75rem'
      }
    },
    md: {
      content: {
        fontSize: '0.875rem'
      }
    }
  },
  variants: {
    bold: {
      header: {
        fontWeight: 'bold'
      },
      popover: {
        boxShadow: 'xl'
      }
    },
    colorful: {
      content: {
        color: 'orange.600'
      },
      popover: {
        bg: 'orange.100'
      }
    }
  },
  defaultProps: {
    size: 'md'
  }
});
