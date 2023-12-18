import styled from 'styled-components';
import { theme } from 'styles/constants';
import {
  SmallText,
  LinkText,
  BoldBlueText,
  SmallBlueText,
  LargePurpleText,
} from '../common/Fonts';
import { getTotal } from 'utils/convertFinal';

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
  const total = getTotal(plan, isYearly, addOns);

  return (
    <MainBox>
      <ChargeDescriptionBox>
        <ChargeBox>
          <ChargePlanBox>
            <BoldBlueText>
              {total.plan} ({total.planDuration})
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
              }}
            >
              Change
            </LinkText>
          </ChargePlanBox>
          <BoldBlueText>
            ${total.planPrice}/{isYearly ? 'yr' : 'mo'}
          </BoldBlueText>
        </ChargeBox>
        {total.addOns.map(el => (
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
            ${total.totalPrice}/{isYearly ? 'yr' : 'mo'}
          </LargePurpleText>
        </ChargeBox>
      </ChargeTotalBox>
    </MainBox>
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
