import React from 'react'
import Image from 'next/image'
import { RatingSvg } from '@/images/svg'

const PreviousLessons = () => {
    return (
        <div className='col-span-2'>
            <div className='flex justify-between border-b border-b-black pb-2'>
                <p className='text-2xl'>Upcoming Lessons</p>
                <Image
                    className='h-auto w-auto cursor-pointer'
                    src={'/images/svg/more.svg'}
                    alt='Icon'
                    width={15}
                    height={15}
                />
            </div>
            <div className='mt-2'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <section className='py-3 border-b border-[#E0E0E0]' key={index}>
                        <div className='flex justify-between'>
                            <h1 className='font-medium'>Penny Ortega</h1>
                            <div className='cursor-pointer'>
                                <Image
                                    className='h-auto w-auto cursor-pointer'
                                    src={'/images/svg/profile-circle.svg'}
                                    alt='Icon'
                                    width={14}
                                    height={14}
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div className='flex gap-1'>
                                <RatingSvg />
                                <RatingSvg />
                                <RatingSvg />
                                <RatingSvg />
                                <RatingSvg fill={false} />
                                <p className='text-[10px] font-semibold '>4.2</p>
                            </div>
                            <p className='text-xs font-normal'>Dec 7, 2021 -Dec 9, 2021</p>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PreviousLessons
