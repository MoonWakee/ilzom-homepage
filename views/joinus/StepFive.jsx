import React, { useState, useContext } from 'react';
import { Flex, FormControl, FormLabel, Stack, Tooltip } from '@chakra-ui/react';

import { InfoIcon } from '@chakra-ui/icons';

import RadioBox from '../../shared/RadioBox';
import StageButtonGroup from '../../shared/StageButtonGroup';

import { AppContext } from '../../context/AppContext';

import { StyledInput, StyledTextArea } from '../../themes/styled';

export const StepFive = ({ windowWidth }) => {
  const context = useContext(AppContext);

  const [daoFamiliarity, setDaoFamiliarity] = useState(
    context.j_daoFamiliarity || 'Expert'
  );

  const [availability, setAvailability] = useState(
    context.j_availability || '6-12 hours'
  );

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py='2rem'
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        mb={{ base: 10, lg: 0 }}
        spacing={{ base: 0, lg: 5 }}
      >
        <FormControl isRequired fontFamily='spaceMono' color='white' mb={10}>
          <FormLabel as='legend'>
            여기다가 뭐 쓰지
          </FormLabel>
          <RadioBox
            stack={windowWidth < 400 ? 'vertical' : 'horizontal'}
            options={['Expert', 'Familiar', 'A Little', 'None']}
            updateRadio={setDaoFamiliarity}
            name='j_daoFamiliarity'
            defaultValue={context.j_daoFamiliarity || daoFamiliarity}
            value={context.j_daoFamiliarity || daoFamiliarity}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={context.j_cryptoExp === '' && buttonClick ? true : false}
          fontFamily='spaceMono'
          color='white'
        >
          <FormLabel>뭐 물어볼까</FormLabel>
          <StyledInput
            placeholder='In years'
            onChange={context.inputChangeHandler}
            name='j_cryptoExp'
            value={context.j_cryptoExp}
          />
        </FormControl>
      </Stack>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        mb={{ base: 10, lg: 0 }}
        spacing={{ base: 0, lg: 5 }}
      >
        <FormControl isRequired fontFamily='spaceMono' color='white' mb={10}>
          <FormLabel as='legend'>
            해위{' '}
            <Tooltip
              hasArrow
              placement='top'
              label="팁"
              aria-label='disclaimer tooltip'
            >
              <InfoIcon />
            </Tooltip>
          </FormLabel>
          <RadioBox
            stack={windowWidth < 400 ? 'vertical' : 'horizontal'}
            options={['0-5 hours', '6-12 hours', '13-35 hours', '36+ hours']}
            updateRadio={setAvailability}
            name='j_daoFamiliarity'
            defaultValue={context.j_availability || availability}
            value={context.j_availability || availability}
          />
        </FormControl>
        <FormControl mb={10} fontFamily='spaceMono' color='white'>
          <FormLabel>기타 할 말?</FormLabel>
          <StyledTextArea
            onChange={context.inputChangeHandler}
            name='j_comments'
            value={context.j_comments}
          />
        </FormControl>
      </Stack>

      <StageButtonGroup
        formType={'join'}
        updateStage={context.updateStage}
        updateFaqModalStatus={context.updateFaqModalStatus}
        setButtonClickStatus={setButtonClickStatus}
        stageRule={context.j_cryptoExp !== ''}
        setData={context.setJoinStepFiveData}
        dataValues={[daoFamiliarity, availability]}
      />
    </Flex>
  );
};
