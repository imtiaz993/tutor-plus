import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation'

export default function TutorAuthStepper({ activeStep }) {
    const router = useRouter()
    return (
        <div className='w-3/4 mx-auto pt-5 pb-16 bg-white'>
            <div className='flex items-center'>
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
                <div className='h-1 bg-black w-[calc(25%-100px)]'></div>
                <div className='relative' onClick={() =>
                    router.push('/Signup/TutorSignup/Qualifications')
                }>
                    <Image
                        src={`/images/svg/${activeStep === 3 ? 'active-step.svg' : activeStep > 3 ? 'check-circle.svg' : 'non-active-step.svg'}`}
                        width={45}
                        height={45}
                        alt='Step Icon'
                        className='mx-10'
                    />

                    <p className={`absolute top-14 -left-5 whitespace-nowrap text-center font-bold ${activeStep === 3 ? 'text-yellow' : 'text-black'}`}>Academic Qualifications</p>
                </div>
                <div className='h-1 bg-black w-[calc(25%-100px)]'></div>
                <div className='relative' onClick={() =>
                    router.push('/Signup/TutorSignup/Subjects')
                }>
                    <Image
                        src={`/images/svg/${activeStep === 4 ? 'active-step.svg' : activeStep > 4 ? 'check-circle.svg' : 'non-active-step.svg'}`}
                        width={45}
                        height={45}
                        alt='Step Icon'
                        className='mx-10'

                    />
                    <p className={`absolute top-14 whitespace-nowrap font-bold ${activeStep === 4 ? 'text-yellow' : 'text-black'}`}>Offered Subjects</p>
                </div>
                <div className='h-1 bg-black w-[calc(25%-100px)]'></div>
                <div className='relative' onClick={() =>
                    router.push('/Signup/TutorSignup/Thankyou')
                }>
                    <Image
                        src={`/images/svg/${activeStep === 5 ? 'active-step.svg' : 'non-active-step.svg'}`}
                        width={45}
                        height={45}
                        alt='Step Icon'
                        className='mx-10'

                    />
                    <p className={`absolute top-14 left-4 whitespace-nowrap font-bold ${activeStep === 5 ? 'text-yellow' : 'text-black'}`}>Availability</p>
                </div>
            </div>
        </div>
    );
}
