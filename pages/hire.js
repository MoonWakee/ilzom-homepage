import { useState, useEffect, useContext } from 'react';
import {
  Box,
  Flex,
  CircularProgress,
  CircularProgressLabel
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';
import { FAQ } from '../shared/Faq';

import { Intro } from '../views/hireus/Intro';
import { Join_StepTwo } from '../views/joinus/StepTwo';

import {Sponsor_Ship} from '../views/hireus/Sponsorship_form';
import { StepOne } from '../views/hireus/StepOne';
import { StepTwo } from '../views/hireus/StepTwo';
import { StepThree } from '../views/hireus/StepThree';
import { StepFour } from '../views/hireus/StepFour';
import { Confirmation } from '../views/hireus/Confirmation';

import { StyledSecondaryHeading } from '../themes/styled';

const stageHeadings = {
  1: 'Personal Details',
  2: 'Project Details',
  3: 'Required Services',
  4: 'Additional Information'
};

const Hire = () => {
  const context = useContext(AppContext);

  const [windowWidth, setWindowWidth] = useState('');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.removeEventListener('resize', () => {});
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Flex
      width='100vw'
      minHeight='100vh'
      direction='column'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box px={{ base: '2rem', lg: '5rem' }} w='100%'>
        <Header windowWidth={windowWidth} navLinks={false} />
      </Box>

      {context.stage === 1 && <Sponsor_Ship />}

      <FAQ />
      <Footer />
    </Flex>
  );
};

export default Hire;
