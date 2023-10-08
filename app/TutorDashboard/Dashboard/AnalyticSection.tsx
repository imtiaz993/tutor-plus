import React from 'react'
import BarChart from '@/components/BarChart'
import EarningCard from '@/app/TutorDashboard/Dashboard/EarningCard'
import Getpaidcard from '@/app/TutorDashboard/Dashboard/Getpaidcard'
import StudentTable from '@/app/TutorDashboard/Dashboard/StudentTable'
import { ThreeDot } from '@/images/svg'

const AnalyticSection = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <div className='md:w-[70%]'>
          <h1 className='font-inter font-medium text-lg mb-10'>
            Lessons per month
          </h1>
          <div className=' w-full shadow-lg h-[300px] p-[12px] pb-9'>
            <div className='flex flex-col'>
              <div className='flex items-center gap-3 justify-between mb-2'>
                <div className='cursor-pointer rounded-full hover:bg-grey p-2'>
                  <ThreeDot />
                </div>
              </div>
            </div>
            <div className='w-full h-full'>
              <BarChart />
            </div>
          </div>
        </div>
        <div className='md:w-1/4 flex items-center flex-wrap mt-14'>
          <EarningCard title='Total Earnings' />
          <Getpaidcard />
        </div>
      </div>
      <div className='mt-5 mb-6'>
        <StudentTable />
      </div>
    </div>
  )
}

export default AnalyticSection
