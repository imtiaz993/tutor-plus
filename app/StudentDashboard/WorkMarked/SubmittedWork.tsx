import React from 'react'
import Image from 'next/image'
import BlackButton from '@/components/common/blackbutton'

const SubmittedWork = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <p className='text-xl mt-20 border-b border-b-black pb-2'>
                Submitted Work{' '}
            </p>
            <div>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div className='border-b' key={index}>
                        <div className='w-[95%] flex items-center justify-between py-2'>
                            <div className='flex items-center'>
                                <Image
                                    src={'/images/svg/document.svg'}
                                    alt={'upload'}
                                    width={26.6}
                                    height={32.8}
                                    className='mr-8'
                                />
                                <div>
                                    <p className='font-semibold text-base'>English - GCSE</p>
                                    <p className='text-xs mt-1'>April 7, 2023</p>
                                </div>
                            </div>

                            <div>
                                <div
                                    className={`${index === 2 ? 'bg-[#FFBFBF]' : 'bg-[#B5EBB7]'} inline-flex justify-center items-center w-[137px] h-[32px] rounded-full py-2 px-5`}
                                >
                                    {index === 2 ? 'Unmarked' : 'Completed'}
                                </div>
                                <BlackButton text='View' onClick={() => { }} styles='ml-8 rounded-lg px-7' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubmittedWork