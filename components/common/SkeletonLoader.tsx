import React, { FC } from 'react'

interface SkeletonProps {
  height?: string
}

const Skeleton: FC<SkeletonProps> = ({ height = '4' }) => {
  return (
    <div className='animate-pulse'>
      <div
        className={`bg-gray-300 rounded-md h-${height} w-full ${
          height === '1' ? 'mb-2' : 'my-2'
        }`}
      ></div>
    </div>
  )
}

export default Skeleton
