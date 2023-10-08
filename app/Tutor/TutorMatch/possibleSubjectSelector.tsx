import { ChevronDown } from '@/images/svg'
import React, { ChangeEvent, FC } from 'react'

/** Component props*/
interface SelectorProps {
  label: string
  data: any
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SubjectSelector: FC<SelectorProps> = ({ data, label, ...rest }) => {
  return (
    <div className='relative'>
      <p className='mb-[12px] font-inter font-normal text-[14px]'>{label}</p>
      <select
        className='w-full h-[48px] appearance-none rounded-full py-2 px-4 pr-8 border border-[#787878] text-gray-700 leading-tight focus:outline-none focus:border-gray-500'
        {...rest}
      >
        <option value='' selected disabled>
          Select Subject
        </option>
        {data?.map((item: any, itemIndex: number) => {
          const qualifications = Object.keys(item.Qualification)
          return (
            <React.Fragment key={itemIndex}>
              {qualifications.map((qualification: any, index: number) => {
                const optionValue = `${item.Subject}-${qualification}`
                return (
                  <option
                    value={`${item.Subject}-${qualification}`}
                    key={`${optionValue}-${index}-${itemIndex}`}
                  >
                    {`${item.Subject}-${qualification}`}
                  </option>
                )
              })}
            </React.Fragment>
          )
        })}
      </select>
      <ChevronDown
        classname={'absolute right-0 top-[36px] mt-2 mr-3 pointer-events-none'}
      />
    </div>
  )
}

export default SubjectSelector
