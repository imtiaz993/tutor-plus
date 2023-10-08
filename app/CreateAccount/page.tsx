import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { Alert } from 'react-bootstrap'
import { auth } from '@/config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function CreateAccount() { 
  
  const [email, setEmail]                               = useState('')
  const [password, setPassword]                         = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError]                               = useState('')
  const [loading, setLoading]                           = useState(false)

  const reloadPage = () => {
    window.location.reload()
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handlePasswordConfirmationChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== passwordConfirmation) {
      console.log('Passwords do not match.')
      return setError('Passwords do not match.')
    } else {
      setLoading(true)
      event.preventDefault()
      console.log('Email:', email)
      console.log('Password:', password)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          return setError(errorMessage.substring(10))
        })
      setLoading(false)
    }
  }

  return (
    <div className='input-container'>
      <div className='credentials'>
        <h1>Create Account</h1>
        {error && <Alert variant='danger'>{error}</Alert>}
        <form onSubmit={handleSubmit} style={{ padding: '50px' }}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password Confirmation</label>
            <input
              type='password'
              id='password-conf'
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              required
            />
          </div>
          <button className='next-button' disabled={loading} type='submit'>
            Next
          </button>
        </form>
        <Link href='/LogInPage'>
          <button>Already have an account?</button>
          <button className='bold'>Sign In</button>
        </Link>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

export default CreateAccount
