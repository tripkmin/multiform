import { ChangeEvent, MouseEvent, useReducer } from 'react';
import styled from 'styled-components';
import { size, theme } from 'styles/constants';
import SideBar from './SideBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import StepComplete from './StepComplete';
import { emailRegex, nameRegex, phoneRegex } from 'utils/regex';
import { SolidButton } from './common/Button';

const CHANGE_STEP = 'CHANGE_STEP' as const;
const CHANGE_NAME = 'CHANGE_NAME' as const;
const CHANGE_EMAIL = 'CHANGE_EMAIL' as const;
const CHANGE_PHONE = 'CHANGE_PHONE' as const;
const CHANGE_PLAN = 'CHANGE_PLAN' as const;
const TOGGLE_IS_YEARLY = 'TOGGLE_IS_YEARLY' as const;
const TOGGLE_ADD_ON = 'TOGGLE_ADD_ON' as const;

export const changeStep = (num: number) => ({
  type: CHANGE_STEP,
  payload: num,
});

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

export const changePlan = (str: string) => ({
  type: CHANGE_PLAN,
  payload: str,
});

export const toggleIsYearly = () => ({
  type: TOGGLE_IS_YEARLY,
});

export const toggleAddOn = (name: string) => ({
  type: TOGGLE_ADD_ON,
  payload: name,
});

type FormAction =
  | ReturnType<typeof changeStep>
  | ReturnType<typeof changeName>
  | ReturnType<typeof changeEmail>
  | ReturnType<typeof changePhone>
  | ReturnType<typeof changePlan>
  | ReturnType<typeof toggleIsYearly>
  | ReturnType<typeof toggleAddOn>;

const initialState = {
  currentStep: 1,
  name: '',
  email: '',
  phone: '',
  isNameVaild: { status: false, message: '' },
  isEmailValid: false,
  isPhoneValid: false,
  plan: '',
  isYearly: true,
  addOns: [
    { name: 'Online service', status: false },
    { name: 'Larger storage', status: false },
    { name: 'Customizable profile', status: false },
  ],
};

type FormState = typeof initialState;

function nameChecker(name: string) {
  if (name.trim().length === 0) {
    return { status: false, message: 'Blank input is not allowed' };
  } else if (name.length > 30) {
    return { status: false, message: 'Cannot exceed 30 characters' };
  } else if (!nameRegex.test(name)) {
    return { status: false, message: 'Only English letters are allowed' };
  } else {
    return { status: true, message: '' };
  }
}

function formReducer(state: FormState = initialState, action: FormAction): FormState {
  switch (action.type) {
    case CHANGE_STEP:
      return { ...state, currentStep: state.currentStep + action.payload };
    case CHANGE_NAME:
      return { ...state, name: action.payload, isNameVaild: nameChecker(action.payload) };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
        isEmailValid: emailRegex.test(action.payload),
      };
    case CHANGE_PHONE:
      return {
        ...state,
        phone: action.payload,
        isPhoneValid: phoneRegex.test(action.payload.replaceAll(' ', '')),
      };
    case CHANGE_PLAN:
      return { ...state, plan: action.payload };
    case TOGGLE_IS_YEARLY:
      return { ...state, isYearly: !state.isYearly };
    case TOGGLE_ADD_ON:
      return {
        ...state,
        addOns: state.addOns.map(addOn => {
          return addOn.name === action.payload
            ? { ...addOn, status: !addOn.status }
            : addOn;
        }),
      };
    default:
      return state;
  }
}

export default function MultiForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const stepHandler = (num: number) => {
    dispatch({ type: 'CHANGE_STEP', payload: num });
  };

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_NAME', payload: e.target.value });
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_EMAIL', payload: e.target.value });
  };

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_PHONE', payload: e.target.value });
  };

  const planHandler = (e: MouseEvent<HTMLDivElement>) => {
    dispatch({ type: 'CHANGE_PLAN', payload: e.currentTarget.dataset.plan as string });
  };

  const isYearlyToggler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'TOGGLE_IS_YEARLY' });
  };

  const addOnToggler = (e: MouseEvent<HTMLDivElement>) => {
    dispatch({ type: 'TOGGLE_ADD_ON', payload: e.currentTarget.dataset.name as string });
  };

  return (
    <MultiFormLayout>
      <MultiFormBox>
        <SideBar currentStep={state.currentStep} />
        {state.currentStep === 1 && (
          <StepBox>
            <Step1
              name={state.name}
              email={state.email}
              phone={state.phone}
              isNameVaild={state.isNameVaild}
              isEmailValid={state.isEmailValid}
              isPhoneValid={state.isPhoneValid}
              stepHandler={stepHandler}
              nameHandler={nameHandler}
              emailHandler={emailHandler}
              phoneHandler={phoneHandler}
            />
          </StepBox>
        )}
        {state.currentStep === 2 && (
          <StepBox>
            <Step2
              stepHandler={stepHandler}
              currentPlan={state.plan}
              isYearly={state.isYearly}
              planHandler={planHandler}
              isYearlyToggler={isYearlyToggler}
            />
          </StepBox>
        )}
        {state.currentStep === 3 && (
          <StepBox>
            <Step3
              stepHandler={stepHandler}
              isYearly={state.isYearly}
              addOns={state.addOns}
              addOnToggler={addOnToggler}
            />
          </StepBox>
        )}
        {state.currentStep === 4 && (
          <StepBox>
            <Step4
              plan={state.plan}
              isYearly={state.isYearly}
              addOns={state.addOns}
              stepHandler={stepHandler}
            />
          </StepBox>
        )}
        {state.currentStep === 5 && (
          <StepFinishBox>
            <StepComplete />
          </StepFinishBox>
        )}
      </MultiFormBox>
      <ButtonLayout>
        <ButtonBox>
          <SolidButton>Next Step</SolidButton>
        </ButtonBox>
      </ButtonLayout>
    </MultiFormLayout>
  );
}

// 나중에 layout으로 분리해서 sidebar, stepbox, mobile step button 따로 분리시키기
const MultiFormLayout = styled.div`
  @media screen and (max-width: ${size.desktop}) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ButtonLayout = styled.div`
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    display: flex;
    justify-content: center;
    background-color: ${theme.neutral.white};
  }
`;
const ButtonBox = styled.div`
  width: 95%;
  padding: 1rem 0;
  display: flex;
  flex-direction: row-reverse;
`;

const MultiFormBox = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${theme.neutral.white};
  gap: 2rem;

  @media screen and (max-width: ${size.desktop}) {
    flex-direction: column;
    width: 100%;
    padding: 0;
    border-radius: 0;
    background-color: ${theme.neutral.magnolia};
  }
`;

const StepBox = styled.div`
  height: 566px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  flex-grow: 1;

  @media screen and (max-width: ${size.desktop}) {
    width: 95%;
    border-radius: 1rem;
    margin-top: -120px;
    background-color: ${theme.neutral.white};
    padding: 3rem 2rem;
  }
`;

const StepFinishBox = styled(StepBox)`
  justify-content: center;
`;
