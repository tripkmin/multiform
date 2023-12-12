import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';

export default function SideBar() {
  return (
    <SideBarBox>
      {phrases.steps.map((step, idx) => (
        <IndicatorBox key={idx}>
          <Indicator>{idx + 1}</Indicator>
          <IndicatorHeadBox>
            <IndicatorSubHead>STEP {idx + 1}</IndicatorSubHead>
            <IndicatorHead>{step.toUpperCase()}</IndicatorHead>
          </IndicatorHeadBox>
        </IndicatorBox>
      ))}
    </SideBarBox>
  );
}

const SideBarBox = styled.div`
  flex-basis: 274px;
  flex-shrink: 0;
  height: 565px;
  padding: 1.5rem;
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
  gap: 1rem;
`;

const IndicatorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
`;

const Indicator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${theme.neutral.alabaster};
  color: ${theme.neutral.alabaster};
  border-radius: 50%;
`;

const IndicatorHeadBox = styled.div``;

const IndicatorSubHead = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.primary.pastelBlue};
`;

const IndicatorHead = styled.p`
  color: ${theme.neutral.white};
  letter-spacing: 1px;
`;
