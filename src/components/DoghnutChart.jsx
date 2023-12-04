// src/components/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
 Chart.register(ArcElement);

const DoughnutChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255,106,85,0.6)',
          // Add more colors as needed
        ],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default DoughnutChart;
