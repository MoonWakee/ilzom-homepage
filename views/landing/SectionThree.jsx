import { Flex, Box, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import ilzom_orange from '../../public/assets/illustrations/ilzom_orange.png';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledHeadingLabels,
  StyledBodyText,
  StyledSecondaryButton
} from '../../themes/styled';
import { services } from '../../utils/constants';


export const SectionThree = () => {
  return (
    <SimpleGrid
      id='sponsorship'
      columns={{ base: 1, md: 1, lg: 2 }}
      px={{ base: '2rem', lg: '8rem' }}
      my='4rem'
      mb='0'
      minHeight={'95vh'}
      bg='background_purple'
      placeItems='center'
    >
       <VStack spacing={5} justifyContent='center'>
        <StyledPrimaryHeading fontSize={{ base: '1.5rem', lg: '36px' }}>
          Sponsorship
        </StyledPrimaryHeading>
        <br/>
          <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }} style={{textAlign: 'center'}}>
          Anyone who would like to sponsor iLZOM DAO,<br></br>
          you are very welcome to anytime!
          </StyledBodyText>
        <br />
        <Link href='/hire' passHref>
          <StyledPrimaryButton fontSize={{ base: '16px', lg: '18px' }}>
            Start!
          </StyledPrimaryButton>
        </Link>
        </VStack>
        <Box width={{ base: '400px', lg: '450px' }}>
          <Image src={ilzom_orange} alt='raid fantasy' placeholder='blur' />
        </Box>
    </SimpleGrid>
  );
};
