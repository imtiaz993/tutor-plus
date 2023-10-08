import React from 'react'
import BlackButton from '@/components/common/blackbutton';

const Notes = () => {
    return (
        <div className='w-fit'>
            <h1 className='text-2xl border-b font-medium'>
                Notes for upcoming lesson on{' '}
                <span className='text-[#FFC130] font-bold'>23/5/23</span>
            </h1>
            <div className='flex justify-between mt-3 '>
                <p className='text-sm'>Continue with trig</p>
                <BlackButton text='Edit' styles='text-sm !py-0 rounded-md !px-2' />
            </div>
        </div>
    );
};

export default Notes
