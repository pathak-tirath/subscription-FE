"use client";

import Cards from "@/app/ui/Cards";
import { Dot } from "lucide-react";
const UpcomingPayments = () => {

  return (
    <>
      <Cards color="bg-white">
        <div className="mb-4 px-5">
          <div>
            <div className="text-lg font-bold ">Upcoming Payments</div>
            <div className="flex items-center"> <p>Next 7 days</p> <Dot /> <p>6 renewals</p></div>
          </div>
        </div>
      </Cards>
    </>
  );
};

export default UpcomingPayments;
