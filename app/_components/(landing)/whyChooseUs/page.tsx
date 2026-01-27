"use client";

import Cards from "@/app/_components/_common/Cards";
import allSubscriptions from "@/assets/manage_subscription.jpg";
import reminder from "@/assets/reminder.jpg";
import trackSpending from "@/assets/track_spending.jpg";

const WhyChooseUsSection = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-4xl underline  font-bold">Why Choose Us?</div>

      <div className="flex justify-between gap-4">
        <Cards
          title=" All Subscriptions, One Place"
          description="View and manage all your subscriptions from a single dashboard. No more jumping between apps or losing track of what you’re paying for."
          image={allSubscriptions}
        />
        <Cards
          title=" Never Miss a Renewal"
          description="Sit back and relax — we’ll send timely reminders before your subscriptions renew so you stay in control."
          image={reminder}
        />
        <Cards
          title="Track Your Spending"
          description="See exactly where your money goes. Monitor subscription costs and avoid unnecessary charges."
          image={trackSpending}
        />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

// All subscriptions in one place
// Timely Reminders, so you don't miss a payment
//
