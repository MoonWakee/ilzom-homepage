import { Flex } from '@chakra-ui/react';

import { StyledPrimaryButton, StyledSecondaryButton } from '../themes/styled';

import useWarnings from '../hooks/useWarnings';

const SponsorButton = ({
  formType,
  updateStage,
  updateFaqModalStatus,
  setButtonClickStatus,
  stageRule,
  setData,
  dataValues,
  loadingText,
  isLoading = false,
  buttonText = 'Submit'
}) => {
  const { triggerToast } = useWarnings();
  return (
    <Flex
      direction={{ base: 'column-reverse', lg: 'row' }}
      paddingTop='20px'
      justifyContent='flex-end'
    >
      <StyledPrimaryButton
        isLoading={isLoading}
        loadingText={loadingText}
        onClick={async () => {
          if (stageRule) {
            setButtonClickStatus(false);
            let [param1, param2, param3] = dataValues ? dataValues : [];
            dataValues && setData(param1, param2, param3);
            buttonText === 'Next' && updateStage('next');
          } else {
            setButtonClickStatus(true);
            triggerToast('Please fill in all the required fields.');
          }
        }}
      >
        {buttonText}
      </StyledPrimaryButton>
    </Flex>
  );
};

export default SponsorButton;
