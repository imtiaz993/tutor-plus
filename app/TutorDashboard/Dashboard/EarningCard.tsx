import React, { FC } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

interface EarningCardProp {
  title: string
}

const EarningCard: FC<EarningCardProp> = ({ title }) => {
  return (
    <div className="md:w-[315px] w-full h-auto shadow-md">
      <div className="flex justify-between p-[12px]">
        <p className="font-inter font-semibold text-[21px]">$ 2.405</p>
        <p className="font-inter font-semibold text-[21px]">$</p>
      </div>
      <div className="p-[12px] flex flex-col gap-3">
        <p className="font-inter font-normal text-[10.5px]">
          {title}
        </p>
        <ProgressBar
          completed="60"
          height="5px"
          customLabel=" "
          bgColor="#FFC130"
          baseBgColor="#262626"
        />
      </div>
    </div>
  )
}

export default EarningCard