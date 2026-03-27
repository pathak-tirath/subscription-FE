"use client";
import MonthlyExpense from "./MonthlyExpense";
import SpendCategory from "./SpendCategory";

const ExpenseOverview = () => {
  return (
    <div className="flex w-full p-8 gap-4">
      <div className="w-[70%]">
        {" "}
        <MonthlyExpense />
      </div>
      <div className="w-[30%]">
        {" "}
        <SpendCategory />
      </div>
    </div>
  );
};

export default ExpenseOverview;
