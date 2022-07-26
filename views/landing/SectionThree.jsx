import { Flex, VStack, SimpleGrid, Image } from '@chakra-ui/react';
import Link from 'next/link';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledHeadingLabels,
  StyledBodyText,
  StyledCardText
} from '../../themes/styled';
import { services } from '../../utils/constants';

export const SectionThree = () => {
  return (
    <SimpleGrid
      id='sponsorship'
      minHeight='95vh'
      columns={{ base: 1, md: 1, lg: 2 }}
      px={{ base: '2rem', lg: '8rem' }}
      my='4rem'
      bg='background_purple'
    >
      <VStack spacing={5} justifyContent='center' lineHeight='1.8' my='5rem'>
        <StyledPrimaryHeading fontSize={{ base: '1.5rem', lg: '36px' }}>
          Sponsorship
        </StyledPrimaryHeading>
        <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
          우리 후원하고 싶은 사람들 여기 모여라~
        </StyledBodyText>
        
        <Link href='/hire' passHref>
          <StyledPrimaryButton fontSize={{ base: '16px', lg: '18px' }}>
            Hire Us
          </StyledPrimaryButton>
        </Link>
      </VStack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        gap={5}
        my='2rem'
        ml={{ lg: '3rem' }}
      >
        {services.map((item, index) => {
          return (
            <Flex
              key={index}
              direction='column'
              alignItems='center'
              justifyContent='space-evenly'
              py='2rem'
              px='1.5rem'
              bg='black'
              borderTop='2px solid'
              borderColor='red'
            >
              <StyledHeadingLabels fontSize={{ base: '16px' }} mb={3}>
                {item.name}
              </StyledHeadingLabels>

              <Image src={item.img} alt='consultations' my='.5rem' />

              <StyledCardText fontSize={{ base: '16px' }}>
                {item.text}
              </StyledCardText>
            </Flex>
          );
        })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
