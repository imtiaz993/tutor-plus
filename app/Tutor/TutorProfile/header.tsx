import React, { FC, ReactElement, useState } from 'react'
import ButtonwithIcon from '@/components/common/buttonwithIcon'

import { Book, Filter, Sort } from '@/images/svg'
import { useRouter } from 'next/router'
import OutsideClickWrapper from '@/utilities/HandleClickOutSide'

/** component Props */
interface HeaderProps {
  possiblesubjects: any
  handleSelectedSubject: any
  filterQualification: any
  showQualiMenu: any
  showSortMenu: any
  handleQualiMenu: any
  handleSelectedQualification: any
  handleClearAll: any
  handleSort: any
  handleSelectedSort: any
}

/** Mock Data */
const SortedArr = [
  {
    label: 'Price-High to Low',
    value: 'desc',
  },
  {
    label: 'Price-Low to High',
    value: 'asc',
  },
]

const Header: FC<HeaderProps> = ({
  possiblesubjects,
  handleSelectedSubject,
  filterQualification,
  showQualiMenu,
  handleQualiMenu,
  handleSelectedQualification,
  handleClearAll,
  handleSort,
  showSortMenu,
  handleSelectedSort,
}): ReactElement => {
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false)
  const handleShowCatMenu = () => setShowCatMenu(!showCatMenu)

  const router = useRouter()

  return (
    <>
      <div className='flex md:flex-row flex-col justify-between md:flex-nowrap flex-wrap'>
        <div className='flex gap-5 md:flex-nowrap flex-wrap'>
          <div className='flex gap-3'>
            <ButtonwithIcon text='Filter' icon={<Filter />} isWidth={'100px'} />
            {/* {Sort filter} */}
            <div className='relative'>
              <OutsideClickWrapper
                onClickOutside={handleSort}
                isOpen={showSortMenu}
              >
                <ButtonwithIcon
                  text='Sort'
                  icon={<Filter />}
                  isWidth={'100px'}
                  onClick={handleSort}
                />
                {/* Sort MenuList */}
                {showSortMenu && (
                  <div className='absolute min-w-[211px] mx-auto bg-white rounded-md shadow-md overflow-hidden z-10'>
                    <div className='px-2 pt-4'>
                      <h2 className='text-[12px] font-semibold font-inter mb-2'>
                        Sort by
                      </h2>
                      <ul>
                        {SortedArr?.map((item: any, index: number) => (
                          <li
                            key={index}
                            className='cursor-pointer hover:bg-grey bg-opacity-5 mb-1'
                            onClick={() => handleSelectedSort(item.value)}
                          >
                            <span className='font-inter text-[12px] font-normal p-2'>
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </OutsideClickWrapper>
            </div>
            {/* {Subject Filter} */}
            <div className='relative'>
              <OutsideClickWrapper
                onClickOutside={handleShowCatMenu}
                isOpen={showCatMenu}
              >
                <ButtonwithIcon
                  text='Subjects'
                  icon={<Book />}
                  isWidth={'100px'}
                  onClick={handleShowCatMenu}
                />
                {/* Subjects MenuList */}
                {showCatMenu && (
                  <div className='absolute min-w-[211px] mx-auto bg-white rounded-md shadow-md overflow-hidden z-10'>
                    <div className='px-2 pt-4'>
                      <h2 className='text-[12px] font-semibold font-inter mb-2'>
                        Categories
                      </h2>
                      <ul>
                        {possiblesubjects?.map((item: any, index: number) => (
                          <li
                            key={index}
                            className='cursor-pointer hover:bg-grey bg-opacity-5 mb-1'
                            onClick={() => handleSelectedSubject(item.Subject)}
                          >
                            <span className='font-inter text-[12px] font-normal p-2'>
                              {item.Subject}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </OutsideClickWrapper>
            </div>
            {/* {Qualification Filter} */}
            {filterQualification.length > 0 && (
              <div className='relative'>
                <OutsideClickWrapper
                  onClickOutside={handleShowCatMenu}
                  isOpen={showQualiMenu}
                >
                  <ButtonwithIcon
                    text='Qualification'
                    icon={<Book />}
                    isWidth={'100px'}
                    onClick={handleQualiMenu}
                  />
                  {/* Qualification MenuList */}
                  {showQualiMenu && (
                    <div className='absolute min-w-[211px] mx-auto bg-white rounded-md shadow-md overflow-hidden z-10'>
                      <div className='px-2 pt-4'>
                        <h2 className='text-[12px] font-semibold font-inter mb-2'>
                          Qualification
                        </h2>
                        <ul>
                          {filterQualification?.map((item: any, index: any) => (
                            <li
                              key={index}
                              className='cursor-pointer hover:bg-grey bg-opacity-5 mb-1'
                              onClick={() => handleSelectedQualification(item)}
                            >
                              <span className='font-inter text-[12px] font-normal p-2'>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </OutsideClickWrapper>
              </div>
            )}
            <ButtonwithIcon
              text='Clear All'
              icon={<Sort />}
              isWidth={'100px'}
              onClick={handleClearAll}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
