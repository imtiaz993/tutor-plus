import React from 'react'
import BlackButton from '@/components/common/blackbutton'
import Image from 'next/image'

const AboutAvailability = () => {
    return (
        <div>
            <div>
                <div className='flex items-center'>
                    <h1 className='font-inter font-semibold text-2xl mr-7'>About me</h1>
                    <BlackButton text='Edit' styles='text-sm py-[6px]' />
                </div>
                <p className='mt-2 max-w-xs font-medium'>
                    Lorem ipsum dolor sit amet consectetur. Morbi tellus laoreet eget
                    dictumst lectus elementum aenean.Lorem ipsum dolor sit amet
                    consectetur. Morbi tellus laoreet eget dictumst lectus elementum
                    aenean.
                </p>
            </div>
            <div className='mt-16 pt-1'>
                <div className='flex items-center'>
                    <h1 className='font-inter font-semibold text-2xl mr-4'>
                        Availability
                    </h1>
                    <BlackButton text='Edit' styles='text-sm py-[6px]' />
                </div>
                <p className='mt-2 max-w-xs text-[#000000DE]'>
                    When are you available to tutor?
                </p>

                <table className='text-left mt-2'>
                    <tr>
                        <th className='px-3 p-2 border border-[#787878]'>Day</th>
                        <th className='px-3 p-2 border border-[#787878]'>Mon</th>
                        <th className='px-3 p-2 border border-[#787878]'>Tue</th>
                        <th className='px-3 p-2 border border-[#787878]'>Wed</th>
                        <th className='px-3 p-2 border border-[#787878]'>Thu</th>
                        <th className='px-3 p-2 border border-[#787878]'>Fri</th>
                        <th className='px-3 p-2 border border-[#787878]'>Sat</th>
                        <th className='px-3 p-2 border border-[#787878]'>Sun</th>
                    </tr>
                    <tr>
                        <th className='font-normal px-3 p-2 border border-[#787878]'>Morning</th>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index} className='px-3 p-2 border border-[#787878]'>
                                <Image
                                    src={`/images/svg/${index === 4 || index === 5 ? 'tick-circle' : 'close-circle'
                                        }.svg`}
                                    alt={'Icon'}
                                    width={24}
                                    height={24}
                                    className='cursor-pointer flex'
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className='font-normal px-3 p-2 border border-[#787878]'>Noon</th>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index} className='px-3 p-2 border border-[#787878]'>
                                <Image
                                    src={`/images/svg/${index === 0 || index === 4 ? 'close-circle' : 'tick-circle'
                                        }.svg`}
                                    alt={'Icon'}
                                    width={24}
                                    height={24}
                                    className='cursor-pointer flex'
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th className='font-normal px-3 p-2 border border-[#787878]'>Evening</th>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index} className='px-3 p-2 border border-[#787878]'>
                                <Image
                                    src={`/images/svg/${index === 0 || index === 1 || index === 5 ? 'tick-circle' : 'close-circle'
                                        }.svg`}
                                    alt={'Icon'}
                                    width={24}
                                    height={24}
                                    className='cursor-pointer flex'
                                />
                            </td>
                        ))}
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default AboutAvailability
