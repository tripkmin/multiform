import { ChangeEvent, MouseEvent, useReducer } from 'react';
import styled from 'styled-components';
import { size, theme } from 'styles/constants';
import SideBar from './SideBar';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import { emailRegex, phoneRegex } from 'utils/regex';
import MultiFormHeader from './MultiFormHeader';
import MultiFormFooter from './MultiFormFooter';
import { nameChecker } from 'utils/validateNames';

const CHANGE_STEP = 'CHANGE_STEP' as const;
const CHANGE_NAME = 'CHANGE_NAME' as const;
const CHANGE_EMAIL = 'CHANGE_EMAIL' as const;
const CHANGE_PHONE = 'CHANGE_PHONE' as const;
const CHANGE_PLAN = 'CHANGE_PLAN' as const;
const TOGGLE_IS_YEARLY = 'TOGGLE_IS_YEARLY' as const;
const TOGGLE_ADD_ON = 'TOGGLE_ADD_ON' as const;

const changeStep = (num: number) => ({
  type: CHANGE_STEP,
  payload: num,
});

const changeName = (str: string) => ({
  type: CHANGE_NAME,
  payload: str,
});

const changeEmail = (str: string) => ({
  type: CHANGE_EMAIL,
  payload: str,
});

const changePhone = (str: string) => ({
  type: CHANGE_PHONE,
  payload: str,
});

const changePlan = (str: string) => ({
  type: CHANGE_PLAN,
  payload: str,
});

const toggleIsYearly = () => ({
  type: TOGGLE_IS_YEARLY,
});

const toggleAddOn = (name: string) => ({
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
        <MultiFormMain $isFinalStep={state.currentStep === 5}>
          <MultiFormHeader currentStep={state.currentStep} />
          {state.currentStep === 1 && (
            <Step1
              name={state.name}
              email={state.email}
              phone={state.phone}
              isNameVaild={state.isNameVaild}
              isEmailValid={state.isEmailValid}
              isPhoneValid={state.isPhoneValid}
              nameHandler={nameHandler}
              emailHandler={emailHandler}
              phoneHandler={phoneHandler}
            />
          )}
          {state.currentStep === 2 && (
            <Step2
              currentPlan={state.plan}
              isYearly={state.isYearly}
              planHandler={planHandler}
              isYearlyToggler={isYearlyToggler}
            />
          )}
          {state.currentStep === 3 && (
            <Step3
              isYearly={state.isYearly}
              addOns={state.addOns}
              addOnToggler={addOnToggler}
            />
          )}
          {state.currentStep === 4 && (
            <Step4
              plan={state.plan}
              isYearly={state.isYearly}
              addOns={state.addOns}
              stepHandler={stepHandler}
            />
          )}
          <MultiFormFooter
            currentStep={state.currentStep}
            plan={state.plan}
            isNameVaild={state.isNameVaild}
            isEmailValid={state.isEmailValid}
            isPhoneValid={state.isPhoneValid}
            stepHandler={stepHandler}
            isForMobile={false}
          />
        </MultiFormMain>
      </MultiFormBox>
      <ButtonLayout>
        <MultiFormFooter
          currentStep={state.currentStep}
          plan={state.plan}
          isNameVaild={state.isNameVaild}
          isEmailValid={state.isEmailValid}
          isPhoneValid={state.isPhoneValid}
          stepHandler={stepHandler}
          isForMobile={true}
        />
      </ButtonLayout>
    </MultiFormLayout>
  );
}

const MultiFormLayout = styled.div`
  @media screen and (max-width: ${size.desktop}) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const MultiFormMain = styled.div<{ $isFinalStep: boolean }>`
  height: 566px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  flex-grow: 1;

  ${props =>
    props.$isFinalStep
      ? `justify-content: center; align-items: center;`
      : `justify-content: space-between;`}

  @media screen and (max-width: ${size.desktop}) {
    width: 95%;
    height: auto;
    border-radius: 1rem;
    margin-top: -120px;
    background-color: ${theme.neutral.white};
    box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 50px 10px rgba(0, 0, 0, 0.1);

    ${props =>
      props.$isFinalStep
        ? `justify-content: center; align-items: center; gap: 0; padding: 5rem 2rem;`
        : `justify-content: space-between; gap: 2.5rem; padding: 3rem 2rem;`}
  }
`;

const ButtonLayout = styled.div`
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${theme.neutral.white};
  }
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
