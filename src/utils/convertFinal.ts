import { ADD_ONS, PLANS } from 'assets/data';

export const getTotal = (
  plan: string,
  isYearly: boolean,
  addOns: { name: string; status: boolean }[]
) => {
  const selectedPlan = PLANS.find(PLAN => PLAN.name === plan);
  const selectedAddOn = addOns.filter(addOn => addOn.status);
  const planPrice = isYearly ? selectedPlan?.yearly : selectedPlan?.monthly;

  const totalPrice = selectedAddOn.reduce((acc, addOn) => {
    const addOnInfo = ADD_ONS.find(ADD_ON => ADD_ON.name === addOn.name);
    const addOnPrice = isYearly ? addOnInfo?.yearlyPrice : addOnInfo?.monthlyPrice;
    return acc + (addOnPrice || 0); // 0을 더하여 undefined를 방지
  }, planPrice || 0); // 0을 더하여 undefined를 방지

  return {
    planDuration: isYearly ? 'Yearly' : 'Monthly',
    plan: plan,
    planPrice: planPrice,
    addOns: selectedAddOn.map(addOn => ({
      name: addOn.name,
      price: isYearly
        ? ADD_ONS.find(ADD_ON => ADD_ON.name === addOn.name)?.yearlyPrice
        : ADD_ONS.find(ADD_ON => ADD_ON.name === addOn.name)?.monthlyPrice,
    })),
    totalPrice: totalPrice,
  };
};
