import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { IconThankYou } from 'assets/icons';
import { theme } from 'styles/constants';

export default function StepComplete() {
  return (
    <MainBox>
      <IconThankYou />
      <Head>Thank you!</Head>
      <SubHead>{phrases.step5.subHead}</SubHead>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin: 1rem;
  }
`;

const Head = styled.h1`
  font-size: 2rem;
  color: ${theme.primary.marineBlue};
`;
const SubHead = styled.p`
  color: ${theme.neutral.coolGray};
  text-align: center;
`;
