'use client'

import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ centerText }: any) => {
  const data = {
    datasets: [
      {
        data: [300, 50, 100, 40],
        backgroundColor: ['#121212', '#FFC130', '#E0E0E0', '#497FFB'],
        borderWidth: 7,
        borderHeight: 2,
      },
    ],
  }
  const guageText: any = {
    id: 'guageText',
    beforeDatasetDraw(chart: any) {
      const { ctx } = chart
      const xCenter = chart.getDatasetMeta(0).data[0].x
      const yCenter = chart.getDatasetMeta(0).data[0].y
      ctx.save()
      ctx.fillStyle = 'black'
      ctx.font = 'bold 12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'baseline'
      ctx.fillText(`${centerText}`, xCenter, yCenter)
      ctx.fillStyle = 'gray'
      ctx.font = 'normal 8px sans-serif'
      ctx.textBaseline = 'baseline'
      ctx.fillText('In the last 30 Days', xCenter, yCenter + 15)
    },
  }
  const options: any = {
    cutoutPercentage: 80,
    elements: {
      arc: {
        borderWidth: 1,
        hoverBorderWidth: 0,
      },
    },
    plugins: {
      legend: {
        display: false, // This will hide the legend
      },
    },
    tooltips: {
      enabled: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  }
  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[guageText]}
      width={200}
      height={195}
    />
  )
}

export default DoughnutChart
