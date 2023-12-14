import { IconAdvanced, IconArcade, IconPro } from './icons';

export const ADD_ONS = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export const PLANS = [
  {
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
    icon: <IconArcade />,
  },
  {
    name: 'Advanced',
    monthly: 12,
    yearly: 120,
    icon: <IconAdvanced />,
  },
  {
    name: 'Pro',
    monthly: 15,
    yearly: 150,
    icon: <IconPro />,
  },
];
