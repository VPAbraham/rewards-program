import React, { useState, useEffect } from "react";
import { calculateRewards } from "../../helper-functions/calculate-rewards";
export const RewardsCalculator = (customerData) => {
  const { name, transactions } = customerData;
  const [rewards, setRewards] = useState(null);
  useEffect(() => {
    setRewards(calculateRewards(transactions));
  }, [transactions]);

  const renderTransactions = () => {};

  return (
    <div className="rewards-calculator">
      <div className="rewards-calculator--transactions">
        <h5>{name}'s Transactions</h5>
        <ul className="rewards-calculator--transactions-list">
          {renderTransactions}
        </ul>
        <div className="rewards-calculator--summary-total">
          Total Rewards: {"$--"}
        </div>
      </div>
    </div>
  );
};
