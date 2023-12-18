import { phrases } from 'assets/phrases';
import { memo } from 'react';
import styled from 'styled-components';
import { size, theme, timer } from 'styles/constants';

const SideBar = memo(({ currentStep }: { currentStep: number }) => {
  return (
    <SideBarBox>
      {phrases.steps.map((step, idx) => (
        <IndicatorBox key={idx}>
          <Indicator $currentStep={currentStep} $currentIdx={idx + 1}>
            {idx + 1}
          </Indicator>
          <IndicatorHeadBox>
            <IndicatorSubHead>STEP {idx + 1}</IndicatorSubHead>
            <IndicatorHead>{step.toUpperCase()}</IndicatorHead>
          </IndicatorHeadBox>
        </IndicatorBox>
      ))}
    </SideBarBox>
  );
});

const SideBarBox = styled.div`
  flex-basis: 274px;
  flex-shrink: 0;
  height: 565px;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-image: url('./bg-sidebar-desktop.svg'),
    // 이미지가 로드되지 않았을 경우 그라디언트가 출력됨
    linear-gradient(
        142deg,
        rgba(72, 62, 255, 1) 0%,
        rgba(249, 129, 141, 1) 75%,
        rgba(255, 175, 126, 1) 100%
      );
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    flex-basis: 200px;
    flex-direction: row;
    background-image: url('./bg-sidebar-mobile.svg'),
      linear-gradient(
        142deg,
        rgba(72, 62, 255, 1) 0%,
        rgba(249, 129, 141, 1) 75%,
        rgba(255, 175, 126, 1) 100%
      );
    background-size: cover;
    border-radius: 0;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
  }
`;

const IndicatorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Indicator = styled.span<{ $currentStep: number; $currentIdx: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${theme.neutral.alabaster};
  color: ${props =>
    props.$currentStep === props.$currentIdx
      ? theme.primary.marineBlue
      : theme.neutral.alabaster};
  background-color: ${props =>
    props.$currentStep === props.$currentIdx ? theme.neutral.alabaster : 'transparent'};
  border-radius: 50%;
  font-weight: 700;
  font-size: 14px;
  transition: color ${timer.default}, background-color ${timer.default};
`;

const IndicatorHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media screen and (max-width: ${size.desktop}) {
    display: none;
  }
`;

const IndicatorSubHead = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.primary.pastelBlue};
  line-height: 100%;
`;

const IndicatorHead = styled.p`
  color: ${theme.neutral.white};
  font-weight: 500;
  letter-spacing: 1.25px;
`;

export default SideBar;
