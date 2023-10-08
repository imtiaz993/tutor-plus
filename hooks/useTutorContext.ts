import { useContext } from 'react'
import { TutorContext } from '@/context/TutorContext'

export function useTutorContext() {
    return useContext(TutorContext)
  }