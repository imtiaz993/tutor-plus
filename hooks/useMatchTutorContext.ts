import { useContext } from 'react'
import { MessageDataContext } from '@/context/MatchTutor'

export function useMatchTutorContext() {
  return useContext(MessageDataContext)
}
