'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { LeftArrow, ThreeDot } from '@/images/svg'
import BarChart from '@/components/BarChart'
import Invoices from '@/app/TutorDashboard/Income/Invoices'
import IncomeStat from '@/app/TutorDashboard/Income/IncomeStat'
import Subjectstat from '@/app/TutorDashboard/Income/Subjectstat'

const Income = () => {
  const router = useRouter()

  return (
    <section className='md:px-[90px] py-[34px]'>
      <div className='flex items-center justify-between'>
        <div
          className='cursor-pointer hover:bg-grey rounded-full p-1'
          onClick={() => router.back()}
        >
          <LeftArrow />
        </div>
        <div className='flex gap-3'>
          <button className='rounded-full max-w-[200px] h-[36px] border px-[10px] font-inter text-[16px]'>
            Sort By :
            <span className='border-b font-inter font-semibold '>
              Last 30 days
            </span>
          </button>
          <button className='rounded-full max-w-[200px] h-[36px] border px-[10px] text-[16px]'>
            Subject:
            <span className='border-b font-inter font-semibold '>English</span>
          </button>
        </div>
      </div>
      <div className='flex flex-col mt-10'>
        <div className='w-full shadow-lg h-[300px] p-[12px] pb-9'>
          <div className='flex flex-col px-2'>
            <div className='flex items-center gap-3 justify-between mb-2'>
              <h1 className='font-inter font-semibold text-[12.75px]'>
                Lessons per month
              </h1>
              <div className='cursor-pointer hover:bg-grey rounded-full p-2'>
                <ThreeDot />
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            <BarChart />
          </div>
        </div>
      </div>
      <div className='mt-4 flex md:flex-row flex-col gap-5'>
        <IncomeStat />
        <Subjectstat />
      </div>
      <div className='mt-6'>
        <h1 className='className="font-inter font-semibold text-[24px]'>
          Invoices
        </h1>
        <Invoices />
        <Invoices />
      </div>
    </section>
  )
}

// Income.Layout = DashboardLayout

export default Income
