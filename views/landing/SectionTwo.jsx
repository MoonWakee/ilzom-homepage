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
      my='4rem'
      mb='0'
      bg='background_brown'
      placeItems='center'
    >
      <Box width={{ base: '500px', lg: '500px' }}>
        <Image src={outsider} alt='raid fantasy' placeholder='blur' />
      </Box>
      <VStack spacing={5} justifyContent='center' ml={{ md: '1rem' }}>
        <StyledPrimaryHeading fontSize={{ base: '1.5rem', lg: '36px' }}>
          About Us
        </StyledPrimaryHeading>
        <div>
          <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
          iLZOM DAO는 미국 내 거주하는 유학생들이 자유롭게 자신들의 프로젝트 아이디어를 
          공유하고 디벨롭할 수 있는 그룹입니다. 자신의 포트폴리오를 빌딩 시킬 수 있을 뿐만 
          아니라 미국 내 다양한 한인 유학생들과 네트워킹을 할 수 있는 기회를 제공합니다. 또한 여러 
          회사들로부터 후원을 받아 프로젝트를 실행, 실제 회사 프로젝트에 참여, 혹은 회사와 파트너쉽을 
          맺어 함께 협업하는 등의 기회도 있습니다.
          </StyledBodyText>
          <br></br>
        </div>
        <br />
        <StyledPrimaryButton
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
