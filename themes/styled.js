import styled from '@emotion/styled';

import { Flex, Button, Heading, Text, Textarea, Input } from '@chakra-ui/react';

import { theme } from './theme';

export const StyledFlex = styled(Flex)`
  background-color: black;
  padding: 24px;
  border-radius: 3px;
  margin-left: 1rem;
  margin-right: 1rem;
  max-width: 450px;
  flex-direction: column;
  justify-content: center;
`;

export const StyledGridChild = styled.div`
  width: 100%;
  break-inside: avoid;
  margin-bottom: 1em;
  padding: 2rem;
  /* border: 5px solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 4px 9px 18px -7px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.blackLight};
  }
`;

// --------- Headings ------------

export const StyledPrimaryHeading = styled(Heading)`
  font-family: ${theme.fonts.spaceMono};
  letter-spacing: 1.2px;
  line-height: 1.5;
  color: white;
`;

export const StyledSecondaryHeading = styled(Heading)`
  font-family: ${theme.fonts.uncial};
  letter-spacing: 1.2px;
  color: ${theme.colors.basecolor};
`;

export const StyledHeadingLabels = styled(Heading)`
  font-family: ${theme.fonts.texturina};
  letter-spacing: 2px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  color: white;
`;

// --------- Texts ------------

export const StyledBodyText = styled(Text)`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '720px')};
  font-family: ${theme.fonts.texturina};
  line-height: 1.8;
  color: white;
  /* text-align: justify; */
`;

export const StyledCheckText = styled(Text)`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '650px')};
  font-family: ${theme.fonts.texturina};
  line-height: 2.5;
  color: white;
`

export const StyledCardText = styled(Text)`
  max-width: 720px;
  font-family: ${theme.fonts.texturina};
  line-height: 1.8;
  color: white;
  text-align: left;
`;

export const StyledMessageText = styled(Text)`
  font-family: ${({ font }) => (font ? font : theme.fonts.jetbrains)};
  color: ${({ color }) => (color ? color : 'black')};
  line-height: 1.4;
`;

export const StyledFooterHeaderText = styled(Text)`
  font-family: ${theme.fonts.spaceMono};
  font-weight: bold;
  color: ${theme.colors.basecolor};
`;

// --------- Buttons ------------

export const StyledPrimaryButton = styled(Button)`
  min-width: 160px;
  height: 50px;
  font-family: ${theme.fonts.spaceMono};
  text-transform: uppercase;
  color: white;
  border-radius: 2px;
  background: ${theme.colors.basecolor};
  padding-left: 24px;
  padding-right: 24px;
  &:hover {
    background: ${theme.colors.basedarker};
  }
`;

export const StyledSecondaryButton = styled(Button)`
  // min-width: 160px;
  // height: 50px;
  // font-family: ${theme.fonts.spaceMono};
  // text-transform: uppercase;
  // border: 2px solid ${theme.colors.basedarkest};
  // border-radius: 3px;
  // color: black;
  // background: white;
  // box-decoration-break: clone;
  // padding-left: 24px;
  // padding-right: 24px;
  // &:hover {
  //   background: black;
  //   opacity: 0.6;
  
  min-width: 160px;
  height: 50px;
  font-family: ${theme.fonts.spaceMono};
  text-transform: uppercase;
  color: white;
  border-radius: 2px;
  background: ${theme.colors.basecolor};
  padding-left: 24px;
  padding-right: 24px;
  &:hover {
    background: ${theme.colors.basedarker};
  }
  }
`;

// --------- Form Inputs ------------

export const StyledInput = styled(Input)`
  background: ${theme.colors.blackLight};
  border: none;
  border-radius: 0;
`;

export const StyledTextArea = styled(Textarea)`
  background: ${theme.colors.blackLight};
  border: none;
  border-radius: 0;
`;
