import RecentSubs from "./RecentSubs";
import UpcomingPayments from "./UpcomingPayments";

const BillingOverview = () => {
  return (
    <div className="flex justify-between mb-4 gap-4 p-8">
      <div className="w-[70%]">
        <RecentSubs />
      </div>
    <div className="w-[30%]">
      <UpcomingPayments />
      </div>
    </div>
  );
};

export default BillingOverview;
