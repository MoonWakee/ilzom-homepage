import { Flex, SimpleGrid, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import { Header } from '../../shared/Header';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryHeading
} from '../../themes/styled';

import raidBanner from '../../public/assets/illustrations/ilzom_orange.png';

export const SectionOne = ({ windowWidth }) => {
  return (
    <SimpleGrid
      rows='1'
      placeItems='center'
      border='2px solid'
      borderColor='basecolor'
      py='2rem'
      px={{ base: '1rem', lg: '4rem' }}
      mx='1rem'
    >
      <Header windowWidth={windowWidth} />
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
          <StyledPrimaryHeading maxW='720px' fontSize={{ lg: '24px' }}>
          iLZOM DAO는 Web3 기반인 한국 유학생들의 프로젝트 참여와 네트워킹을 위한 장입니다. 
          창의적이고 선두적인 디지털 단체입니다. 
          </StyledPrimaryHeading>
                   <Flex
            w='100%'
            mt={{ base: '2rem' }}
            direction='row'
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Link href='/hire' passHref>
              <StyledPrimaryButton
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
                mr='2rem'
              >
                Sponsor Us
              </StyledPrimaryButton>
            </Link>
            <Link href='/join' passHref>
              <StyledSecondaryButton
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
              >
                Join Us
              </StyledSecondaryButton>
            </Link>
          </Flex>
        </Flex>
        <Box width={{ md: '400px', lg: '450px' }}>
          <Image src={raidBanner} placeholder='blur' alt='raid-banner' />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
