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
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    {
                      <Image
                        src={upcomingPayments.icon as string}
                        alt="image"
                        width={50}
                        height={50}
                      />
                    }
                  </div>
                  <div>
                    <div>{upcomingPayments.title}</div>
                    <div>{upcomingPayments.duration}</div>
                  </div>
                </div>

                <div>
                  <div>{upcomingPayments.price}</div>
                  <div>{daysLeft}</div>
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
