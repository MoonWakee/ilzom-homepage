import { ChakraProvider, Flex } from '@chakra-ui/react';
import AppContextProvider from '../context/AppContext';
import { theme } from '../themes/theme';

export const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Flex
          background={`${theme.colors.header_color}`}
        >
          <Flex maxW='100rem' py='1rem' overflowX='hidden'>
            {children}
          </Flex>
        </Flex>
      </AppContextProvider>
    </ChakraProvider>
  );
};
