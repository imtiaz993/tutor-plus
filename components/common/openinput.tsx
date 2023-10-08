import React from 'react'

export default function OpenInput({
  type,
  placeholder,
  id,
  value,
  required,
  fillwidth,
  bold,
  onChange,
}: {
  type?: string
  placeholder?: string
  id?: string
  value?: string
  required?: boolean
  bold?: boolean
  fillwidth?: boolean
  onChange?: (event: any) => void
}) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      id={id}
      value={value}
      required={required}
      onChange={onChange}
      className={`px-5 py-2 bg-white border-b border-black text-black hover:text-black focus:outline-none transition-colors duration-300
      ${bold ? 'font-bold' : ''}
      ${fillwidth ? 'inline-block w-full' : ''}
      `}
    />
  )
}
