import React from 'react'
import BlackButton from '@/components/common/blackbutton'

const Schedule = () => {
    return (
        <div className='flex items-center text-xl mt-10'>
            <div className='flex items-center'>
                <h1>Subject: </h1>
                <h1 className='font-bold'> Math’s GCSE (Edexcel)</h1>
            </div>
            <div className='flex items-center ml-10 mr-14'>
                <h1>Time: </h1>
                <h1 className='font-bold'> 16:45 BST</h1>
            </div>
            <BlackButton text='Reschedule' styles='text-base !py-[2px] rounded-md' />
        </div>
    )
}

export default Schedule