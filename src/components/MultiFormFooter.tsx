import styled from 'styled-components';
import { PlainButton, SolidButton, SolidPurpleButton } from './common/Button';
import { size, theme } from 'styles/constants';

interface MultiFormFooterProps {
  currentStep: number;
  plan: string;
  isNameVaild: { status: boolean; message: string };
  isEmailValid: boolean;
  isPhoneValid: boolean;
  isForMobile: boolean;
  stepHandler: (num: number) => void;
}

interface StepButtonType {
  disabled: boolean;
  prev: boolean;
  next: boolean;
  finish: boolean;
}

export default function MultiFormFooter({
  currentStep,
  plan,
  isNameVaild,
  isEmailValid,
  isPhoneValid,
  isForMobile,
  stepHandler,
}: MultiFormFooterProps) {
  const currentStepButtons: Record<number, StepButtonType> = {
    1: {
      disabled: !isNameVaild.status || !isEmailValid || !isPhoneValid,
      prev: false,
      next: true,
      finish: false,
    },
    2: {
      disabled: plan === '',
      prev: true,
      next: true,
      finish: false,
    },
    3: {
      disabled: false,
      prev: true,
      next: true,
      finish: false,
    },
    4: {
      disabled: false,
      prev: true,
      next: false,
      finish: true,
    },
    5: {
      disabled: false,
      prev: false,
      next: false,
      finish: false,
    },
  };

  const isFinalStep = currentStep === 5;

  return (
    <ButtonBox $isForMobile={isForMobile} $isFinalStep={isFinalStep}>
      {currentStepButtons[currentStep].next && (
        <SolidButton
          disabled={currentStepButtons[currentStep].disabled}
          onClick={() => {
            stepHandler(1);
          }}
        >
          Next Step
        </SolidButton>
      )}
      {currentStepButtons[currentStep].finish && (
        <SolidPurpleButton
          onClick={() => {
            stepHandler(1);
          }}
        >
          Confirm
        </SolidPurpleButton>
      )}
      {currentStepButtons[currentStep].prev && (
        <PlainButton
          onClick={() => {
            stepHandler(-1);
          }}
        >
          Go Back
        </PlainButton>
      )}
    </ButtonBox>
  );
}

const ButtonBox = styled.div<{ $isFinalStep: boolean; $isForMobile: boolean }>`
  ${props =>
    props.$isForMobile
      ? `display: none;`
      : `
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    ;`}

  @media screen and (max-width: ${size.desktop}) {
    ${props =>
      props.$isForMobile
        ? `
            width: 95%;
            padding: 1rem 0;
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
            background-color: ${theme.neutral.white};
          `
        : `display: none;`}
    ${props => (props.$isFinalStep ? 'display: none;' : '')}
  }
`;
