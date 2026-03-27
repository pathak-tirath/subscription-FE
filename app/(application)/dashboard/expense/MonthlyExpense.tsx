'use client'
import LineChart from "@/app/charts/LineChart";
import Cards from "@/app/ui/Cards";

// Temporary data for monthly expenses
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const data = [100, 200, 150, 300, 250, 400, 350, 450, 500, 550, 600, 650];
const MonthlyExpense = () => {
  return (
    <Cards color="bg-white">
        <div className="text-lg font-bold mb-4 px-5">Monthly Expenses</div>
        <LineChart labels={labels} data={data} />
    </Cards>
  )
}

export default MonthlyExpense