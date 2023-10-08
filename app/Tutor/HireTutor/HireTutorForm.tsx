import { useRouter } from 'next/router'
import Textarea from '@/components/common/textarea'
import Roundedbutton from '@/components/common/roundedbutton'
import { useMatchTutorContext } from '@/hooks/useMatchTutorContext'
import React, { ChangeEvent, FC, ReactElement, useState } from 'react'

/** Component props  */
interface HireTutorFormProps {
  tutorId: string
  examBoard: any
}

const HireTutorForm: FC<HireTutorFormProps> = ({
  tutorId,
  examBoard,
}): ReactElement => {
  // const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10))
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', { hour12: false })
  )
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  )
  const [message, setMessage] = useState('')
  const [selectedBoard, setSelectedBoard] = useState<string>('')
  const [isdisabled, setDisabled] = useState(true)
  const { messageData, setMessageData } = useMatchTutorContext()

  const router = useRouter()

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
    setMessageData({ ...messageData, message: event.target.value })
  }

  const checkInputs = () => {
    if (selectedBoard.trim() === '' || message.trim() === '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleCheckOut: React.MouseEventHandler<HTMLButtonElement> = () =>
    router.push({ pathname: '/CheckOut', query: { tutorId } })
  const handleClickBoard = (text: string) => {
    if (selectedBoard !== text) {
      setSelectedBoard(text)
      setMessageData({ ...messageData, board: text })
    }
    checkInputs()
  }

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value)
    setMessageData({ ...messageData, date: event.target.value })
  }
  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTime(event.target.value)
    setMessageData({ ...messageData, time: event.target.value })
  }

  return (
    <div className='mt-[50px]'>
      <h1 className='font-inter font-normal text-[14px]'>Exam board?</h1>
      <div className='flex gap-5 flex-wrap'>
        {examBoard.length ? (
          examBoard?.map((text: string, index: number) => (
            <Roundedbutton
              key={index}
              selected={selectedBoard === text}
              text={text}
              handleClick={handleClickBoard}
            />
          ))
        ) : (
          <span className='mt-2 text-[14px]'>Select subject to see board</span>
        )}
      </div>
      <div className='mt-[42px]'>
        <h1 className='font-inter font-normal text-[14px]'>
          Add a message for your tutor
        </h1>
        <div className='mt-[20px] border p-2 rounded-md'>
          <Textarea
            name='message'
            placeholder='Enter a message'
            value={message}
            cols={40}
            rows={5}
            onChange={handleMessageChange}
          />
        </div>
      </div>
      <div className='mt-[22px]'>
        <h1 className='font-inter font-normal text-[14px]'>
          Choose a suitable date and time
        </h1>
        <div className='flex gap-5 flex-wrap mt-3'>
          <div className='h-[48px] w-[151px]  rounded-full px-3 py-2 flex items-center justify-center border'>
            <input
              type='date'
              id='birthday'
              name='birthday'
              value={date}
              onChange={handleDateChange}
              className='appearance-none focus:outline-0'
            />
          </div>
          <div className='h-[48px] w-[151px]  rounded-full px-1 py-2 flex items-center justify-center border'>
            <input
              type='time'
              id='appt'
              name='appt'
              value={time}
              onChange={handleTimeChange}
              onFocus={handleTimeChange}
              className='appearance-none focus:outline-0'
            />
          </div>
        </div>
      </div>
      <div className='my-[40px]'>
        <button
          className='w-[248px] h-[48px] rounded-full bg-black text-white'
          onClick={handleCheckOut}
        >
          Proceed to paymet
        </button>
      </div>
    </div>
  )
}

export default HireTutorForm
