import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <Link href="/TutorDashboard/Dashboard">
                    <Image
                        src='/images/svg/arrow-left.svg'
                        width={24}
                        height={24}
                        alt='back'
                        className='cursor-pointer'
                    />
                </Link>
                <h2 className='text-2xl font-bold ml-1'>Upcoming Lesson with P.Ortega</h2>
            </div>
            <div className='flex items-center border border-[#121212] rounded-full py-2 px-3'>
                <p className='text-sm font-medium mr-3'>Contact Student</p>
                <Image
                    src='/images/svg/whatsapp.svg'
                    width={20}
                    height={20}
                    alt='avatar'
                    className='cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Header