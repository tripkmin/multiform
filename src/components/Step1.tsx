import { phrases } from 'assets/phrases';
import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { theme, timer } from 'styles/constants';
import { SolidButton } from './common/Button';

interface Step1Props {
  name: string;
  email: string;
  phone: string;
  isNameVaild: { status: boolean; message: string };
  isEmailValid: boolean;
  isPhoneValid: boolean;
  stepHandler: (num: number) => void;
  nameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Step1({
  name,
  email,
  phone,
  isNameVaild,
  isEmailValid,
  isPhoneValid,
  stepHandler,
  nameHandler,
  emailHandler,
  phoneHandler,
}: Step1Props) {
  const [isNameBlurred, setIsNameBlurred] = useState(false);
  const [isEmailBlurred, setIsEmailBlurred] = useState(false);
  const [isPhoneBlurred, setIsPhoneBlurred] = useState(false);

  return (
    <>
      <HeadBox>
        <Head>{phrases.step1.head}</Head>
        <SubHead>{phrases.step1.subHead}</SubHead>
      </HeadBox>
      <Form>
        <LabelBox>
          <Label>Name</Label>
          {isNameVaild.status && isNameBlurred ? null : (
            <Warning>{isNameVaild.message}</Warning>
          )}
        </LabelBox>
        <Input
          type="text"
          $isValid={isNameVaild.status}
          $isBlurred={isNameBlurred}
          value={name}
          onChange={nameHandler}
          onBlur={() => {
            setIsNameBlurred(true);
          }}
          placeholder={phrases.step1.namePlaceHolder}></Input>
        <LabelBox>
          <Label>Email Address</Label>
          {!isEmailValid && isEmailBlurred && (
            <Warning>Please enter a valid email format</Warning>
          )}
        </LabelBox>
        <Input
          type="text"
          $isValid={isEmailValid}
          $isBlurred={isEmailBlurred}
          value={email}
          onChange={emailHandler}
          onBlur={() => {
            setIsEmailBlurred(true);
          }}
          placeholder={phrases.step1.emailPlaceHolder}></Input>
        <LabelBox>
          <Label>Phone Number</Label>
          {!isPhoneValid && isPhoneBlurred && (
            <Warning>Please enter a valid phone number format.</Warning>
          )}
        </LabelBox>
        <Input
          type="text"
          $isValid={isPhoneValid}
          $isBlurred={isPhoneBlurred}
          value={phone}
          onChange={phoneHandler}
          onBlur={() => {
            setIsPhoneBlurred(true);
          }}
          placeholder={phrases.step1.phonePlaceHolder}></Input>
      </Form>
      <ButtonBox>
        <SolidButton
          onClick={() => {
            stepHandler(1);
          }}
          disabled={!isNameVaild || !isEmailValid || !isPhoneValid}>
          Next Step
        </SolidButton>
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

const SubHead = styled.p`
  color: ${theme.neutral.coolGray};
  line-height: 150%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 14px;
    font-weight: 700;
  }
`;

const Input = styled.input<{ $isValid: boolean; $isBlurred: boolean }>`
  border: 1px solid
    ${props =>
      !props.$isValid && props.$isBlurred
        ? theme.primary.strawberryRed
        : theme.neutral.lightGray};
  padding: 0.8rem;
  border-radius: 0.5rem;
  transition: border ${timer.default};

  &:focus {
    border: 1px solid ${theme.primary.purplishBlue};
  }
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.primary.marineBlue};
`;

const Warning = styled.p`
  font-size: 14px;
  color: ${theme.primary.strawberryRed};
  line-height: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
