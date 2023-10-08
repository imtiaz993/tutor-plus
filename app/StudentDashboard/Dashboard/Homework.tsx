import Image from 'next/image'
import React from 'react'

const Homework = () => {
    return (
        <div className='col-span-2'>
            <div className='flex justify-between'>
                <p className='text-2xl'>Homework</p>
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
                    <div className='flex justify-between py-3 border-b border-[#E0E0E0]' key={index}>
                        <div>
                            <h2 className='font-medium'>Maths Level-1</h2>
                            <p className='text-xs mt-2'>April 10, 2023</p>
                        </div>
                        <Image
                            className='h-auto w-auto cursor-pointer'
                            src={'/images/svg/subtitle.svg'}
                            alt='Icon'
                            width={24}
                            height={24}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homework
