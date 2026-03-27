import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  return <Doughnut data={{ labels, datasets: [{ data }] }} />;
};

export default DoughnutChart;
