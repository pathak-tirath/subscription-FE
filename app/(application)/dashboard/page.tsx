"use-client";

import ExpenseOverview from "./expense/ExpenseOverview";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <>
      <TopCards />
      <ExpenseOverview />
    </>
  );
};

export default Dashboard;
