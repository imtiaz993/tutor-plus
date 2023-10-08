import React from 'react'

const MatchSummary = ({ messageData }: any) => {
  return (
    <React.Fragment>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Subjects
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        {messageData.subjects?.join(', ')}
      </p>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Frequency
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        {messageData.lessons}
      </p>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Price
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        ${messageData.price?.toFixed(2)} / Hr
      </p>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Exam Board
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        {messageData.board}
      </p>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Date
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        {messageData.date}
      </p>
      <h1 className='font-inter font-bold text-[24px] text-white my-[12px]'>
        Time
      </h1>
      <p className='font-inter font-normal text-[16px] text-[#FFFFFF]'>
        {messageData.time}
      </p>
    </React.Fragment>
  )
}

export default MatchSummary
