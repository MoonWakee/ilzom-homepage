import { SimpleGrid, VStack, Box } from '@chakra-ui/react';
import Image from 'next/image';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledBodyText
} from '../../themes/styled';

import outsider from '../../public/assets/illustrations/ilzom_outsidelands_nohole.png';

export const SectionTwo = () => {
  return (
    <SimpleGrid
      id='about_us'
      columns={{ base: 1, md: 1, lg: 2 }}
      px={{ base: '2rem', lg: '8rem' }}
      minHeight='95vh'
      mb='0'
      bg='background_brown'
      placeItems='center'
    >
      <Box width={{ base: '400px', lg: '450px' }}>
        <Image src={outsider} alt='raid fantasy' placeholder='blur' />
      </Box>
      <VStack spacing={5} justifyContent='center' ml={{ md: '1rem' }}>
        <StyledPrimaryHeading style={{color: 'black'}} fontSize={{ base: '1.5rem', lg: '36px' }}>
          About Us
        </StyledPrimaryHeading>
        <div>
          <StyledBodyText style={{color: 'black'}} fontSize={{ base: '1rem', lg: '18px' }}>
          iLZOM DAO is an organization of Korean international students 
          who share their project ideas and develop them into astonishing outputs. 
          Not only can students work on building their portfolios but also can network
          with other peers across the U.S. Students are also given opportunities to be
          recruited by sponsor companies and chances to stand out to other recruiters.
          </StyledBodyText>
          <br></br>
        </div>
        <br />
        <StyledPrimaryButton
          style={{background:'#DFD6D6', color:'black'}}
          fontSize={{ base: '16px', lg: '18px' }}
          onClick={() =>
            window.open('https://moonwakee.github.io/ilzom-DAO/', '_blank')
          }
        >
          Handbook
        </StyledPrimaryButton>
      </VStack>
    </SimpleGrid>
  );
};
