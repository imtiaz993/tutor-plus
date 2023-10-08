import React, { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { Alert } from 'react-bootstrap'
import './LogInPage.css'
import { auth } from '@/config/firebase'
import {
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithEmailAndPassword,
} from 'firebase/auth'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const actionCodeSettings = {
    url: 'https://www.tutor-plus.com/?email=user@example.com',
    iOS: {
      bundleId: 'com.tutor-plus.ios',
    },
    android: {
      packageName: 'com.tutor-plus.android',
      installApp: true,
      minimumVersion: '12',
    },
    handleCodeInApp: true,
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const generateCode = () => {
    const min = 100000 // minimum 6-digit number
    const max = 999999 // maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await sendPasswordResetEmail(auth, email)
      setMessage('Password reset link sent.')

      // Obtain code from user.
      const code = generateCode().toString()

      // Prompt the user to enter a new password
      const newPassword = prompt('Please enter your new password')

      // Call the confirmPasswordReset method with the user's email and the password reset code
      await confirmPasswordReset(auth, code, newPassword!)
        .then(() => {
          // Call the auth.signInWithEmailAndPassword method with the user's email and new password to sign them in
          return signInWithEmailAndPassword(auth, email, newPassword!)
        })
        .then(() => {
          // Password reset successful, redirect to the home page
          window.location.href = '/'
        })
        .catch((error) => {
          // Handle errors
          console.log(error)
        })
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
      return setError(errorMessage.substring(10))
    }

    // navigate('/LogInPage')
  }

  return (
    <div className='input-container'>
      <div className='credentials'>
        <h1>Forgot your password?</h1>
        {message && <Alert variant='danger'>{message}</Alert>}
        {error && <Alert variant='danger'>{error}</Alert>}
        <form onSubmit={handleSubmit} style={{ padding: '50px' }}>
          <div className='form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button disabled={loading} type='submit'>
            Send Email
          </button>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

export default ForgotPassword
