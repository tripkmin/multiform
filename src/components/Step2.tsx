import { IconAdvanced, IconArcade, IconPro } from 'assets/icons';
import { phrases } from 'assets/phrases';
import { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { theme, timer } from 'styles/constants';
import { PlainButton, SolidButton } from './common/Button';
import { PLANS } from 'assets/data';

interface Step2Props {
  currentPlan: string;
  isYearly: boolean;
  stepHandler: (num: number) => void;
  planHandler: (e: MouseEvent<HTMLDivElement>) => void;
  isYearlyToggler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Step2({
  currentPlan,
  isYearly,
  stepHandler,
  planHandler,
  isYearlyToggler,
}: Step2Props) {
  return (
    <>
      <HeadBox>
        <Head>{phrases.step2.head}</Head>
        <SubHead>{phrases.step2.subHead}</SubHead>
      </HeadBox>
      <MainBox>
        <PlansBox>
          {PLANS.map(plan => (
            <PlanBox
              tabIndex={1}
              $currentPlan={currentPlan}
              data-plan={plan.name}
              onClick={planHandler}
              key={plan.name}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  planHandler(e as unknown as MouseEvent<HTMLDivElement>);
                }
              }}>
              {plan.icon}
              <div>
                <PlanMain $isYearly={isYearly}>
                  <PlanName>{plan.name}</PlanName>
                  <PlanDuration>
                    ${isYearly ? `${plan.yearly}/yr` : `${plan.monthly}/mo`}
                  </PlanDuration>
                </PlanMain>
                <PlanDescription $isYearly={isYearly}>2 months free</PlanDescription>
              </div>
            </PlanBox>
          ))}
        </PlansBox>
        <DurationToggleBox>
          <CheckLabel
            tabIndex={1}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                isYearlyToggler(e as unknown as ChangeEvent<HTMLInputElement>);
              }
            }}
            $isYearly={!isYearly}>
            Monthly
          </CheckLabel>
          <input type="checkbox" checked={isYearly} onChange={isYearlyToggler}></input>
          <CheckLabel
            tabIndex={1}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                isYearlyToggler(e as unknown as ChangeEvent<HTMLInputElement>);
              }
            }}
            $isYearly={isYearly}>
            Yearly
          </CheckLabel>
        </DurationToggleBox>
      </MainBox>
      <ButtonBox>
        <SolidButton
          onClick={() => {
            stepHandler(1);
          }}>
          Next Step
        </SolidButton>
        <PlainButton
          onClick={() => {
            stepHandler(-1);
          }}>
          Go Back
        </PlainButton>
      </ButtonBox>
    </>
  );
}

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Head = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.primary.marineBlue};
`;

const SubHead = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.neutral.coolGray};
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PlansBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const PlanBox = styled.div<{ $currentPlan: string; 'data-plan': string }>`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1rem;
  border: ${props =>
    props.$currentPlan === props['data-plan']
      ? `1px solid ${theme.primary.purplishBlue}`
      : `1px solid ${theme.neutral.lightGray}`};
  border-radius: 0.5rem;
  background-color: ${props =>
    props.$currentPlan === props['data-plan'] ? theme.neutral.alabaster : 'transparent'};
  cursor: pointer;
  transition: border ${timer.default}, background-color ${timer.default};

  &:hover {
    background-color: ${theme.neutral.alabaster};
  }

  &:focus {
    outline: 2px solid ${theme.primary.purplishBlue};
  }
`;

const PlanName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.primary.marineBlue};
  letter-spacing: -0.25px;
`;

const PlanMain = styled.div<{ $isYearly: boolean }>`
  transform: translateY(${props => (props.$isYearly ? '0' : '26px')});
  transition: transform ${timer.default};
`;

const PlanDuration = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.neutral.coolGray};
`;

const PlanDescription = styled.p<{ $isYearly: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.primary.marineBlue};
  opacity: ${props => (props.$isYearly ? 1 : 0)};
  transition: opacity ${timer.default};
  /* transform: translateY(${props => (props.$isYearly ? '0' : '')}); */
`;

const DurationToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${theme.neutral.alabaster};

  p {
    font-size: 16px;
    font-weight: 500;
    transition: color ${timer.default};
  }

  input {
    appearance: none;
    position: relative;
    border-radius: 10px;
    width: 36px;
    height: 20px;
    background-color: ${theme.primary.marineBlue};
    cursor: pointer;

    &:focus {
      appearance: initial;
    }
  }

  input::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: translateX(0);
    background-color: ${theme.neutral.alabaster};
    transition: transform ${timer.default};
  }

  input:checked::before {
    transform: translateX(16px);
  }
`;

const CheckLabel = styled.p<{ $isYearly: boolean }>`
  color: ${props =>
    props.$isYearly ? theme.primary.marineBlue : theme.neutral.lightGray};
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
