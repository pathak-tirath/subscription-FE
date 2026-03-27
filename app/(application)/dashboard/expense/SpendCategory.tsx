import DoughnutChart from "@/app/charts/DoughnutChart";
import Cards from "@/app/ui/Cards";

const labels = ["AI & Tools", "Entertainment", "Food & Dining", "Health & Fitness", "Shopping", "Travel"];
const data = [100, 200, 150, 300, 250, 400];

const SpendCategory = () => {
  return (
    <Cards color="bg-white">
        <div className="text-lg font-bold mb-4 px-5">Spend by Category</div>
        <DoughnutChart labels={labels} data={data} />
    </Cards>
  )
}

export default SpendCategory