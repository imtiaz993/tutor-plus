import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation'

export default function StudentAuthStepper({ activeStep }) {
    const router = useRouter()
    return (
        <div className='w-3/4 mx-auto pt-5 pb-16 bg-white'>
            <div className='flex items-center justify-center'>
                <div className='relative' onClick={() =>
                    router.push('/Signup/TutorSignup/AccountDetails')
                }>
                    <Image
                        src={`/images/svg/${activeStep === 1 ? 'active-step.svg' : 'check-circle.svg'}`}
                        width={45}
                        height={45}
                        alt='Step Icon'
                        className='mx-10'

                    />
                    <p className={` absolute top-14 whitespace-nowrap font-bold ${activeStep === 1 ? 'text-yellow' : 'text-black'}`}>Account Details</p>
                </div>
                <div className='h-1 bg-black w-[calc(25%-100px)]'></div>
                <div className='relative' onClick={() =>
                    router.push('/Signup/TutorSignup/Profile')
                }>
                    <Image
                        src={`/images/svg/${activeStep === 2 ? 'active-step.svg' : activeStep > 2 ? 'check-circle.svg' : 'non-active-step.svg'}`}
                        width={45}
                        height={45}
                        alt='Step Icon'
                        className='mx-10'

                    />
                    <p className={` absolute left-10 top-14 whitespace-nowrap font-bold ${activeStep === 2 ? 'text-yellow' : 'text-black'}`}>Profile</p>
                </div>
            </div>
        </div>
    );
}
