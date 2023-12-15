import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';
import { DescriptionText, PriceText, StrongText } from './common/Fonts';
import { PlainButton, SolidButton } from './common/Button';
import { convert } from 'utils/convertFinal';

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
      <HeadBox>
        <Head>{phrases.step4.head}</Head>
        <SubHead>{phrases.step4.subHead}</SubHead>
      </HeadBox>
      <MainBox>
        <ChargeDescriptionBox>
          <ChargeBox>
            <div>
              <StrongText>
                {final.plan} ({final.planDuration})
              </StrongText>
              <DescriptionText
                onClick={() => {
                  stepHandler(-2);
                }}>
                Change
              </DescriptionText>
            </div>
            <StrongText>
              ${final.planPrice}/{isYearly ? 'yr' : 'mo'}
            </StrongText>
          </ChargeBox>
          {final.addOns.map(el => (
            <ChargeBox>
              <DescriptionText>{el.name}</DescriptionText>
              <StrongText>
                +${el.price}/{isYearly ? 'yr' : 'mo'}
              </StrongText>
            </ChargeBox>
          ))}
        </ChargeDescriptionBox>
        <ChargeTotalBox>
          <ChargeBox>
            <DescriptionText>Total (per month)</DescriptionText>
            <StrongText>
              ${final.totalPrice}/{isYearly ? 'yr' : 'mo'}
            </StrongText>
          </ChargeBox>
        </ChargeTotalBox>
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

const MainBox = styled.div``;

const ChargeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChargeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: ${theme.neutral.alabaster};
  border-radius: 0.5rem;

  & > :first-child {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.neutral.lightGray};
  }
`;

const ChargeOptionBox = styled.div``;

const ChargeTotalBox = styled.div`
  padding: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
