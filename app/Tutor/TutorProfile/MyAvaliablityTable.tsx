import React, { FC, ReactElement } from 'react'
import { Close, Tick } from '@/images/svg'

/** Component Interface */
interface Availabilityprops {}

/** Mock Data */

const AvailabilityTableHead = [
  'Day',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
]

const AvailabilityTableData = [1, 2, 3]

const MyAvaliablityTable: FC<Availabilityprops> = (): ReactElement => {
  return (
    <div className='my-5'>
      <h1 className='font-inter mb-5 font-bold text-[24px]'>My Availability</h1>
      <div className='w-full overflow-x-auto'>
        <table className='min-w-[600px] table-fixed'>
          <thead>
            <tr className='bg-gray-100'>
              {AvailabilityTableHead.map((item, index) => (
                <th
                  key={index}
                  className='py-2 px-4 text-left font-bold border border-[#ABABAB]'
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AvailabilityTableData.map((item, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                  Monday
                </td>
                <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                  <Close />
                </td>
                <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                  <Tick />
                </td>
                <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                  <Tick />
                </td>
                <td className='py-2 px-4 border text-left border-[#ABABAB]'>
                  <Close />
                </td>
                <td className='py-2 px-4 border text-center border-[#ABABAB]'>
                  <Tick />
                </td>
                <td className='py-2 px-4 border text-center border-[#ABABAB]'>
                  <Tick />
                </td>
                <td className='py-2 px-4 border text-center border-[#ABABAB]'>
                  <Tick />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAvaliablityTable
