import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';
import { DescriptionText, PriceText, StrongText } from './common/Fonts';

export default function Step3() {
  return (
    <>
      <HeadBox>
        <Head>{phrases.step3.head}</Head>
        <SubHead>{phrases.step3.subHead}</SubHead>
      </HeadBox>
      <MainBox>
        <AddOnsBox>
          <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Online Service</StrongText>
              <DescriptionText>${phrases.step3.onlineService}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$1/mo</PriceText>
          </AddOnBox>
          <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Larger storage</StrongText>
              <DescriptionText>${phrases.step3.largerStorage}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$2/mo</PriceText>
          </AddOnBox>
          <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Customizable profile</StrongText>
              <DescriptionText>${phrases.step3.CustomizableProfile}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$2/mo</PriceText>
          </AddOnBox>
        </AddOnsBox>
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

const AddOnsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddOnBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border: 1px solid ${theme.neutral.lightGray};
  border-radius: 0.5rem;
  gap: 1.5rem;
`;

const AddOnDescriptionBox = styled.div`
  flex-grow: 1;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
