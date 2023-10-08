import React from 'react'

export default function ClosedInput({
  text,
  bold,
  label,
  fillwidth,
}: {
  text?: string
  bold?: boolean
  label?: string
  fillwidth?: boolean
}) {
  return (
    <input
      type='text'
      placeholder={text}
      id={label}
      className={`px-5 py-2 bg-white rounded-full border border-black text-black hover:bg-grey hover:text-black focus:bg-grey focus:outline-none transition-colors duration-300
      ${bold ? 'font-bold' : ''}
      ${fillwidth ? 'inline-block w-full' : ''}
      `}
    />
  )
}
