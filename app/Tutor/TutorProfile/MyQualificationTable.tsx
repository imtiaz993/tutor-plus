import React, { FC, ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton'

/** Component props */
interface QualificationProps {
  qualification: any
  loading: boolean
}

/** Mock Data */
const QualificationTable = [1, 2, 3]

const MyQualification: FC<QualificationProps> = ({
  qualification,
  loading,
}): ReactElement => {
  return (
    <div className='my-5'>
      <h1 className='font-inter mb-5 font-bold text-[24px]'>
        My Qualifications
      </h1>
      <div className='w-full overflow-x-auto'>
        <table className='min-w-[600px] table-fixed'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='py-2 px-4 text-left font-bold border border-[#ABABAB]'>
                Subject
              </th>
              <th className='py-2 px-4 text-left font-bold border border-[#ABABAB]'>
                Qualification
              </th>
              <th className='py-2 px-4 text-left font-bold border border-[#ABABAB]'>
                Grade
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
              qualification?.map((item: any, index: number) => (
                <tr key={index}>
                  <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                    {item.Subject}
                  </td>
                  <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                    {item.Qualification}
                  </td>
                  <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                    {item.Grade}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyQualification
