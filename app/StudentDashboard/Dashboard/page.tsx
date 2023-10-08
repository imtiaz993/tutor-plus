import React from 'react'
import UpcomingLessons from '@/app/StudentDashboard/Dashboard/UpcomingLessons'
import PreviousLessons from '@/app/StudentDashboard/Dashboard/PreviousLessons'
import Homework from '@/app/StudentDashboard/Dashboard/Homework'
import Image from 'next/image'

const Dashboard = () => {
  return (
    <>
      <div className='flex justify-end'>
        <Image
          src='/images/svg/avatar.svg'
          width={36}
          height={36}
          alt='avatar'
          className='cursor-pointer'
        />
      </div>
      <div className='flex md:flex-row flex-col gap-3 md:w-11/12 mb-20'>
        <div className='w-full md:w-[95%] ml-auto'>
          <h1 className='text-4xl font-medium mb-4'>Dashboard</h1>
          <UpcomingLessons />
          <div className='grid grid-cols-5 mt-20'>
            <Homework />
            <div></div>
            <PreviousLessons />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
