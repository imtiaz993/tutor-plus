'use client'

import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { fetchLessons, fetchLessonsHistory } from '@/api/tutor'
import Calendar from '@/app/TutorDashboard/Calendar/calendar'
import { LeftArrowPrev, RightArrowPrev, SearchIcon } from '@/images/svg'
import { dateFormatter, getLastDate } from '@/utilities/common'

/** Dummy Lessons History Events  */
const event = [
  {
    start: moment('2023-05-18T10:00:00').toDate(),
    end: moment('2023-05-18T11:30:00').toDate(),
    title: 'MRI Registration',
  },
  {
    start: moment('2023-05-18T14:00:00').toDate(),
    end: moment('2023-05-18T15:30:00').toDate(),
    title: 'ENT Appointment',
  },
  {
    start: moment('2023-05-19T14:00:00').toDate(),
    end: moment('2023-05-19T15:30:00').toDate(),
    title: 'MacBook - English',
  },
  {
    start: moment('2023-05-15T14:00:00').toDate(),
    end: moment('2023-05-15T15:30:00').toDate(),
    title: 'MacBook - English',
  },
  {
    start: moment('2023-05-24T14:00:00').toDate(),
    end: moment('2023-05-24T15:30:00').toDate(),
    title: 'MacBook - English',
  },
]

const CustomToolbar = ({ label, onNavigate, onView }: any) => {
  const handleViewChange = (view: any) => {
    if (onView) {
      onView(view)
    }
  }
  return (
    <div className='rbc-toolbar'>
      <button className='rbc-btn' onClick={() => onNavigate('PREV')}>
        <LeftArrowPrev />
      </button>
      <button className='rbc-btn' onClick={() => onNavigate('NEXT')}>
        <RightArrowPrev />
      </button>
      <span className='rbc-toolbar-label'>{label}</span>
      <button className='rbc-btn' onClick={() => handleViewChange('day')}>
        Day
      </button>
      <button className='rbc-btn' onClick={() => handleViewChange('week')}>
        Week
      </button>
      <button className='rbc-btn' onClick={() => handleViewChange('month')}>
        Month
      </button>
    </div>
  )
}

const eventStyleGetter = (
  event: any,
  start: any,
  end: any,
  isSelected: any
) => {
  const isCurrentDate = moment(start).isSameOrAfter(moment(), 'day')
  const backgroundColor = isCurrentDate ? 'black' : 'gray'

  const style = {
    backgroundColor,
    borderRadius: '3px',
    fontSize: '16px',
    opacity: 0.8,
    color: 'white',
    border: 'none',
    display: 'block',
  }

  return {
    style,
  }
}

const TutorCalendar = () => {
  const [events, setEvents] = useState<any>([])
  const [historEvents, setHistoryEvents] = useState<any>([])

  const TutorBookedLessons = async () => {
    try {
      const response = await fetchLessons('s4abCirorSn1wvBm2cKo') //TutorID
      const eventObjArr = response?.map((ele: any) => {
        return {
          start: moment(dateFormatter(ele.date, ele.time)).toDate(),
          end: moment(getLastDate(dateFormatter(ele.date, ele.time))).toDate(),
          title: `${ele.studentName} - ${ele.subjects.join(',')}`,
        }
      })
      setEvents(eventObjArr)
    } catch (err) {
      console.log(err)
    }
  }

  const TutorLessonsHistory = async () => {
    try {
      const historydata = await fetchLessonsHistory('s4abCirorSn1wvBm2cKo')
      const eventObjArr = historydata?.map((ele: any) => {
        return {
          start: moment(dateFormatter(ele.date, ele.time)).toDate(),
          end: moment(getLastDate(dateFormatter(ele.date, ele.time))).toDate(),
          title: `${ele.studentName} - ${ele.subjects.join(',')}`,
        }
      })
      setHistoryEvents(eventObjArr)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    TutorBookedLessons()
    TutorLessonsHistory()
  }, [])

  return (
    <React.Fragment>
      <div className='px-[40px] pb-[40px]'>
        <div className='flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between'>
          <div>
            <h1 className='font-inter font-semibold text-[18px]'>Tasks</h1>
            <p className='font-inter font-normal text-[10.5px] flex gap-2 mt-4'>
              <Link href={'/Dashboard/Profile'}>Dashboard </Link> /
              <span className='font-inter text-[10.5px] font-normal'>
                Tasks
              </span>
            </p>
          </div>
          <div className='flex items-center rounded-full border px-2 py-2 md:w-[361px] w-full'>
            <span className='mr-2'>
              <SearchIcon />
            </span>
            <input
              type='text'
              placeholder='Search...'
              className='focus:outline-none appearance-none w-full'
            />
          </div>
        </div>
      </div>
      <div className='h-[600px] w-auto pr-[57px] mb-[60px]'>
        <Calendar
          events={[...events, ...historEvents]}
          views={['month', 'week', 'day']}
          eventPropGetter={eventStyleGetter}
          components={{ toolbar: CustomToolbar }}
        />
      </div>
    </React.Fragment>
  )
}
// TutorCalendar.Layout = DashboardLayout
export default TutorCalendar
