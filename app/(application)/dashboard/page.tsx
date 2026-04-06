"use-client";

import BillingOverview from "./billing/BillingOverview";
import ExpenseOverview from "./expense/ExpenseOverview";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <>
      <TopCards />
      <ExpenseOverview />
      <BillingOverview />
    </>
  );
};

export default Dashboard;
