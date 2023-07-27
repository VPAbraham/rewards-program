import React, { useEffect } from "react";
import { mockTransactions } from "../../mock-transaction-data";
import { RewardsCalculator } from "../../components/RewardsCalculator/RewardsCalculator";

const RewardsPage = () => {
  const [transactionData, setTransactionData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //simulate an async call to an API with setTimeout
  const getTransactionData = async () => {
    await setTimeout(() => {
      setTransactionData(mockTransactions);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  return (
    <div className="rewards-page">
      <header className="rewards-page-header">
        <h1>Rewards Program Calculator</h1>
      </header>
      {/* map transactionData to RewardsCalculator components for each customer */}
      {!isLoading &&
        transactionData.map((customerData) => (
          <RewardsCalculator
            key={customerData.id}
            name={customerData.name}
            transactions={customerData.transactions}
          />
        ))}
      {/* render loading message while getTransactions is pending */}
      {isLoading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default RewardsPage;
