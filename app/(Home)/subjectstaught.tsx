/* eslint-disable */

import React from 'react'

function Subject({
  text,
  colour,
  blackText,
}: {
  text: string
  colour: string
  blackText?: boolean
}) {
  const colourSwitch = (colour: string) => {
    switch (colour) {
      case 'Green':
        return 'bg-pastelgreen border-pastelgreen'
      case 'Pink':
        return 'bg-pastelpink border-pastelpink'
      case 'Black':
        return 'bg-black border-black'
      case 'Blue':
        return 'bg-pastelblue border-pastelblue'
      case 'Yellow':
        return 'bg-pastelyellow border-pastelyellow'
      case 'Grey':
        return 'bg-grey border-grey'
      case 'White':
        return 'bg-white border-black'
    }
  }
  return (
    <div
      className={`px-6 py-4 text-2xl font-bold rounded-full border hover:bg-grey hover:text-black hover:border-black focus:outline-none transition-colors duration-300
      ${colourSwitch(colour)}
      ${blackText ? 'text-black' : 'text-white'}
      `}
    >
      {text}
    </div>
  )
}

function SubjectsTaught() {
  return (
    <>
      <h1 className='font-bold text-black text-7xl py-5'>
        100s of subjects taught, you name it, we teach it
      </h1>
      <div>
        <div className={'flex space-x-4'}>
          <Subject text={'Development'} colour={'Green'} blackText />
          <Subject text={'Buisness'} colour={'Pink'} blackText />
          <Subject text={'Accounting and Bookeeping'} colour={'Black'} />
          <Subject text={'Hardware'} colour={'Blue'} />
          <Subject
            text={'Personal Transformation'}
            colour={'Green'}
            blackText
          />
          <Subject text={'Web Design'} colour={'Pink'} blackText />
          <Subject text={'Graphic Design'} colour={'Black'} />
        </div>
      </div>
      <div className={'flex space-x-10'}>
        <Subject text={'Web Development'} colour={'Black'} />
        <Subject text={'Communication'} colour={'Green'} blackText />
        <Subject text={'Cryptocurrency & Blockchain'} colour={'Grey'} />
        <Subject
          text={'Operating Systems and Servers'}
          colour={'Yellow'}
          blackText
        />
        <Subject text={'Personal Productivity'} colour={'Blue'} />
      </div>
      <div className={'flex space-x-7'}>
        <Subject text={'Mobile Development'} colour={'Yellow'} blackText />
        <Subject text={'Management'} colour={'Black'} />
        <Subject text={'Finance'} colour={'Yellow'} blackText />
        <Subject text={'Other IT Software'} colour={'Black'} />
        <Subject text={'Leadership'} colour={'Black'} />
        <Subject text={'Illustrations'} colour={'Green'} blackText />
        <Subject text={'Design Tools'} colour={'Black'} />
        <Subject text={'UI/UX'} colour={'Yellow'} blackText />
      </div>
      <div className={'flex space-x-11'}>
        <Subject text={'Game Development'} colour={'Grey'} />
        <Subject text={'Sales'} colour={'Black'} />
        <Subject
          text={'Finance Modelling & Analsyis'}
          colour={'Pink'}
          blackText
        />
        <Subject text={'Office Productivity'} colour={'Blue'} />
        <Subject text={'Career Development'} colour={'Black'} />
        <Subject text={'Game Design'} colour={'Black'} />
      </div>
      <div className={'flex space-x-14'}>
        <Subject text={'Programming Languages'} colour={'Black'} />
        <Subject text={'Business Management'} colour={'Blue'} />
        <Subject text={'Investment and Trading'} colour={'Black'} />
        <Subject text={'Google Suit'} colour={'Black'} />
        <Subject
          text={'Parenting and Relationships'}
          colour={'Pink'}
          blackText
        />
      </div>
      <div className={'flex space-x-12'}>
        <Subject
          text={'Database Design and Development'}
          colour={'Pink'}
          blackText
        />
        <Subject text={'Business Strategy'} colour={'Black'} />
        <Subject text={'IT Softwares'} colour={'Green'} blackText />
        <Subject text={'Microsoft Suit'} colour={'Black'} />
        <Subject text={'Design'} colour={'Black'} />
        <Subject text={'3D and Animations'} colour={'Black'} />
      </div>
      <div className={'flex space-x-7'}>
        <Subject text={'Instruments'} colour={'Black'} />
        <Subject text={'Music Production'} colour={'Black'} />
        <Subject text={'Music Fundamentals'} colour={'Grey'} />
        <Subject text={'Vocals'} colour={'Black'} />
        <Subject text={'Music Techniques'} colour={'Yellow'} blackText />
        <Subject text={'Music Software'} colour={'Green'} blackText />
        <Subject text={'Digital Marketing'} colour={'Black'} />
      </div>
      <div className={'flex space-x-6'}>
        <Subject text={'SEO'} colour={'Pink'} blackText />
        <Subject text={'Branding'} colour={'Black'} />
        <Subject text={'Social Media Marketing'} colour={'Blue'} />
        <Subject text={'Marketing Fundamentals'} colour={'Black'} />
        <Subject text={'Marketing Analytics and Automation'} colour={'Black'} />
        <Subject text={'Health and Fitness'} colour={'Pink'} blackText />
      </div>
      <div className={'flex space-x-16'}>
        <Subject text={'Fitness'} colour={'Yellow'} blackText />
        <Subject text={'General Health'} colour={'Black'} />
        <Subject text={'Nutrition and Diet'} colour={'Green'} blackText />
        <Subject text={'Sports'} colour={'Pink'} blackText />
        <Subject text={'Yoga'} colour={'Green'} blackText />
        <Subject text={'Mental Health'} colour={'Blue'} />
        <Subject text={'100+ More Available'} colour={'White'} blackText />
      </div>
    </>
  )
}

export default SubjectsTaught
