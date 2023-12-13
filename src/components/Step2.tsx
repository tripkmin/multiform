import { IconAdvanced, IconArcade, IconPro } from 'assets/icons';
import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';

export default function Step2() {
  const plans = [
    {
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      icon: <IconArcade />,
    },
    {
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      icon: <IconAdvanced />,
    },
    {
      name: 'Arcade',
      monthly: 15,
      yearly: 150,
      icon: <IconPro />,
    },
  ];

  return (
    <>
      <HeadBox>
        <Head>{phrases.step2.head}</Head>
        <SubHead>{phrases.step2.subHead}</SubHead>
      </HeadBox>
      <MainBox>
        <PlansBox>
          {plans.map(plan => (
            <PlanBox>
              {plan.icon}
              <div>
                <PlanName>{plan.name}</PlanName>
                <PlanDuration>${plan.monthly}/mo</PlanDuration>
              </div>
            </PlanBox>
          ))}
        </PlansBox>
        <DurationToggleBox>
          <p>Monthly</p>
          <input type="checkbox"></input>
          <p>Yearly</p>
        </DurationToggleBox>
      </MainBox>
      <ButtonBox>
        <button>Next Step</button>
        <button>Go Back</button>
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

const PlanBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.neutral.lightGray};
  border-radius: 0.5rem;
  gap: 2.5rem;
`;

const PlanName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.primary.marineBlue};
  letter-spacing: -0.25px;
`;
const PlanDuration = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.neutral.coolGray};
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
    color: ${theme.neutral.coolGray};
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
