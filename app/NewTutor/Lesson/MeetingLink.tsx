import React from 'react'
import BlackButton from '@/components/common/blackbutton'

const JoinLesson = () => {
    return (
        <div className='mb-8'>
            <h1 className='font-bold text-[#FFC130]'>Meeting Link</h1>
            <div className='max-w-[640px] flex justify-between border-[1.5px] border-[#1F1E1E] rounded-lg px-3 py-2 mt-2'>
                <input type="url" className='outline-none w-3/4' placeholder='Paste meeting link here' />
                <BlackButton text='Save & Upload' styles='text-sm !bg-white !text-black !py-[2px] !px-2 rounded-lg' />
            </div>
        </div>
    );
};

export default JoinLesson
