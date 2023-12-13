import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';
import { DescriptionText, PriceText, StrongText } from './common/Fonts';

export default function Step4() {
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
              <StrongText>Arcade (Monthly)</StrongText>
              <DescriptionText>Change</DescriptionText>
            </div>
            <StrongText>$9/mo</StrongText>
          </ChargeBox>
          <ChargeBox>
            <DescriptionText>Online service</DescriptionText>
            <StrongText>+$1/mo</StrongText>
          </ChargeBox>
          <ChargeBox>
            <DescriptionText>Larger storage</DescriptionText>
            <StrongText>+$2/mo</StrongText>
          </ChargeBox>
        </ChargeDescriptionBox>
        <ChargeTotalBox>
          <ChargeBox>
            <DescriptionText>Total (per month)</DescriptionText>
            <StrongText>+$12/mo</StrongText>
          </ChargeBox>
        </ChargeTotalBox>
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
