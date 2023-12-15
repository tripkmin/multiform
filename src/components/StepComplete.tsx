import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { IconThankYou } from 'assets/icons';
import { HeadText, Text } from './common/Fonts';

export default function StepComplete() {
  return (
    <MainBox>
      <IconThankYou />
      <HeadText>Thank you!</HeadText>
      <Text>{phrases.step5.subHead}</Text>
    </MainBox>
  );
}

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > :first-child {
    margin: 1rem;
  }
`;
