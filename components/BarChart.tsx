'use client'

import React from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'

Chart.register(CategoryScale)
const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 40, 60, 90, 110, 140],
        backgroundColor: 'rgba(18, 18, 18, 1)',
        borderColor: 'rgba(18, 18, 18, 0)',
        borderWidth: 0,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
      {
        data: [10, 40, 60, 70, 100, 120],
        backgroundColor: 'rgba(171, 171, 171, 1)',
        borderColor: 'rgba(171, 171, 171, 1)',
        borderWidth: 0,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
      },
    ],
  }

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // This will hide the legend
      },
      tooltip: {
        enabled: false, // This will disable the tooltip
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false, // This will hide the x-axis grid lines
        },
      },
      y: {
        stacked: false,
        grid: {
          display: false, // This will hide the x-axis grid lines
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    maintainAspectRatio: false,
    height: 600,
  }
  return <Bar data={data} options={options} />
}

export default BarChart
