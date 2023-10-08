import BlackButton from '@/components/common/blackbutton';
import React from 'react'

const Notes = () => {
    return (
        <div className='w-fit'>
            <h1 className='text-2xl border-b font-medium'>
                Notes for upcoming lesson on{' '}
                <span className='text-[#FFC130] font-bold'>23/5/23</span>
            </h1>
            <div className='flex justify-between mt-3 '>
                <p className='text-sm'>Continue with trig</p>
            </div>
        </div>
    );
};

export default Notes
