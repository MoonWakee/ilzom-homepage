import React, { useState, useContext } from 'react';
import { Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';

import { AppContext } from '../../context/AppContext';

import SponsorButton from '../../shared/SponsorButton';

import { StyledInput, StyledTextArea } from '../../themes/styled';

export const Sponsor_Ship = () => {
  const context = useContext(AppContext);

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py='2rem'
    >
      <Stack
        mb={{ base: 10, lg: 0 }}
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 0, lg: 5 }}
      >
        <FormControl
          isRequired
          isInvalid={context.h_name === '' && buttonClick ? true : false}
          fontFamily='spaceMono'
          color='white'
          mb={10}
        >
          <FormLabel>Enter your company name</FormLabel>
          <StyledInput
            placeholder='Company Name'
            onChange={context.inputChangeHandler}
            name='h_name'
            value={context.h_name}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={context.h_email === '' && buttonClick ? true : false}
          fontFamily='spaceMono'
          color='white'
        >
          <FormLabel>What is your name?</FormLabel>
          <StyledInput
            type='email'
            placeholder='Your name'
            onChange={context.inputChangeHandler}
            name='h_email'
            value={context.h_email}
          />
        </FormControl>
      </Stack>
      <Stack
        mb={{ base: 10, lg: 0 }}
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 0, lg: 5 }}
      >
      <FormControl
        mb={10}
        isRequired
        isInvalid={context.h_bio === '' && buttonClick ? true : false}
        fontFamily='spaceMono'
        color='white'
      >

        <FormLabel>What is your email address? </FormLabel>
        <StyledInput
          placeholder='Your email address'
          onChange={context.inputChangeHandler}
          name='h_bio'
          value={context.h_bio}
        />
      </FormControl>

        <FormControl
          isRequired
          isInvalid={
            context.h_discordHandle === '' && buttonClick ? true : false
          }
          fontFamily='spaceMono'
          color='white'
          mb={10}
        >
          <FormLabel>What is your Graduation Year?</FormLabel>
          <StyledInput
            placeholder="Your graduation year"
            onChange={context.inputChangeHandler}
            name='h_discordHandle'
            value={context.h_discordHandle}
          />
        </FormControl>
        </Stack>

        <FormControl fontFamily='spaceMono' color='white'>
          <FormLabel>How do you want to sponsor iLZOM DAO?</FormLabel>
          <StyledTextArea
            placeholder="Sponsor type"
            name='h_githubHandle'
            onChange={context.inputChangeHandler}
            value={context.h_githubHandle}
          />
        </FormControl>

      
      <SponsorButton
        formType={'hire'}
        updateStage={context.updateStage}
        updateFaqModalStatus={context.updateFaqModalStatus}
        setButtonClickStatus={setButtonClickStatus}
        stageRule={
          context.h_name &&
          context.h_email &&
          context.h_bio &&
          context.h_discordHandle
        }
      />
    </Flex>
  );
};
