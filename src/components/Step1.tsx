import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';

export default function Step1() {
  return (
    <>
      <HeadBox>
        <Head>{phrases.step1.head}</Head>
        <SubHead>{phrases.step1.subHead}</SubHead>
      </HeadBox>
      <Form>
        <label>Name</label>
        <input type="text" placeholder={phrases.step1.namePlaceHolder}></input>
        <label>Email Address</label>
        <input type="text" placeholder={phrases.step1.emailPlaceHolder}></input>
        <label>Phone Number</label>
        <input type="text" placeholder={phrases.step1.phonePlaceHolder}></input>
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

const MainBox = styled.div``;

const PlansBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const PlanBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.primary.marineBlue};
  border-radius: 0.8rem;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 0.9rem;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
