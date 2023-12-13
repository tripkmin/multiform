import { ChangeEvent, useReducer, useState } from 'react';
import styled from 'styled-components';
import { size, theme } from 'styles/constants';
import SideBar from './SideBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import StepComplete from './StepComplete';

const CHANGE_NAME = 'CHANGE_NAME' as const;
const CHANGE_EMAIL = 'CHANGE_EMAIL' as const;
const CHANGE_PHONE = 'CHANGE_PHONE' as const;

export const changeName = (str: string) => ({
  type: CHANGE_NAME,
  payload: str,
});

export const changeEmail = (str: string) => ({
  type: CHANGE_EMAIL,
  payload: str,
});

export const changePhone = (str: string) => ({
  type: CHANGE_PHONE,
  payload: str,
});

type FormAction =
  | ReturnType<typeof changeName>
  | ReturnType<typeof changeEmail>
  | ReturnType<typeof changePhone>;

const initialState = {
  currentStep: 1,
  name: '',
  email: '',
  phone: '',
  plan: '',
  planDuration: '',
  addOns: [] as string[],
};

type FormState = typeof initialState;

function formReducer(state: FormState = initialState, action: FormAction): FormState {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PHONE:
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}

export default function MultiForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_NAME', payload: e.target.value });
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_EMAIL', payload: e.target.value });
  };

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_PHONE', payload: e.target.value });
  };

  return (
    <MultiFormBox>
      <SideBar currentStep={state.currentStep} />
      <StepBox>
        <Step1
          name={state.name}
          email={state.email}
          phone={state.phone}
          nameHandler={nameHandler}
          emailHandler={emailHandler}
          phoneHandler={phoneHandler}
        />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
        {/* <Step4 /> */}
        {/* <StepComplete /> */}
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

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
  }
`;

const StepBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem 5rem;
  flex-grow: 1;

  button {
    background-color: ${theme.primary.marineBlue};
    color: ${theme.neutral.white};
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;
