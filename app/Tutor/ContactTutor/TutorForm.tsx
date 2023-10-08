import { useRouter } from 'next/router'
import Textarea from '@/components/common/textarea'
import Selector from '@/components/common/selector'
import { DollarSvg } from '@/images/svg'
import { ContatctTutor, fetchSubject } from '@/api/tutor'
import { ExamBoards } from '@/utilities/fetchExamBoard'
import Roundedbutton from '@/components/common/roundedbutton'
import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState,
} from 'react'

/** Component Props */
interface TutorForm {
  tutorData: any
}

const TutorForm: FC<TutorForm> = ({ tutorData }): ReactElement => {
  /** States */
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  )
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', { hour12: false })
  )
  const [selectedtext, setSelectedText] = useState<string>('')
  const [selectedBoard, setSelectedBoard] = useState<string>('')
  const [message, setMessage] = useState('')
  const [price, setPrice] = useState(1)
  const [isdisabled, setDisabled] = useState(true)
  const [subject, setSubject] = useState('')
  const [examBoard, setExamBoard] = useState<any>([])
  const [tutorSubjects, setTutorSubjects] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const tutorId: any = router.query.tutorId

  /** Handle Change callbacks */
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value)
    checkInputs()
  }

  const handleSelector = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubject(event.target.value)
    checkInputs()
  }

  const handleClick = (text: string) => {
    if (selectedtext !== text) {
      setSelectedText(text)
    }
    checkInputs()
  }
  const handleClickBoard = (text: string) => {
    if (selectedBoard !== text) {
      setSelectedBoard(text)
    }
    checkInputs()
  }

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value)
    if (isNaN(newPrice) || newPrice < 0) {
      setPrice(1)
    } else {
      setPrice(newPrice)
    }
    checkInputs()
  }
  /** Send Message to Tutor */
  const handleSendMessage: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    const messageData = {
      subject,
      lessons: selectedtext,
      examBoard: selectedBoard,
      message,
      price: price.toFixed(2),
      date,
      time,
      timestamp: new Date(),
    }

    try {
      setLoading(true)
      const response = await ContatctTutor(tutorId, messageData)
      setLoading(false)
      setPrice(1)
      setMessage('')
      setSelectedBoard('')
      setSelectedText('')
      setDisabled(true)
    } catch (err) {
      setLoading(false)
      console.log({ err })
    }
    // router.push("/TutorProfile") TODO:Enable when redirect
  }

  const checkInputs = () => {
    if (
      subject.trim() === '' ||
      selectedBoard.trim() === '' ||
      message.trim() === '' ||
      selectedtext.trim() === ''
    ) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res: any = await ExamBoards(subject)
        setExamBoard(res)
      } catch (err) {
        console.log(err)
      }
    }

    if (subject) {
      fetchBoard()
    }
  }, [subject])

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subData: any = await fetchSubject(tutorId)
        setTutorSubjects(subData)
      } catch (err) {
        console.log({ err })
      }
    }

    fetchSubjects()
  }, [tutorId])

  return (
    <>
      <div className='md:pr-[300px] pr-1'>
        <h1 className='font-inter font-bold text-[24px]'>
          What would you like to learn
        </h1>
        <p className='font-inter font-normal text-[16px] mt-1'>
          Share your requirements with Peny, and we`&apos;`ll send you an email
          as soon as we hear back from them (typically within 24 hours).
        </p>
      </div>
      <div className='mt-4 md:pr-[150px] pr-1'>
        <div className='flex md:gap-12 gap-5'>
          <div className='basis-3/4'>
            <Selector
              label={'Subject and its level?'}
              data={tutorSubjects}
              onChange={handleSelector}
            />
          </div>
          <div className='lg:basis-1/4 basis-[30%]'>
            <p className='mb-[12px] font-inter font-normal text-[14px]'>
              Set a price
            </p>
            <div className='flex gap-2 items-center w-full h-[48px] border border-[#787878] rounded-full px-2'>
              <DollarSvg />
              <input
                type='text'
                className='appearance-none focus:outline-none w-full font-inter font-medium placeholder:text-[20px] placeholder:text-black'
                placeholder='24'
                value={price}
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </div>
        <div className='mt-[20px]'>
          <h1 className='font-inter font-normal text-[14px]'>
            When would you like to have your lessons?
          </h1>
          <div className='flex gap-5 flex-wrap'>
            {['Once', 'Twice', 'I’ll Decide later'].map((text, index) => (
              <Roundedbutton
                key={index}
                selected={selectedtext === text}
                text={text}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        <div className='mt-[20px]'>
          <h1 className='font-inter font-normal text-[14px]'>Exam board?</h1>
          <div className='flex gap-5 flex-wrap'>
            {examBoard?.length ? (
              examBoard?.map((text: string, index: number) => (
                <Roundedbutton
                  key={index}
                  selected={selectedBoard === text}
                  text={text}
                  handleClick={handleClickBoard}
                />
              ))
            ) : (
              <span className='mt-2 text-[14px]'>
                Select subject to see board
              </span>
            )}
          </div>
        </div>
        <div className='mt-[20px]'>
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
          <h1 className='font-inter font-normal text-[14px]'>
            Choose a suitable date and time
          </h1>
          <div className='flex gap-5 flex-wrap mt-4'>
            <div className='h-[48px] w-[151px]  rounded-full px-3 py-2 flex items-center justify-center border'>
              <input
                type='date'
                id='birthday'
                name='birthday'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='appearance-none focus:outline-0'
              />
            </div>
            <div className='h-[48px] w-[151px]  rounded-full px-1 py-2 flex items-center justify-center border'>
              <input
                type='time'
                id='appt'
                name='appt'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onFocus={(e) => setTime(e.target.value)}
                className='appearance-none focus:outline-0'
              />
            </div>
          </div>
        </div>
        <div className='my-5'>
          <button
            className={`w-[248px] md:w-[325px] h-[48px] rounded-full bg-black text-white ${
              isdisabled ? 'cursor-not-allowed' : ''
            }`}
            onClick={handleSendMessage}
            disabled={isdisabled}
          >
            {loading ? <span id='loader'></span> : 'Send message'}
          </button>
        </div>
      </div>
    </>
  )
}

export default TutorForm
