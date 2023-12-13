import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { IconThankYou } from 'assets/icons';

export default function StepComplete() {
  return (
    <MainBox>
      <IconThankYou />
      <h1>Thank you!</h1>
      <p>{phrases.step5.subHead}</p>
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
