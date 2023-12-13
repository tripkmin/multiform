export const phrases = {
  steps: ['your info', 'select plan', 'add-ons', 'summary'],
  step1: {
    head: 'Personal Info',
    subHead: 'Please provide your name, email address, and phone number.',
    namePlaceHolder: 'e.g. Stephan King',
    emailPlaceHolder: 'e.g. stephanking@lorem.com',
    phonePlaceHolder: 'e.g. +1 234 567 890',
  },
  step2: {
    head: 'Select your plan',
    subHead: 'You have the option of monthly or yearly billing.',
  },
  step3: {
    head: 'Pick add-ons',
    subHead: 'Add-ons help enhance your gaming experience.',
    addOns: [
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
    ],
  },
  step4: {
    head: 'Finishing up',
    subHead: 'Double-check everything looks OK before confirming.',
  },
  step5: {
    head: 'Thank you!',
    subHead:
      'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.',
  },
};
