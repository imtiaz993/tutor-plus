import { ChangeEventHandler, FC } from 'react'

interface TextareaProps {
  label?: string
  name: string
  placeholder?: string
  value: string
  rows?: number
  cols?: number
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const Textarea: FC<TextareaProps> = ({
  label,
  name,
  placeholder,
  value,
  rows = 3,
  cols,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          {label}
        </label>
      )}
      <textarea
        name={name}
        className='focus:outline-none w-full'
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Textarea
