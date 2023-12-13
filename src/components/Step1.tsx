import { phrases } from 'assets/phrases';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/constants';

interface Step1Props {
  name: string;
  email: string;
  phone: string;
  nameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Step1({
  name,
  email,
  phone,
  nameHandler,
  emailHandler,
  phoneHandler,
}: Step1Props) {
  return (
    <>
      <HeadBox>
        <Head>{phrases.step1.head}</Head>
        <SubHead>{phrases.step1.subHead}</SubHead>
      </HeadBox>
      <Form>
        <LabelBox>
          <Label>Name</Label>
          <Warning>This field is required</Warning>
        </LabelBox>
        <input
          onChange={nameHandler}
          value={name}
          type="text"
          placeholder={phrases.step1.namePlaceHolder}
        ></input>
        <Label>Email Address</Label>
        <input
          type="text"
          value={email}
          onChange={emailHandler}
          placeholder={phrases.step1.emailPlaceHolder}
        ></input>
        <Label>Phone Number</Label>
        <input
          type="text"
          value={phone}
          onChange={phoneHandler}
          placeholder={phrases.step1.phonePlaceHolder}
        ></input>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    border: 1px solid ${theme.neutral.lightGray};
    padding: 0.8rem;
    border-radius: 0.5rem;

    &:focus {
      border: 1px solid ${theme.primary.marineBlue};
    }

    &:invalid {
      border: 1px solid ${theme.primary.strawberryRed};
    }
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
`;

const Warning = styled.p`
  font-size: 14px;
  color: ${theme.primary.strawberryRed};
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
