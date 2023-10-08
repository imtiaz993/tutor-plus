'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { auth } from '@/config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import BlackButton from '@/components/common/blackbutton'
import WhiteButton from '@/components/common/whitebutton'
import OpenInput from '@/components/common/openinput'
import { useRouter } from 'next/navigation'

const LoginPanel = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  const router = useRouter()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        router.push('./TutorDashboard/Profile')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setIncorrect(true)
        console.log(errorCode)
        console.log(errorMessage)
      })
    setLoading(false)
  }

  const handleIncorrectInput = () => {
    if (incorrect == false) {
      return (
        <p className={'text-center text-white font-bold text-l '}>
          Incorrect username or password.
        </p>
      )
    } else {
      return (
        <p className={'text-center text-red font-bold text-l '}>
          Incorrect username or password.
        </p>
      )
    }
  }

  return (
    <div className='panel'>
      <p className={'text-center text-black text-l pb-10'}>
        Sign in to your account to continue.
      </p>
      {handleIncorrectInput()}
      <form onSubmit={handleSubmit}>
        <div className={'py-2'}>
          <label>
            <p className={'text-grey text-l'}>Email</p>
            <OpenInput
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              required
              fillwidth
            />
          </label>
        </div>
        <div className={'py-2'}>
          <label>
            <p className={'text-grey text-l'}>Password</p>
            <OpenInput
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
              fillwidth
            />
          </label>
        </div>
        <div className={'py-2 pt-10'}>
          <BlackButton
            text={'Sign In'}
            disabled={loading}
            type={'submit'}
            bold
            fillwidth
          />
        </div>
        <div className={'py-2'}>
          <Link href='/ForgotPasswordPage'>
            <WhiteButton
              text={'Forgot Password'}
              type={'button'}
              fillwidth
              bold
            />
          </Link>
        </div>
        <div className={'py-2 text-center'}>
          <div onClick={() => router.push('./Signup')}>
            <button className={'text-grey pr-2'}>
              Don&apos;t have an account?
            </button>
            <button className={'font-bold text-black'}>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPanel
