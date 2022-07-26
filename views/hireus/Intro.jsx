import React, { useContext } from 'react';
import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import { AppContext } from '../../context/AppContext';
import useWarnings from '../../hooks/useWarnings';
import { theme } from '../../themes/theme';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledBodyText,
  StyledMessageText,
  StyledSecondaryButton
} from '../../themes/styled';

export const Intro = () => {
  const context = useContext(AppContext);

  const { triggerToast } = useWarnings();
  return (
    <>
      <Flex
        direction='column'
        py='2rem'
        px={{ base: '1rem', lg: '4rem' }}
        mx='1rem'
      >
        <StyledPrimaryHeading
          fontSize={{ base: '1.5rem', lg: '36px' }}
          mb='1rem'
        >
          일 좀 다오 후원 좀
        </StyledPrimaryHeading>

        <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
          후원해줘어어어어어어어어어어
        </StyledBodyText>
        <br />

        <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
          돈 좀 다오ㅋㅋ{' '}
          <ChakraLink
            href='https://app.honeyswap.org/#/swap?inputCurrency=0x18e9262e68cc6c6004db93105cc7c001bb103e49&outputCurrency=0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1&chainId=100'
            isExternal
            textDecoration='underline'
            color={theme.colors.basecolor}
          >
            500 $iLZ
          </ChakraLink>{' '}
          이 만큼만 다오~{' '}
        </StyledBodyText>
        <br />

        <Flex
          direction='column'
          bgColor='white'
          borderRadius='0.5rem'
          p='0.5rem 1rem'
          maxW='720px'
        >
          <StyledMessageText
            fontSize={{ base: '1rem', lg: '18px' }}
            fontWeight='bold'
            mb='.5rem'
          >
            IMPORTANT
          </StyledMessageText>
          <StyledMessageText fontSize={{ base: '1rem', lg: '16px' }}>
            그냥 있었던 박스 냅둠:{' '}
            <ChakraLink
              href='https://moonwakee.github.io/ilzom-DAO/'
              isExternal
              textDecoration='underline'
            >
              iLZOM DAO Handbook
            </ChakraLink>
          </StyledMessageText>
        </Flex>
        <br />

        {context.signerAddress && (
          <Flex w='100%' direction={{ base: 'column', md: 'row', lg: 'row' }}>
            <StyledPrimaryButton
              w='100%'
              mr='1rem'
              mb='1rem'
              fontSize={{ base: '16px', lg: '18px' }}
              onClick={() => {
                if (context.chainId !== 100) {
                  triggerToast('Please switch to the Gnosis Network.');
                  return;
                }
                context.updateStage('next');
              }}
            >
              New Consultation
            </StyledPrimaryButton>

            <Link href='/dashboard' passHref>
              <StyledSecondaryButton
                w='100%'
                fontSize={{ base: '16px', lg: '18px' }}
              >
                View My Submissions
              </StyledSecondaryButton>
            </Link>
          </Flex>
        )}
      </Flex>
    </>
  );
};
