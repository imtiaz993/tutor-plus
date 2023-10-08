import React from 'react'
import BlackButton from '@/components/common/blackbutton'

const Homework = () => {
    return (
        <div className='w-2/5'>
            <h1 className='text-2xl font-bold border-b-2 max-w-[250px]'>Homework</h1>
            <div className='mt-4'>
                <p className='font-medium'>16/5/23</p>
                <div className='mt-2 flex justify-between items-start'>
                    <p className='text-sm w-3/5'>Please complete the Assignment that I sent you</p>
                    <div>
                        <BlackButton text='Complete' styles='!bg-[#B5EBB7] !border-none !text-black text-sm !py-0 !px-2 mx-2' />
                        <BlackButton text='View' styles='text-sm !py-0 rounded-md !px-2' />
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='font-medium'>10/5/23</p>
                <div className='mt-2 flex justify-between items-start'>
                    <p className='text-sm w-3/5'>Please complete the Assignment that I sent you</p>
                    <div>
                        <BlackButton text='Complete' styles='!bg-[#B5EBB7] !border-none !text-black text-sm !py-0 !px-2 mx-2' />
                        <BlackButton text='View' styles='text-sm !py-0 rounded-md !px-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homework