import React, { FC, ReactElement } from 'react'
import { RatingSvg } from '@/images/svg'
import Skeleton from 'react-loading-skeleton'
/** Component interface */

interface ReviewProps {
  data: any
  loading: boolean
}

const Review: FC<ReviewProps> = ({ data, loading }): ReactElement => {
  return (
    <div className='mt-5 last:border-0 border-b border-[#ABABAB]'>
      {data.title ? (
        loading ? (
          <Skeleton containerClassName='flex-1' count={5} />
        ) : (
          <>
            <h1 className='font-inter font-medium text-[#000000] text-[16px]'>
              {data?.title}
            </h1>
            <p className='my-5 font-inter font-normal text-[14px] text-justify'>
              {data?.description}
            </p>
            <div className='flex items-center gap-5 pb-2'>
              <div className='flex gap-2'>
                <RatingSvg />
                <RatingSvg />
                <RatingSvg />
                <RatingSvg />
                <RatingSvg fill={false} />
                <p className='font-inter text-[10px] font-semibold '>
                  {data?.rating}
                </p>
              </div>
              <p className='font-inter text-[12px] font-normal'>
                {data &&
                  data['Tuition End Date']?.toDate().toLocaleDateString()}{' '}
                -{' '}
                {data &&
                  data['Tuition Start Date']?.toDate().toLocaleDateString()}
              </p>
            </div>{' '}
          </>
        )
      ) : (
        'No Reviews yet'
      )}
    </div>
  )
}

export default Review
