import styled from 'styled-components';
import { HeadText, Text } from './common/Fonts';
import { phrases } from 'assets/phrases';
import { IconThankYou } from 'assets/icons';
import { memo } from 'react';

interface StepProps {
  currentStep: number;
}

interface StepPhrasesType {
  head: string;
  subHead: string;
}

const MultiFormHeader = memo(({ currentStep }: StepProps) => {
  const currentStepPhrases: Record<number, StepPhrasesType> = {
    1: phrases.step1,
    2: phrases.step2,
    3: phrases.step3,
    4: phrases.step4,
    5: phrases.step5,
  };

  const isFinalStep = currentStep === 5;

  return (
    <HeadBox $isFinalStep={isFinalStep}>
      {isFinalStep && <IconThankYou />}
      <HeadText>{currentStepPhrases[currentStep].head}</HeadText>
      <Text>{currentStepPhrases[currentStep].subHead}</Text>
    </HeadBox>
  );
});
const HeadBox = styled.div<{ $isFinalStep: boolean }>`
  display: flex;
  flex-direction: column;

  ${props =>
    props.$isFinalStep
      ? `
          justify-content: center;
          align-items: center;
          gap: 1rem;
          text-align: center;
        `
      : `gap: 0.8rem;`}
`;

export default MultiFormHeader;
