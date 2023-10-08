import React from 'react'
import BlackButton from '@/components/common/blackbutton'

const JoinLesson = () => {
    return (
        <div className='flex items-center'>
            <h1 className='text-4xl mr-10 font-bold text-[#FFC130]'>Join lesson</h1>
            <BlackButton text='Join' styles='text-2xl rounded-lg !py-1 px-8' />
        </div>
    );
};

export default JoinLesson
