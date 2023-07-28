import React, { useState, useEffect } from "react";
import { calculateRewards } from "../../helper-functions/calculate-rewards";
export const RewardsCalculator = (customerData) => {
  const { name, transactions } = customerData;
  const [rewardsData, setRewardsData] = useState({});

  useEffect(() => {
    setRewardsData(calculateRewards(transactions));
  }, [transactions]);

  const monthNames = {
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const renderMonthlyRewards = () => {
    return rewardsData.monthlyRewards.map((month, index) => {
      return (
        <li key={index} className="rewards-calculator--transactions-list-item">
          <div>{monthNames[month.month]}</div>
          <div>{month.rewards}</div>
        </li>
      );
    });
  };

  return (
    <div className="rewards-calculator">
      <div className="rewards-calculator--transactions">
        <h5>{name}'s Transactions</h5>
        <ul className="rewards-calculator--transactions-list">
          {renderMonthlyRewards()}
        </ul>
        <div className="rewards-calculator--summary-total">
          Total Rewards: {`${rewardsData.totalRewards}`}
        </div>
      </div>
    </div>
  );
};
