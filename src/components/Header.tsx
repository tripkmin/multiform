import styled from 'styled-components';
import { HeadText, Text } from './common/Fonts';
import { phrases } from 'assets/phrases';

interface StepProps {
  step: 'step1' | 'step2' | 'step3' | 'step4';
}

export default function Header({ step }: StepProps) {
  const currentStepPhrases = phrases[step];

  return (
    <HeadBox>
      <HeadText>{currentStepPhrases.head}</HeadText>
      <Text>{currentStepPhrases.subHead}</Text>
    </HeadBox>
  );
}

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
