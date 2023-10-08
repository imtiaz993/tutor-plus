import { possibleSubjects } from '@/api/tutor'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { formatDiagnosticsWithColorAndContext } from 'typescript'

/** component Interfaces */

interface OfferedSubjectTablePorps {
  hideTitle?: boolean
  subjects: any
}

const OfferedSubjectTable: FC<OfferedSubjectTablePorps> = ({
  hideTitle = false,
  subjects,
}): ReactElement => {
  const [loading, setLoading] = useState(false)

  return (
    <div className={`${!hideTitle ? 'my-5' : 'lg:mt-[76px] sm:mt-[15px]'}`}>
      {!hideTitle && (
        <h1 className='font-inter mb-5 font-bold text-[24px]'>
          Offered Subjects
        </h1>
      )}
      <div className={'w-full overflow-x-auto'}>
        <table className='w-[300px] table-fixed'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='py-2 px-4 text-left font-bold border border-[#ABABAB]'>
                Subject
              </th>
              <th className='py-2 px-4 text-left font-bold border border-[#ABABAB]'>
                Qualification
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
              </tr>
            ) : (
              subjects?.map((sub: any, index: number) =>
                sub.Qualification?.map((level: any, index: number) => (
                  <tr key={index}>
                    <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                      {sub.Subject}
                    </td>
                    <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                      {level}
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OfferedSubjectTable
