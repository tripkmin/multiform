import styled from 'styled-components';
import { theme } from 'styles/constants';

export const SolidButton = styled.button`
  background-color: ${theme.primary.marineBlue};
  color: ${theme.neutral.white};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
`;

export const PlainButton = styled.button`
  color: ${theme.primary.marineBlue};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
`;
