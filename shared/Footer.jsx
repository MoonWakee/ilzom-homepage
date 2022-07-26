import { Flex, Link, Box, SimpleGrid, VStack, HStack } from '@chakra-ui/react';
import Image from 'next/image';

import { theme } from '../themes/theme';

import { StyledFooterHeaderText } from '../themes/styled';

import ilzom from '../public/assets/logos/3_logo.png';

export const Footer = () => {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row', lg: 'row' }}
      alignItems='flex-start'
      justifyContent='space-between'
      px={{ base: '2rem', lg: '5rem' }}
      py='2rem'
      w='100%'
      bg='black'
    >
      <Box width={{ base: '150px', lg: '168px' }} mr='auto' mt='2rem'
              onClick={() => (window.location.href = '/')}
              cursor='pointer'>
        <Image src={ilzom} alt='ilzom logo' priority />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3 }}
        spacing={{ base: '2rem', lg: '5rem' }}
        fontFamily='spaceMono'
        fontSize='1rem'
        color='greyLight'
      >
        <VStack alignItems='flex-start'>
          <StyledFooterHeaderText fontSize='1.2rem'>
            For Companies
          </StyledFooterHeaderText>
          <Link href='/#services'>Sponsor Us</Link>
          {/* <Link href='/#portfolio'>Our Portfolio</Link> */}
        </VStack>
        <VStack alignItems='flex-start'>
          <StyledFooterHeaderText fontSize='1.2rem'>
            For the iLZOMers
          </StyledFooterHeaderText>
          <Link href='/#culture'>Join Us</Link>
          <Link href='/#manifesto'>
            Our Handbook
          </Link>
        </VStack>
        <VStack alignItems='flex-start'>
          <StyledFooterHeaderText fontSize='1.2rem'>
            For All
          </StyledFooterHeaderText>
          <Link>
            <HStack>
              <span style={{ width: '15px', marginRight: '5px' }}>
                <i className='fab fa-twitter'></i>
              </span>
              <Link
                href='https://twitter.com/ilzom'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </Link>
            </HStack>
          </Link>

          <Link>
            <HStack>
              <span style={{ width: '15px', marginRight: '5px' }}>
                <i className='fab fa-github'></i>
              </span>
              <Link
                href='https://github.com/MoonWakee/ilzom-DAO'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </Link>
            </HStack>
          </Link>

          <Link>
            <HStack>
              <span style={{ width: '15px', marginRight: '5px' }}>
                <i className='fab fa-discord'></i>
              </span>
              <Link
                href='https://discord.gg/j9Zm3ptT'
                target='_blank'
                rel='noopener noreferrer'
              >
                Discord
              </Link>
            </HStack>
          </Link>

          {/* <Link>
            <HStack>
              <span style={{ width: '15px', marginRight: '5px' }}>
                <i className='fas fa-newspaper'></i>
              </span>
              <Link
                href='https://ilzom.substack.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Newsletter
              </Link>
            </HStack>
          </Link> */}
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};
