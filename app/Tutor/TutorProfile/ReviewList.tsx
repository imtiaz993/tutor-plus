import React, { FC, ReactElement } from 'react'
import Review from '@/app/Tutor/TutorProfile/Review'

/** Style Imports */
import styles from '@/styles/TutorProfile.module.css'
import { useTutorContext } from '@/hooks/useTutorContext'
/** Component Interface  */

interface ReviewProps {}

const Reviews: FC<ReviewProps> = (): ReactElement => {
  const { state }: any = useTutorContext()
  const { reviews } = state?.tutor || {}
  const loading = state.loading
  return (
    <div className='mt-[48px]'>
      <h1 className='font-inter font-bold text-[24px]'>Reviews</h1>
      <p className='font-inter font-normal text-[16px] mt-[18px]'>
        <span className='border-b-2 border-gray-400 pb-1'>
          Completed Jobs (22)
        </span>
      </p>
      {/* Reviews Sections */}
      <div
        className='mb-5 max-h-[530px] overflow-y-auto pr-3'
        id={styles.reviews}
      >
        {reviews?.map((item: any, index: number) => (
          <Review key={index} data={item} loading={loading} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
