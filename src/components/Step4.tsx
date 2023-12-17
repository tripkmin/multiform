import styled from 'styled-components';
import { theme } from 'styles/constants';
import {
  SmallText,
  LinkText,
  BoldBlueText,
  SmallBlueText,
  LargePurpleText,
} from './common/Fonts';
import { PlainButton, SolidPurpleButton } from './common/Button';
import { convert } from 'utils/convertFinal';
import Header from './Header';

interface Step4Props {
  plan: string;
  isYearly: boolean;
  addOns: {
    name: string;
    status: boolean;
  }[];
  stepHandler: (num: number) => void;
}

export default function Step4({ plan, isYearly, addOns, stepHandler }: Step4Props) {
  // 변수명 수정할 것
  const final = convert(plan, isYearly, addOns);

  return (
    <>
      <Header step="step4" />
      <MainBox>
        <ChargeDescriptionBox>
          <ChargeBox>
            <ChargePlanBox>
              <BoldBlueText>
                {final.plan} ({final.planDuration})
              </BoldBlueText>
              <LinkText
                tabIndex={1}
                onClick={() => {
                  stepHandler(-2);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    stepHandler(-2);
                  }
                }}>
                Change
              </LinkText>
            </ChargePlanBox>
            <BoldBlueText>
              ${final.planPrice}/{isYearly ? 'yr' : 'mo'}
            </BoldBlueText>
          </ChargeBox>
          {final.addOns.map(el => (
            <ChargeBox>
              <SmallText>{el.name}</SmallText>
              <SmallBlueText>
                +${el.price}/{isYearly ? 'yr' : 'mo'}
              </SmallBlueText>
            </ChargeBox>
          ))}
        </ChargeDescriptionBox>
        <ChargeTotalBox>
          <ChargeBox>
            <SmallText>Total (per month)</SmallText>
            <LargePurpleText>
              ${final.totalPrice}/{isYearly ? 'yr' : 'mo'}
            </LargePurpleText>
          </ChargeBox>
        </ChargeTotalBox>
      </MainBox>
      <ButtonBox>
        <SolidPurpleButton
          onClick={() => {
            stepHandler(1);
          }}>
          Confirm
        </SolidPurpleButton>
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

const MainBox = styled.div``;

const ChargeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChargePlanBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ChargeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem;
  background-color: ${theme.neutral.alabaster};
  border-radius: 0.5rem;

  & > :first-child {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.neutral.lightGray};
  }
`;

const ChargeTotalBox = styled.div`
  padding: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
