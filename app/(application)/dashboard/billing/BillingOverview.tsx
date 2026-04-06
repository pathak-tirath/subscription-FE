import RecentSubs from "./RecentSubs";
import UpcomingPayments from "./UpcomingPayments";

const BillingOverview = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <RecentSubs />
      <UpcomingPayments />
    </div>
  );
};

export default BillingOverview;
