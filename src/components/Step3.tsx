import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme, timer } from 'styles/constants';
import {
  SmallText,
  BoldPurpleText,
  BoldBlueText,
  PurpleText,
  MediumPurpleText,
} from './common/Fonts';
import { MouseEvent } from 'react';
import { PlainButton, SolidButton } from './common/Button';

interface Step3Props {
  isYearly: boolean;
  addOns: {
    name: string;
    status: boolean;
  }[];
  stepHandler: (num: number) => void;
  addOnToggler: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Step3({
  isYearly,
  addOns,
  stepHandler,
  addOnToggler,
}: Step3Props) {
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
              tabIndex={1}
              onClick={addOnToggler}
              data-name={addOn.name}
              $status={addOn.status}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  addOnToggler(e as unknown as MouseEvent<HTMLDivElement>);
                }
              }}
            >
              <input type="checkbox" checked={addOn.status}></input>
              <AddOnDescriptionBox>
                <BoldBlueText>{addOn.name}</BoldBlueText>
                <SmallText>
                  {phrases.step3.addOns.find(el => el.name === addOn.name)?.name}
                </SmallText>
              </AddOnDescriptionBox>
              {isYearly ? (
                <MediumPurpleText>
                  +${phrases.step3.addOns.find(el => el.name === addOn.name)?.yearlyPrice}
                  /yr
                </MediumPurpleText>
              ) : (
                <MediumPurpleText>
                  +$
                  {phrases.step3.addOns.find(el => el.name === addOn.name)?.monthlyPrice}
                  /mo
                </MediumPurpleText>
              )}
            </AddOnBox>
          ))}
        </AddOnsBox>
      </MainBox>
      <ButtonBox>
        <SolidButton
          onClick={() => {
            stepHandler(1);
          }}
        >
          Next Step
        </SolidButton>
        <PlainButton
          onClick={() => {
            stepHandler(-1);
          }}
        >
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

const AddOnsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AddOnBox = styled.div<{ $status: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid
    ${props => (props.$status ? theme.primary.purplishBlue : theme.neutral.lightGray)};
  background-color: ${props => (props.$status ? theme.neutral.alabaster : '')};
  border-radius: 0.5rem;
  gap: 1.5rem;
  cursor: pointer;
  transition: background-color ${timer.fast}, border ${timer.fast};
  user-select: none;

  &:hover {
    background-color: ${theme.neutral.alabaster};
  }

  &:focus {
    outline: 2px solid ${theme.primary.purplishBlue};
  }

  input {
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.neutral.lightGray};
    border-radius: 5px;
    transition: background-color ${timer.fast};
    flex-shrink: 0;
  }

  input:checked {
    background-color: ${theme.primary.purplishBlue};
  }

  input::after {
    position: absolute;
    top: -1px;
    left: 3px;
    content: url('icon-checkmark.svg');
  }
`;

const AddOnDescriptionBox = styled.div`
  flex-grow: 1;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
