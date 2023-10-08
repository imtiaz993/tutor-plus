import { useRouter } from 'next/router'
import Textarea from '@/components/common/textarea'
import { DollarSvg } from '@/images/svg'
import Roundedbutton from '@/components/common/roundedbutton'
import { tutorMatchSendMessage } from '@/api/tutor'
import { MessageDataContext } from '@/context/MatchTutor'
import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'
/** Component props  */
interface MatchTutorFormProps {
  subjects: string[]
  examBoard: any
}

const MatchTutorForm: FC<MatchTutorFormProps> = ({
  subjects,
  examBoard,
}): ReactElement => {
  /** Form State */
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  )
  const [selectedtext, setSelectedText] = useState<string>('')
  const [selectedBoard, setSelectedBoard] = useState<string>('')
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', { hour12: false })
  )
  const [message, setMessage] = useState('')
  const [isdisabled, setDisabled] = useState(true)
  const [price, setPrice] = useState<number>(1)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { messageData, setMessageData } = useContext(MessageDataContext)

  const checkInputs = () => {
    if (
      subjects.length == 0 ||
      selectedBoard.trim() === '' ||
      message.trim() === '' ||
      selectedtext.trim() === ''
    ) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleClick = (text: string) => {
    if (selectedtext !== text) {
      setSelectedText(text)
      setMessageData({ ...messageData, lessons: text })
    }
    checkInputs()
  }

  const handleChangePrice = (
    event: ChangeEvent<HTMLInputElement>
  ): void | undefined => {
    const newPrice = parseFloat(event.target.value)
    if (isNaN(newPrice) || newPrice < 0) {
      setPrice(1)
    } else {
      setPrice(newPrice)
      setMessageData({ ...messageData, price: newPrice })
    }
    checkInputs()
  }
  const handleClickBoard = (text: string) => {
    if (selectedBoard !== text) {
      setSelectedBoard(text)
      setMessageData({ ...messageData, board: text })
    }
    checkInputs()
  }

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
    setMessageData({ ...messageData, message: event.target.value })
    checkInputs()
  }

  const handleDateChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void | undefined => {
    setDate(event.target.value)
    setMessageData({ ...messageData, date: event.target.value })
  }

  const handleTimeChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void | undefined => {
    setTime(event.target.value)
    setMessageData({ ...messageData, time: event.target.value })
  }

  const handleSendMessage: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    const messageData = {
      message,
      price: price.toFixed(2),
      date,
      time,
      subjects,
      examBoard: selectedBoard,
      lessons: selectedtext,
    }
    setLoading(true)
    try {
      await tutorMatchSendMessage(messageData)
      setLoading(false)
      setMessageData({})
      setSelectedText('')
      setSelectedBoard('')
      setMessage('')
      setPrice(1)
      setDisabled(true)
      // router.push("/TutorProfile")
    } catch (err) {
      setLoading(false)
    }
  }
  useEffect(() => {
    return () => {
      setMessageData({})
    }
  }, [setMessageData])
  return (
    <div className='mt-[40px]'>
      <h1 className='font-inter font-normal text-[14px]'>
        How many lessons would you like a week
      </h1>
      <div className='flex gap-5 flex-wrap mb-4'>
        {['Once', 'Twice', 'I’ll Decide later'].map((text, index) => (
          <Roundedbutton
            key={index}
            selected={selectedtext === text}
            text={text}
            handleClick={handleClick}
          />
        ))}
      </div>
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
      <div className='mt-[20px]'>
        <div className='flex md:gap-10 gap-5 md:flex-row flex-col'>
          <div className='flex flex-col gap-5 flex-wrap mt-4'>
            <h1 className='font-inter font-normal text-[14px]'>
              Choose a suitable date and time
            </h1>
            <div className='flex gap-4 md:pr-0 pr-2'>
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
                  className='appearance-none focus:outline-0'
                />
              </div>
            </div>
          </div>
          <div className='basis-1/3 mt-4 flex flex-col gap-3'>
            <p className='mb-2 font-inter font-normal text-[14px]'>
              Set a price
            </p>
            <div className='flex gap-2 items-center w-1/2 h-[48px] border border-[#787878] rounded-full px-2'>
              <DollarSvg />
              <input
                type='number'
                className='appearance-none focus:outline-none w-full font-inter font-normal placeholder:text-[15px] placeholder:text-black'
                placeholder='Enter price'
                value={price}
                onChange={handleChangePrice}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='my-[40px]'>
        <button
          className={`w-[248px] h-[48px] rounded-full bg-black text-white ${
            isdisabled ? 'cursor-not-allowed' : ''
          }`}
          onClick={handleSendMessage}
          disabled={isdisabled}
        >
          {loading ? <span id='loader'></span> : 'Send message'}
        </button>
      </div>
    </div>
  )
}

export default MatchTutorForm
