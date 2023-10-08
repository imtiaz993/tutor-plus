import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import React, { FC, ReactElement } from 'react'

/** Component Props */

interface TutorProfileDetailProps {
  profile: any
  loading?: boolean
}

const TutorProfileDetail: FC<TutorProfileDetailProps> = ({
  profile,
  loading,
}): ReactElement => {
  return (
    <div className='flex flex-col'>
      <div className='flex-shrink-0 w-auto flex justify-center'>
        <Image
          src={require('@/resources/userProfile.png')}
          placeholder='blur'
          height='245'
          width='450'
          alt='user'
        />
      </div>

      {loading ? (
        <Skeleton count={7} containerClassName='flex-1' className='mt-3' />
      ) : (
        <div className='flex flex-col mt-5'>
          <div className='flex justify-between items-center flex-row flex-wrap'>
            <h1 className='font-inter font-bold text-[24px] text-white'>
              {`${profile.firstName}  ${profile.lastName}`}
            </h1>
            <span className='font-inter font-semibold text-[16px]'>
              $ {profile.price} / Hr
            </span>
          </div>
          <h1 className='font-inter font-light text-[16px] text-white'>
            {profile.price}
          </h1>
          <p className='font-inter font-medium text-[16px] text-justify'>
            {profile.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default TutorProfileDetail
