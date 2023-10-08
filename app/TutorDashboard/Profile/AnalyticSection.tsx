import React from 'react'
import BarChart from '@/components/BarChart'
import EarningCard from '@/app/TutorDashboard/Profile/EarningCard'
import Getpaidcard from '@/app/TutorDashboard/Profile/Getpaidcard'
import StudentTable from '@/app/TutorDashboard/Profile/StudentTable'
import { ThreeDot } from '@/images/svg'

const AnalyticSection = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full shadow-lg h-[300px] p-[12px] pb-9'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-3 justify-between mb-2'>
            <h1 className='font-inter font-semibold text-[12.75px]'>
              Lessons per month
            </h1>
            <div className='cursor-pointer rounded-full hover:bg-grey p-2'>
              <ThreeDot />
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <BarChart />
        </div>
      </div>
      <div className='mt-5 flex gap-8 flex-wrap'>
        <EarningCard title='Total Earnings' />
        <EarningCard title='Current Earnings' />
        <Getpaidcard />
      </div>
      <div className='mt-5 mb-6'>
        <StudentTable />
      </div>
    </div>
  )
}

export default AnalyticSection
