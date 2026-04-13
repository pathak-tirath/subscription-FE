"use client";

import { mockUpcomingPayments } from "@/app/json/mockData";
import Cards from "@/app/ui/Cards";
import { Dot } from "lucide-react";
import Image from "next/image";
const UpcomingPayments = () => {
  return (
    <>
      <Cards color="bg-white">
        <div className="mb-4 px-5">
          <div>
            <div className="text-lg font-bold ">Upcoming Payments</div>
            <div className="flex items-center">
              {" "}
              <p>Next 7 days</p> <Dot /> <p>6 renewals</p>
            </div>
          </div>
          {mockUpcomingPayments.map((upcomingPayments, key) => {
            const daysLeft: number =
              upcomingPayments.nextBillingDate.getDate() - new Date().getDate();
            return (
              <div key={key} className="flex items-start justify-between py-4">
                <div className="flex justify-between gap-4">
                  <div>
                    {
                      <Image
                        src={upcomingPayments.icon as string}
                        alt="image"
                        width={100}
                        height={100}
                        className="border-2 border-gray-200 rounded-2xl bg-gray-200 p-1"
                      />
                    }
                  </div>
                  <div>
                    <div className="font-bold text-2xl">{upcomingPayments.title}</div>
                    <div className="font-extralight text-sm">{upcomingPayments.duration}</div>
                  </div>
                </div>

                <div className="flex flex-col pt-1 items-end">
                  <div>₹ {upcomingPayments.price}</div>
                  <div className="rounded-md px-2 text-center bg-gray-200 border-none">{daysLeft} days left</div>
                </div>
              </div>
            );
          })}
        </div>
      </Cards>
    </>
  );
};

export default UpcomingPayments;
