import React, { useContext } from 'react';
import { Flex } from '@chakra-ui/react';

import { AppContext } from '../../context/AppContext';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledBodyText
} from '../../themes/styled';

export const Intro = () => {
  const context = useContext(AppContext);
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
          Apply to Join iLZOM DAO
        </StyledPrimaryHeading>

        <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
          일 좀 다오 소개글 컴온~
        </StyledBodyText>
        <br />

        <StyledPrimaryButton
          fontSize={{ base: '16px', lg: '18px' }}
          onClick={() => {
            context.updateStage('next');
          }}
        >
          Start Application
        </StyledPrimaryButton>
      </Flex>
    </>
  );
};
