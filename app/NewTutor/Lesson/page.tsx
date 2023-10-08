import React from 'react'
import Header from './Header'
import Homework from './Homework'
import MeetingLink from './MeetingLink'
import Notes from './Notes'
import PastLesson from './PastLesson'
import Schedule from './Schedule'

const Lesson = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-14'>
            <div className='md:w-11/12 mr-auto mb-10'>
                <Header />
                <Schedule />
                <div className='mt-20'>
                    <MeetingLink />
                    <Notes />
                </div>
                <div className='flex justify-between mt-32'>
                    <PastLesson />
                    <Homework />
                </div>
            </div>
        </div>
    )
}

export default Lesson