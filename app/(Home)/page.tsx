import type { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import IntroMessage from '@/app/(Home)/IntroMessage'
import SubjectsTaught from '@/app/(Home)/subjectstaught'
import CapableHands from '@/app/(Home)/capablehands'
import Statistics from '@/app/(Home)/statistics'

const Home: NextPage = () => {
  const inputText = 'Enter here'
  return (
    <>
      <Head>
        <title>TutorPlus</title>
        <meta name='description' content='TutorPlus App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/plus.png' />
      </Head>
      <div
        className={
          'flex justify-center items-center p-24 min-h-screen bg-white'
        }
      >
        <div className={'w-1/2 pr-4'}>
          <IntroMessage />
        </div>
        <div className={'w-1/2 pl-4'}>
          <div className={'relative h-full'}>
            <Image
              src='/images/home7.jpg'
              width={1000}
              height={400}
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>

      <div
        className={
          'flex flex-col justify-between items-center p-24 h-1/3 bg-white'
        }
      >
        <Statistics />
      </div>

      <div
        className={
          'flex flex-col justify-between items-center p-24 min-h-screen bg-white'
        }
      >
        <SubjectsTaught />
      </div>
      <div className={'flex  bg-white'}>
        <CapableHands />
      </div>
      <div
        className={
          'flex flex-col justify-between items-center p-24 min-h-screen bg-white'
        }
      ></div>
      <div
        className={
          'flex flex-col justify-between items-center p-24 min-h-screen bg-white'
        }
      ></div>
    </>
  )
}

export default Home
