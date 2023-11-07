import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Overview = () => {
  const data = {
    labels: [
      "Food and Drinks",
      "Leisure",
      "Transportation",
      "Health",
      "Shooping",
      "Utilities",
    ],
    datasets: [
      {
        label: "Expense by Category",
        data: [300, 50, 100, 150, 350, 150],
        backgroundColor: [
          "#0BC80E",
          "#029ADC",
          "#F6A004",
          "#F50204",
          "#C614C6",
          "#E8238D",
        ],
        hoverOffset: 5,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Overview;
