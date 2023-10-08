'use client'

import React, { useState } from 'react'
import '@/styles/globals.css'
import StudentAuthStepper from '@/components/common/StudentAuthStepper'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export const PageContext = React.createContext<React.Dispatch<React.SetStateAction<number>>>(() => null)

export default function SignUpNavigation({
    children,
}: {
    children: React.ReactNode
}) {
    const [currentPage, updateCurrentPage] = useState(1)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <PageContext.Provider value={updateCurrentPage}>
                <div className='bg-white'>
                    <StudentAuthStepper activeStep={currentPage} />
                    {children}
                </div>
            </PageContext.Provider>
        </>
    )
}
