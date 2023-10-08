import React from 'react'

function Stat({ textOne, textTwo }: { textOne: string; textTwo: string }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-2 bg-black w-2/3'></div>

      <div className='my-4 text-center w-2/3'>
        <h1 className='text-6xl font-bold text-black'>{textOne}</h1>
        <h1 className='text-2xl text-black'>{textTwo}</h1>
      </div>

      <div className='h-2 bg-black w-2/3'></div>
    </div>
  )
}

export default function Statistics() {
  const buttonText = 'Start Learning Now'
  const buttonWithArrow = `${buttonText} \u2192`
  return (
    <div className='grid grid-cols-3 w-full justify-center items-center'>
      <Stat textOne={'80%'} textTwo={'Students Received Online Tuition 2020'} />
      <Stat
        textOne={'98%'}
        textTwo={
          'Students who had online tuition received an increase by one grade boundary in final exams'
        }
      />
      <Stat textOne={'80%'} textTwo={'Students Received Online Tuition 2020'} />
    </div>
  )
}
