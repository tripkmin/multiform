import styled from 'styled-components';
import { theme, timer } from 'styles/constants';

export const SolidButton = styled.button`
  background-color: ${theme.primary.marineBlue};
  color: ${theme.neutral.white};
  padding: 1rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color ${timer.default}, color ${timer.default};

  &:hover,
  &:focus {
    background-color: ${theme.primary.paleMarinBlue};
  }

  &:disabled {
    background-color: ${theme.neutral.darkGray};
    cursor: not-allowed;
  }
`;

export const SolidPurpleButton = styled(SolidButton)`
  background-color: ${theme.primary.purplishBlue};

  &:hover,
  &:focus {
    background-color: ${theme.primary.palePurplishBlue};
  }
`;

export const PlainButton = styled.button`
  color: ${theme.neutral.coolGray};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: color ${timer.default};

  &:hover,
  &:focus {
    color: ${theme.primary.marineBlue};
  }
`;
