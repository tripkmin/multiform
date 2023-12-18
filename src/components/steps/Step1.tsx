import { phrases } from 'assets/phrases';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { theme, timer } from 'styles/constants';
import { Label, SmallRedText } from '../common/Fonts';

interface Step1Props {
  name: string;
  email: string;
  phone: string;
  isNameVaild: { status: boolean; message: string };
  isEmailValid: boolean;
  isPhoneValid: boolean;
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
  nameHandler,
  emailHandler,
  phoneHandler,
}: Step1Props) {
  const [isNameBlurred, setIsNameBlurred] = useState(false);
  const [isEmailBlurred, setIsEmailBlurred] = useState(false);
  const [isPhoneBlurred, setIsPhoneBlurred] = useState(false);

  return (
    <Form>
      <InputBox>
        <LabelBox>
          <Label>Name</Label>
          {!isNameVaild.status && isNameBlurred && (
            <SmallRedText>{isNameVaild.message}</SmallRedText>
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
          placeholder={phrases.step1.namePlaceHolder}
        ></Input>
      </InputBox>
      <InputBox>
        <LabelBox>
          <Label>Email Address</Label>
          {!isEmailValid && isEmailBlurred && (
            <SmallRedText>Please enter a valid email</SmallRedText>
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
          placeholder={phrases.step1.emailPlaceHolder}
        ></Input>
      </InputBox>
      <InputBox>
        <LabelBox>
          <Label>Phone Number</Label>
          {!isPhoneValid && isPhoneBlurred && (
            <SmallRedText>Please enter a valid phone number</SmallRedText>
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
          placeholder={phrases.step1.phonePlaceHolder}
        ></Input>
      </InputBox>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
