'use client'

// import { useRouter } from 'next/router'
import Pagination from '@/app/TutorDashboard/Requests/pagination'
import React, { useEffect, useState } from 'react'
import { MessageRequests, deleteMessage } from '@/api/tutor'
import { Heart, LeftArrow, SearchIcon, WhatsappDash } from '@/images/svg'

const Requests = () => {
  const [expanded, setExpanded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [requests, setRequest] = useState<any>([])
  const [deleteReq, setDeleteReq] = useState(false)
  const [totalPageSize, setTotalPageSize] = useState(1)

  // const router = useRouter()

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log('handleSubmit')
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const deleteMesage = async (messageId: string) => {
    try {
      const confirmation = window.confirm('Are you sure you want to delete?')

      if (confirmation) {
        setDeleteReq(!deleteReq)
        await deleteMessage('s4abCirorSn1wvBm2cKo', messageId)
      }
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    const retrieveMessage = async () => {
      try {
        const { messages, totalPages } = await MessageRequests(
          's4abCirorSn1wvBm2cKo',
          currentPage,
          5
        )
        setRequest(messages)
        setTotalPageSize(totalPages)
      } catch (err) {
        console.log({ err })
      }
    }

    retrieveMessage()
  }, [currentPage, deleteReq])

  return (
    <section className='md:px-[30px] py-[34px]'>
      <div className='flex items-center justify-between mb-12'>
        <div
          className='cursor-pointer hover:bg-grey rounded-full p-1'
          // onClick={() => router.back()}
        >
          <LeftArrow />
        </div>
        <div className='flex items-center max-h-10'>
          <button
            className='order-2 w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full focus:outline-none transition duration-300'
            onClick={toggleExpand}
          >
            <SearchIcon />
          </button>
          {expanded && (
            <form
              onSubmit={handleSubmit}
              className='flex items-center justify-between'
            >
              <input
                type='text'
                className={`${
                  expanded ? 'w-60' : 'w-0'
                } order-1 bg-gray-200 text-gray-600 rounded-full px-4 py-2  pr-3 focus:outline-none transition-all duration-300 border`}
                placeholder='Search...'
              />
            </form>
          )}
        </div>
      </div>
      {requests.length !== 0 ? (
        requests?.map((request: any, index: any) => (
          <div
            className='flex items-center md:justify-between border-b-2 border-[#787878] px-[20px] mt-2'
            key={index}
          >
            <div className='flex flex-col'>
              <div className='flex gap-2'>
                <h1 className='font-inter font-bold text-[16px]'>
                  {request?.studentName}
                </h1>
                <p>{request?.time}</p>
              </div>
              <p className='pb-3 font-inter font-normal text-[12px] mt-2'>
                {request?.message}
              </p>
            </div>
            <div className='flex gap-3'>
              <div
                className='cursor-pointer flex items-center justify-center'
                onClick={() => deleteMesage(request.id)}
              >
                <Heart />
              </div>
              <div className='cursor-pointer flex items-center justify-center'>
                <WhatsappDash />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex items-center justify-center px-[20px] mt-2'>
          <p className='pb-3 font-inter font-normal text-[12px] mt-2'>
            There is no message request recevied
          </p>
        </div>
      )}

      <div>
        {requests?.length > 0 && (
          <Pagination
            totalPages={totalPageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  )
}

// Requests.Layout = DashboardLayout;

export default Requests
