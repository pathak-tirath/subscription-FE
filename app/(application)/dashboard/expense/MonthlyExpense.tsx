"use client";
import Filters from "@/app/_components/_common/Filters";
import LineChart from "@/app/charts/LineChart";
import Cards from "@/app/ui/Cards";

// Temporary data for monthly expenses
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = [100, 200, 150, 300, 250, 400, 350, 450, 500, 550, 600, 650];
const MonthlyExpense = () => {
  return (
    <Cards color="bg-white">
      <div className="mb-4 px-5">
        <div className="flex items-center justify-between">
          <div>
          <div className="text-lg font-bold ">Monthly Expenses</div>
          <div>
            Total spend over time: <span className="font-bold"> $49.22</span>
          </div>
          </div>
          <div><Filters /></div>
        </div>
        <LineChart labels={labels} data={data} />
      </div>
    </Cards>
  );
};

export default MonthlyExpense;
