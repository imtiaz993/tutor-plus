import Skeleton from 'react-loading-skeleton'
import { showStudentRecord } from '@/api/tutor'
import React, { useEffect, useState } from 'react'
import { DarkRightArrow } from '@/images/svg'

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
            <table className='min-w-full text-left text-sm font-light'>
              <thead className='border-b border-[#F4F4F4] font-medium'>
                <tr>
                  <th scope='col' className='px-6 py-4'>
                    Student Name
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Date
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Time
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Subject
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
                      <td className='whitespace-nowrap px-6 py-4 font-medium font-inter text-[10.5px]'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          {student.student.name} <DarkRightArrow />
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 font-inter font-normal text-[10.5px]'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          {student.date} <DarkRightArrow />
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 font-inter font-normal text-[10.5px]'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          {student.time} <DarkRightArrow />
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span
                          className={` ${
                            student.student.status === 'Booked'
                              ? 'bg-[#B5EBB7] font-inter font-normal text-[9px]'
                              : 'bg-[#FFFCBF] font-inter font-normal text-[9px]'
                          }  w-[60px] h-[21px] rounded-full py-1 px-2`}
                        >
                          {student?.student?.status}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 font-inter font-semibold text-[10.5px]'>
                        <span className='flex items-center gap-3 cursor-pointer'>
                          {student?.subjects?.join(',')} <DarkRightArrow />
                        </span>
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
