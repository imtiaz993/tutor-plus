import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonwithIcon from '@/components/common/buttonwithIcon'

function Signup() {
  return (
    <div>
      <div className='min-h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <div className='grid grid-cols-10 mt-10 mb-20'>
          <div className='col-span-4 my-20'>
            <div className='w-3/4 mx-auto flex flex-col justify-center items-center'>
              <Image
                src='/images/student-signup.png'
                width={430}
                height={287}
                alt='Student picture'
              />
              <p className='text-center mt-3 max-w-[410px]'>
                Sign up and get started with the best 1-on-1 teaching experience
                with our world class teachers from around the world.
              </p>
              <Link href='/Signup/StudentSignup/AccountDetails'>
                <ButtonwithIcon
                  text={'Sign Up as a Student'}
                  styles='bg-[#121212] border-none text-white text-base px-5 my-6'
                  icon={
                    <Image
                      src='/images/svg/login.svg'
                      width={24}
                      height={24}
                      alt='signup-icon'
                    />
                  }
                />
              </Link>
              <Link href='/SignIn' className='text-[#121212] text-sm flex'>
                <p>Already have an account?</p>
                <p className='ml-1 font-bold'>Sign In</p>
              </Link>
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-center items-center'>
            <p className=' text-3xl font-bold mb-6'>Sign Up</p>
            <div className='w-1.5 bg-black h-full rounded-full'></div>
          </div>
          <div className='col-span-4 my-20'>
            <div className='w-3/4 mx-auto flex flex-col justify-center items-center'>
              <Image
                src='/images/tutor-signup.png'
                width={430}
                height={287}
                alt='Tutor picture'
              />
              <p className='text-center mt-3 max-w-[410px]'>
                Sign up and get started with your career to help the student
                with your expertise.
              </p>
              <Link href='/Signup/TutorSignup/AccountDetails'>
                <ButtonwithIcon
                  text={'Sign Up as a Tutor'}
                  styles='bg-[#121212] border-none text-white text-base px-5 my-6'
                  icon={
                    <Image
                      src='/images/svg/login.svg'
                      width={24}
                      height={24}
                      alt='signup-icon'
                    />
                  }
                />
              </Link>
              <Link href='/SignIn' className='text-[#121212] text-sm flex'>
                <p>Already have an account?</p>
                <p className='ml-1 font-bold'>Sign In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
