import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logout } from '@/images/svg'
import { MenuList } from '@/utilities/MenuList'

const SideBar = () => {
  return (
    <div className='text-white flex flex-col h-screen'>
      <div className='px-[10px] py-[13px] bg-[#262626] w-full'>
        <Link href='/' className='flex'>
          <div className='flex-shrink-0'>
            <Image
              className='h-auto w-auto'
              src={'/images/tutorpluslogowhite.png'}
              alt='Logo'
              width={150}
              height={150}
            />
          </div>
        </Link>
      </div>
      <div className='mt-6 flex-1'>
        {MenuList.map((menu: any, index: number) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex items-center justify-between px-[10px] py-[13px] hover:bg-[#6A6A6A]
              
                // Link.pathname === menu.path ? 'bg-[#6A6A6A]' : ''
              
              
              `}
            >
              <div className='flex items-center gap-3'>
                {<menu.icon />}
                <p className='md:block hidden font-inter text-[10.5px] font-normal tracking-[0.0590625px]'>
                  {menu.text}
                </p>
              </div>
              {(index === 0 || index === 1 || index === 3) && (
                <div className='w-[15px] h-[15px] md:flex items-center justify-center rounded-full bg-[#FFC130] mr-2  hidden'>
                  <span className='text-[9px] font-normal text-black'>
                    {index + 1}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className='mt-auto px-[10px] py-[13px]'>
        <Link href={'/TutorProfile'}>
          <div className='flex items-center md:justify-between cursor-pointer'>
            <p className='font-inter text-[10.5px] font-normal tracking-[0.0590625px] md:block hidden'>
              Log Out
            </p>
            <div className='mr-2'>
              <Logout />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
