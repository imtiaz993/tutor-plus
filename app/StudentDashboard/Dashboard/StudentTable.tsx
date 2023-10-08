'use client'

import Skeleton from 'react-loading-skeleton'
import { showStudentRecord } from '@/api/tutor'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const StudentTable = () => {
  const [students, setStudents] = useState<any>([])
  const [loading, setLaoding] = useState<boolean>(false)

  const fetchStudentRecords = async () => {
    try {
      setLaoding(true)
      const response = await showStudentRecord('s4abCirorSn1wvBm2cKo') //TODO: Get This Id Fro LocalStorage
      setStudents(response)
      setLaoding(false)
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    fetchStudentRecords()
  }, [])

  return (
    <div className='flex flex-col md:overflow-hidden overflow-x-auto'>
      <div className='sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <p className='text-2xl mt-4 pb-2'>Upcoming Lessons</p>
            <table className='min-w-full text-left text-lg font-light'>
              <thead className='border-b border-[#dfd7d7] font-medium'>
                <tr>
                  <th scope='col' className='pr-6 py-3'>
                    Subject
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Date/Time
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Tutor
                  </th>
                  <th scope='col' className='px-6 py-3'>

                  </th>
                  <th scope='col' className='px-6 py-3'>

                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td>
                      <Skeleton count={4} containerClassName='flex-1' />{' '}
                    </td>
                    <td>
                      <Skeleton count={4} containerClassName='flex-1' />{' '}
                    </td>
                    <td>
                      <Skeleton count={4} containerClassName='flex-1' />{' '}
                    </td>
                    <td>
                      <Skeleton count={4} containerClassName='flex-1' />{' '}
                    </td>
                    <td>
                      <Skeleton count={4} containerClassName='flex-1' />{' '}
                    </td>
                  </tr>
                ) : (
                  students?.map((student: any, index: number) => (
                    <tr className='border-b border-[#F4F4F4]' key={index}>
                      <td className='whitespace-nowrap pr-6 py-3 font-inter text-lg'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          Math’s GCSE
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-3 font-inter text-lg'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          Tue 29 Aug, 12:30PM
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-3 font-inter text-lg'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          Cameron A.
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-3'>
                        <span
                          className={` ${student.student.status === 'Booked'
                            ? 'bg-[#B5EBB7] font-inter text-lg'
                            : 'bg-[#FFFCBF] font-inter text-lg'
                            }  inline-flex justify-center items-center w-[100px] h-[36px] rounded-full py-2 px-5`}
                        >
                          {student?.student?.status}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-3 font-inter text-lg'>
                        <Image
                          className='h-auto w-auto'
                          src={'/images/svg/tablearrow.svg'}
                          alt='Logo'
                          width={45}
                          height={10}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentTable
