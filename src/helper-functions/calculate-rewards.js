export const calculateRewards = (transactions) => {
  const monthlyRewards = [];
  const totalRewards = 0;
  //separate transactions using only last 3 months
  const recentTransactions = transactions.slice(-3);
  recentTransactions.forEach((transaction) => {
    let rewards = 0;
    if (transaction.amount > 100) {
      rewards += 50;
    }
    if (transaction.amount > 50) {
      rewards += transaction.amount - 50;
    }
    //calculate rewards for each month
    monthlyRewards.push(rewards);
  });
  //calculate total rewards for last 3 months
  monthlyRewards.forEach((rewards) => {
    totalRewards += rewards;
  });
  //return monthly rewards and total rewards
  return { monthlyRewards, totalRewards };
};
