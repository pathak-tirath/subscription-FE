"use-client";
import Cards from "@/app/ui/Cards";
import { ArrowBigUp, Box } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-8">
      <Cards color="bg-amber-100">
        <div className="px-8 flex flex-col gap-4">
          <Box size={60} className="border-0 rounded-xl p-2 bg-gray-200   " />

          <div>
            <div className="text-6xl">4</div>
            <div className="text-xl">Total Subscriptions</div>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <ArrowBigUp /> 2 added this month
          </div>
        </div>
      </Cards>
       <Cards color="bg-amber-100">
        <div className="px-8 flex flex-col gap-4">
          <Box size={60} className="border-0 rounded-xl p-2 bg-gray-200   " />

          <div>
            <div className="text-6xl">4</div>
            <div className="text-xl">Total Subscriptions</div>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <ArrowBigUp /> 2 added this month
          </div>
        </div>
      </Cards>
       <Cards color="bg-amber-100">
        <div className="px-8 flex flex-col gap-4">
          <Box size={60} className="border-0 rounded-xl p-2 bg-gray-200   " />

          <div>
            <div className="text-6xl">4</div>
            <div className="text-xl">Total Subscriptions</div>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <ArrowBigUp /> 2 added this month
          </div>
        </div>
      </Cards>
       <Cards color="bg-amber-100">
        <div className="px-8 flex flex-col gap-4">
          <Box size={60} className="border-0 rounded-xl p-2 bg-gray-200   " />

          <div>
            <div className="text-6xl">4</div>
            <div className="text-xl">Total Subscriptions</div>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <ArrowBigUp /> 2 added this month
          </div>
        </div>
      </Cards>
    </div>
  );
};

export default Dashboard;
