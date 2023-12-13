import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme, timer } from 'styles/constants';
import { DescriptionText, PriceText, StrongText } from './common/Fonts';
import { MouseEvent } from 'react';

interface Step3Props {
  isYearly: boolean;
  addOns: {
    name: string;
    status: boolean;
  }[];
  addOnToggler: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Step3({ isYearly, addOns, addOnToggler }: Step3Props) {
  return (
    <>
      <HeadBox>
        <Head>{phrases.step3.head}</Head>
        <SubHead>{phrases.step3.subHead}</SubHead>
      </HeadBox>
      <MainBox>
        <AddOnsBox>
          {addOns.map(addOn => (
            <AddOnBox
              onClick={addOnToggler}
              data-name={addOn.name}
              $status={addOn.status}>
              <input type="checkbox" checked={addOn.status}></input>
              <AddOnDescriptionBox>
                <StrongText>{addOn.name}</StrongText>
                <DescriptionText>
                  {phrases.step3.addOns.find(el => el.name === addOn.name)?.name}
                </DescriptionText>
              </AddOnDescriptionBox>
              {isYearly ? (
                <PriceText>
                  +${phrases.step3.addOns.find(el => el.name === addOn.name)?.yearlyPrice}
                  /yr
                </PriceText>
              ) : (
                <PriceText>
                  +$
                  {phrases.step3.addOns.find(el => el.name === addOn.name)?.monthlyPrice}
                  /mo
                </PriceText>
              )}
            </AddOnBox>
          ))}
          {/* <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Online service</StrongText>
              <DescriptionText>{phrases.step3.onlineService}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$1/mo</PriceText>
          </AddOnBox>
          <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Larger storage</StrongText>
              <DescriptionText>{phrases.step3.largerStorage}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$2/mo</PriceText>
          </AddOnBox>
          <AddOnBox>
            <input type="checkbox"></input>
            <AddOnDescriptionBox>
              <StrongText>Customizable profile</StrongText>
              <DescriptionText>{phrases.step3.CustomizableProfile}</DescriptionText>
            </AddOnDescriptionBox>
            <PriceText>+$2/mo</PriceText>
          </AddOnBox> */}
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

const AddOnBox = styled.div<{ $status: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border: 1px solid
    ${props => (props.$status ? theme.primary.purplishBlue : theme.neutral.lightGray)};
  background-color: ${props => (props.$status ? theme.neutral.alabaster : '')};
  border-radius: 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
  transition: background-color ${timer.fast}, border ${timer.fast};

  &:hover {
    background-color: ${theme.neutral.alabaster};
  }

  input {
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.neutral.lightGray};
    border-radius: 5px;
    transition: background-color ${timer.fast};
  }

  input:checked {
    background-color: ${theme.primary.purplishBlue};
  }

  input::after {
    position: absolute;
    top: 0;
    left: 3px;
    content: url('icon-checkmark.svg');
  }
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
