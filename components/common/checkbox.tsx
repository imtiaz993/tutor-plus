import { FC } from 'react'

interface CheckboxProps {
  label?: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked)
  }

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        className='w-[20px] rounded-full text-yellow-500 checked:outline-1 checked:rounded-lg'
      />
      <label>{label}</label>
    </div>
  )
}

export default Checkbox
