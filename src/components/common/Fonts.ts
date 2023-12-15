import styled from 'styled-components';
import { theme, timer } from 'styles/constants';

export const StrongText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.primary.marineBlue};
  letter-spacing: -0.25px;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  color: ${theme.neutral.coolGray};
  letter-spacing: -0.25px;
`;

export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.primary.purplishBlue};
  letter-spacing: -0.25px;
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: ${theme.neutral.coolGray};
  letter-spacing: -0.25px;
  padding-bottom: 0px;
  border-bottom: 1px solid ${theme.neutral.coolGray};
  cursor: pointer;
  transition: color ${timer.default}, border-bottom ${timer.default};

  &:hover {
    color: ${theme.primary.purplishBlue};
    border-bottom: 1px solid ${theme.primary.purplishBlue};
  }
`;
