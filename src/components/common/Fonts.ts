import styled from 'styled-components';
import { theme, timer } from 'styles/constants';

// Head Text 스타일 관련
export const HeadText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.primary.marineBlue};
`;

// 일반 Text 스타일 관련
export const Text = styled.p`
  font-size: 16px;
  color: ${theme.neutral.coolGray};
  letter-spacing: -0.25px;
`;

export const BlueText = styled(Text)`
  color: ${theme.primary.marineBlue};
`;

export const PurpleText = styled(Text)`
  color: ${theme.primary.purplishBlue};
`;

export const MediumText = styled(Text)`
  font-weight: 500;
`;

export const MediumBlueText = styled(MediumText)`
  color: ${theme.primary.marineBlue};
`;

export const MediumPurpleText = styled(MediumText)`
  color: ${theme.primary.purplishBlue};
`;

export const BoldText = styled(Text)`
  font-weight: 700;
`;

export const BoldBlueText = styled(BoldText)`
  color: ${theme.primary.marineBlue};
`;

export const BoldPurpleText = styled(BoldText)`
  color: ${theme.primary.purplishBlue};
`;

export const SmallText = styled(Text)`
  font-size: 14px;
`;

export const SmallRedText = styled(SmallText)`
  color: ${theme.primary.strawberryRed};
`;

export const SmallBlueText = styled(SmallText)`
  color: ${theme.primary.marineBlue};
`;

export const SmallPurpleText = styled(SmallText)`
  color: ${theme.primary.purplishBlue};
`;

export const SmallMeidumText = styled(SmallText)`
  font-weight: 500;
`;

export const SmallMeidumRedText = styled(SmallMeidumText)`
  color: ${theme.primary.strawberryRed};
`;

export const SmallMeidumBlueText = styled(SmallMeidumText)`
  color: ${theme.primary.marineBlue};
`;

export const SmallMeidumPurpleText = styled(SmallMeidumText)`
  color: ${theme.primary.purplishBlue};
`;

export const LargeText = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const LargeBlueText = styled(LargeText)`
  color: ${theme.primary.marineBlue};
`;

export const LargePurpleText = styled(LargeText)`
  color: ${theme.primary.purplishBlue};
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: ${theme.neutral.coolGray};
  text-decoration: underline;
  letter-spacing: -0.25px;
  padding-bottom: 0px;
  cursor: pointer;
  transition: color ${timer.default};

  &:hover {
    color: ${theme.primary.purplishBlue};
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.primary.marineBlue};
`;
