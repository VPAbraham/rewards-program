export const calculateRewards = (transactions) => {
  //separate transactions by month
  const monthlyRewards = [];
  const transactionsByMonth = transactions.reduce((acc, transaction) => {
    const month = transaction.month;
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {});

  const lastThreeMonths = Object.keys(transactionsByMonth).slice(-3);

  lastThreeMonths.forEach((month) => {
    let rewards = 0;
    transactionsByMonth[month].forEach((transaction) => {
      if (transaction.amount > 100) {
        rewards += (transaction.amount - 100) * 2;
      }
      if (transaction.amount > 50) {
        rewards += transaction.amount - 50;
      }
    });
    monthlyRewards.push({ month, rewards });
  });

  //calculate total rewards from last three months
  const totalRewards = monthlyRewards.reduce((acc, month) => {
    return acc + month.rewards;
  }, 0);

  //return monthly rewards and total rewards
  return { monthlyRewards, totalRewards };
};
