import { phrases } from 'assets/phrases';
import styled from 'styled-components';
import { theme } from 'styles/constants';

export default function StepHeader() {
  return (
    <HeadBox>
      <Head>{phrases.step2.head}</Head>
      <SubHead>{phrases.step2.subHead}</SubHead>
    </HeadBox>
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
