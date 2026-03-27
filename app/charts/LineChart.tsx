import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart = ({ labels, data }: { labels: string[]; data: number[] }) => {
  return (
    <Line
      options={options}
      data={{ labels, datasets: [{ data }] }}
    />
  );
};

export default LineChart;
