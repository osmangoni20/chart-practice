import {
    BarElement,
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LineElement,
  LineController,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["Book1", "Book2", "Book3", "Book4", "Book5"],
  datasets: [
    {
      level: "Book Page",
      data: [52, 45, 245, 152, 321],
      fill: true,
      backgroundColor: "#2e4355",
      pointBorderColor: "#8884d8",
      pointBorderWidth: 5,
      pointRadius: 8,
      tension: 0.4,
    },
  ],
};
const options = {
    plugins:{legend:{display:false}},
    layout:{padding:{bottom:100}},
    scales: {
      y:{
        ticks:{
          color:"black",
          font:{
            size:18
          }
        },
        grid:{
          color:"#243240"
        }
      },
      x:{
        ticks:{
          color:"black",
          font:{
            size:18
          }
        }
      }
    },
  };
const LineChart = () => {
  return (
    <div>
      <h1>Book Page</h1>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart;
