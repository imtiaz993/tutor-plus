import React from 'react'
import LoginPanel from '@/app/SignIn/LoginPanel'

const LogIn = () => {
  return (
    <div
      className={'flex justify-center items-center p-24 min-h-screen bg-white'}
    >
      <div className={'w-1/3'}>
        <div className={''}>
          <LoginPanel />
        </div>
      </div>
    </div>
  )
}

export default LogIn
