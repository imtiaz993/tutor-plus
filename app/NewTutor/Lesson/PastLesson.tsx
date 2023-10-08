import React from 'react'
import BlackButton from '@/components/common/blackbutton'

const PastLesson = () => {
    return (
        <div className='w-2/5'>
            <h1 className='text-2xl font-bold border-b-2 max-w-[250px]'>Past Lesson Notes</h1>
            <div className='mt-4'>
                <p className='font-medium'>16/5/23</p>
                <div className='mt-2 flex justify-between items-start'>
                    <p className='text-sm'>Covered Pythagoras theorem </p>
                    <BlackButton text='View' styles='text-sm !py-0 rounded-md !px-2' />
                </div>
            </div>
            <div className='mt-4'>
                <p className='font-medium'>10/5/23</p>
                <div className='mt-2 flex justify-between items-start'>
                    <p className='text-sm'>Covered SOHCAHOA </p>
                    <BlackButton text='View' styles='text-sm !py-0 rounded-md !px-2' />
                </div>
            </div>
        </div>
    )
}

export default PastLesson