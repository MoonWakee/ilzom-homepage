import { Flex, VStack, SimpleGrid, Image } from '@chakra-ui/react';
import Link from 'next/link';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledHeadingLabels,
  StyledBodyText,
  StyledCheckText
} from '../../themes/styled';

import { culture } from '../../utils/constants';

export const SectionFour = () => {
  return (
    <Flex
      id='culture'
      minHeight='95vh'
      direction='column'
      alignItems='center'
      justifyContent='center'
      bg='basedarkest'
      px={{ base: '2rem', lg: '8rem' }}
      py='6rem'
    >
      <VStack spacing={5} justifyContent='center'>
        <StyledPrimaryHeading
          fontSize={{ base: '1.5rem', lg: '36px' }}
          mb='1rem'
        >
          Become a <div style={{color: 'black', display: 'inline'}}>Contributor</div>
        </StyledPrimaryHeading>
        <StyledBodyText fontSize={{ base: '1rem', lg: '20px' }}>
        Through executing diverse projects, we become founders,<br></br>
        designers, developers, mangers, and ---.
        </StyledBodyText>
        <StyledCheckText fontSize={{ base: '1rem', lg: '20px' }}>
        ✔️ Apply and be part of our community<br/> 
        ✔️ Ideate and participate in upcoming projects<br/>
        ✔️ Engage in diverse offline/online events<br/>
        </StyledCheckText>
        <br/>
        <Link href='/join' passHref>
          <StyledPrimaryButton fontSize={{ base: '16px', lg: '18px' }}>
            Join Us
          </StyledPrimaryButton>
        </Link>
      </VStack>
    </Flex>
  );
};
