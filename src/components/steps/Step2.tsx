import { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import { size, theme, timer } from 'styles/constants';
import { PLANS } from 'assets/data';
import { SmallBlueText, SmallText, MediumText, MediumBlueText } from '../common/Fonts';

interface Step2Props {
  currentPlan: string;
  isYearly: boolean;
  planHandler: (e: MouseEvent<HTMLDivElement>) => void;
  isYearlyToggler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Step2({
  currentPlan,
  isYearly,
  planHandler,
  isYearlyToggler,
}: Step2Props) {
  return (
    <MainBox>
      <PlansBox>
        {PLANS.map(plan => (
          <PlanBox
            tabIndex={1}
            $isYearly={isYearly}
            $currentPlan={currentPlan}
            data-plan={plan.name}
            onClick={planHandler}
            key={plan.name}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                planHandler(e as unknown as MouseEvent<HTMLDivElement>);
              }
            }}
          >
            {plan.icon}
            <PlanMainBox>
              <PlanMain $isYearly={isYearly}>
                <MediumBlueText>{plan.name}</MediumBlueText>
                <SmallText>
                  ${isYearly ? `${plan.yearly}/yr` : `${plan.monthly}/mo`}
                </SmallText>
              </PlanMain>
              <PlanDescription $isYearly={isYearly}>2 months free</PlanDescription>
            </PlanMainBox>
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
          $isYearly={!isYearly}
        >
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
          $isYearly={isYearly}
        >
          Yearly
        </CheckLabel>
      </DurationToggleBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PlansBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PlanBox = styled.div<{
  $isYearly: boolean;
  $currentPlan: string;
  'data-plan': string;
}>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
  border: ${props =>
    props.$currentPlan === props['data-plan']
      ? `1px solid ${theme.primary.purplishBlue}`
      : `1px solid ${theme.neutral.lightGray}`};
  border-radius: 0.5rem;
  background-color: ${props =>
    props.$currentPlan === props['data-plan'] ? theme.neutral.alabaster : 'transparent'};
  cursor: pointer;
  transition: border ${timer.fast}, background-color ${timer.fast};

  &:hover {
    background-color: ${theme.neutral.alabaster};
  }

  &:focus {
    outline: 2px solid ${theme.primary.purplishBlue};
  }

  @media screen and (max-width: ${size.desktop}) {
    flex-direction: row;
    gap: 1rem;
    height: ${props => (props.$isYearly ? '104px' : '80px')};
    transition: height ${timer.default};
    overflow: hidden;
  }
`;

const PlanMainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const PlanMain = styled.div<{ $isYearly: boolean }>`
  transform: translateY(${props => (props.$isYearly ? '0' : '26px')});
  transition: transform ${timer.default};
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  @media screen and (max-width: ${size.desktop}) {
    transform: translateY(0);
  }
`;

const PlanDescription = styled(SmallBlueText)<{ $isYearly: boolean }>`
  opacity: ${props => (props.$isYearly ? 1 : 0)};
  transition: opacity ${timer.default};
`;

const DurationToggleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${theme.neutral.alabaster};

  p {
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

const CheckLabel = styled(MediumText)<{ $isYearly: boolean }>`
  color: ${props =>
    props.$isYearly ? theme.primary.marineBlue : theme.neutral.lightGray};
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
