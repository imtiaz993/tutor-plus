import React from 'react'

export default function YellowButton({
  text,
  bold,
  disabled,
  type,
  fillwidth,
  icon,
  onClick,
}: {
  text: string
  bold?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  fillwidth?: boolean
  icon?: JSX.Element
  onClick?: () => void
}) {
  return (
    <button
      className={`px-5 py-2 bg-yellow rounded-full border border-yellow text-black hover:bg-grey hover:text-black hover:border-black focus:outline-none transition-colors duration-300
      ${bold ? 'font-bold' : ''}
      ${fillwidth ? 'inline-block w-full' : ''}
      `}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
