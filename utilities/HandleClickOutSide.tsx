import React, { useRef, useEffect, ReactNode } from 'react'

interface Props {
  children: ReactNode
  isOpen: boolean
  onClickOutside: () => void
}

const OutsideClickWrapper = ({ children, onClickOutside, isOpen }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) 
      ) {
        onClickOutside()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickOutside, isOpen])

  return <div ref={wrapperRef}>{children}</div>
}

export default OutsideClickWrapper
