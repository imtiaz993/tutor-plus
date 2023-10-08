import React from 'react'

export default function BlackButton({
  text,
  bold,
  disabled,
  type,
  fillwidth,
  onClick,
  styles
}: {
  text: string
  bold?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  fillwidth?: boolean
  onClick?: () => void
  styles?: string
}) {
  return (
    <button
      className={`px-5 py-2 bg-black rounded-full border border-black text-white hover:bg-grey hover:text-black focus:outline-none transition-colors duration-300
      ${bold ? 'font-bold' : ''}
      ${fillwidth ? 'inline-block w-full' : ''}
       ${styles}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
