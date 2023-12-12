import { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/constants';
import SideBar from './SideBar';
import Step1 from './Step1';
import Step2 from './common/Step2';

export default function MultiForm() {
  /* 
  관리해야 하는 state들
    { 
      currentStep: number,
      name: string(3자 이상으로),
      email: string(정규식으로 체크),
      phone: string(정규식으로 체크),
      plan: "arcade" || "advanced" || "pro"
      planDuration: "monthly" || "Yearly",
      addOns: ("online" || "storage" || "profile")[]
    }
  */

  const [state, setState] = useState({
    currentStep: 1,
    name: '',
    email: '',
    phone: '',
    plan: '',
    planDuration: '',
    addOns: [],
  });

  return (
    <MultiFormBox>
      <SideBar />
      <StepBox>
        <Step1 />
        {/* <Step2 /> */}
      </StepBox>
    </MultiFormBox>
  );
}

const MultiFormBox = styled.div`
  display: flex;
  width: 1024px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${theme.neutral.white};
  gap: 2rem;
`;

const StepBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;

  button {
    background-color: ${theme.primary.marineBlue};
    color: ${theme.neutral.white};
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;
