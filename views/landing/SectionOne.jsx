import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';


import { Header } from '../../shared/Header';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryHeading,
  StyledBodyText
} from '../../themes/styled';

import ilzom_orange from '../../public/assets/illustrations/ilzom_orange.png';

export const SectionOne = ({ windowWidth }) => {
  return (
    <SimpleGrid
      rows='1'
      placeItems='center'
      border='2px solid'
      borderColor='basecolor'
      height='700px'
      backgroundColor='background'
    >
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='start'
          maxW={{ lg: '50%' }}
        >
          <StyledPrimaryHeading fontSize={{ base: '1.5rem', lg: '36px' }}>
          Welcome to a <nobr>decentralized world!</nobr>
          </StyledPrimaryHeading>
          <br></br>
          <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
            iLZOM DAO is an organization that everyone can put their ideas 
            into practices. We cooperate, support, build relationships with
            one and another.
          </StyledBodyText>

                   <Flex
            w='100%'
            mt={{ base: '2rem' }}
            direction='row'
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Link href='/hire' passHref>
              <StyledPrimaryButton
                style={{background:'#EEB179', color:'white'}}
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
                mr='2rem'
              >
                Sponsor Us
              </StyledPrimaryButton>
            </Link>
            <Link href='/join' passHref>
              <StyledSecondaryButton
                style={{background:'#EEB179'}}
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
              >
                Join Us
              </StyledSecondaryButton>
            </Link>
          </Flex>
        </Flex>
        <Box width={{ md: '400px', lg: '450px' }}>
          <Image src={ilzom_orange} placeholder='blur' alt='raid-banner' />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
