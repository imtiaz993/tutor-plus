'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { auth } from '@/config/firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import BlackButton from '@/components/common/blackbutton'
import WhiteButton from './common/whitebutton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [uid, setUID] = useState('')

  const instagram = 'Instagram'
  const linkedin = 'LinkedIn'
  const email = 'Email'
  const signin = 'Sign In'
  const signinwitharrow = `${signin} \u2192`
  const signup = 'Sign Up'

  const router = useRouter()

  const reloadPage = () => {
    window.location.reload()
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Log out')
      })
      .catch((error) => {})
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUID(user.uid)
      console.log('User ID: ' + uid)
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  })

  const handleEmailClick = () => {
    const emailAddress = 'admin@tutor-plus.co.uk'
    const mailtoLink = `mailto:${emailAddress}`

    window.location.href = mailtoLink
  }

  const handleInstagramClick = () => {
    const instagramUsername = 'example_username'
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`

    window.open(instagramUrl, '_blank')
  }

  const handleLinkedInClick = () => {
    const linkedinUsername = 'example_username'
    const linkedinUrl = `https://www.linkedin.com/${linkedinUsername}/`

    window.open(linkedinUrl, '_blank')
  }

  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo on the left */}
          <div className='flex-shrink-0'>
            <Image
              src='/images/tutorpluslogo.png'
              width={150}
              height={150}
              alt='Picture of the author'
            />
          </div>
          {/* Centered buttons */}
          <div className='flex justify-center flex-1'>
            <WhiteButton text={instagram} bold onClick={handleInstagramClick} />
            <WhiteButton text={linkedin} bold onClick={handleLinkedInClick} />
            <WhiteButton text={email} bold onClick={handleEmailClick} />
          </div>
          {/* Right-aligned buttons */}
          <div className='flex items-center'>
            <Link href='/SignIn'>
              <BlackButton text={signin} bold />
            </Link>
            <Link href='/Signup'>
              <WhiteButton
                text={signup}
                bold
                onClick={() => router.push('/Signup/TutorSignup')}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// return (
//   <Nav>
//     <NavMenu>
//       <NavLink to='/LandingPage' activestyle='true'>
//         <Logo
//           src={require('../images/tutorpluslogo.png')}
//           alt='React Image'
//         />
//       </NavLink>
//     </NavMenu>
//     <NavMenu>
//       {loggedIn ? (
//         <NavLink to='/StudentDashboard' activestyle='true'>
//           <TextHeader>S Dash</TextHeader>
//         </NavLink>
//       ) : (
//         <NavLink to='/StudentPage' activestyle='true'>
//           <TextHeader>I am a Student</TextHeader>
//         </NavLink>
//       )}
//       {loggedIn ? (
//         <NavLink to='/TutorDashboard' activestyle='true'>
//           <TextHeader>T Dash</TextHeader>
//         </NavLink>
//       ) : (
//         <NavLink to='/TutorPage' activestyle='true'>
//           <TextHeader>I am a Tutor</TextHeader>
//         </NavLink>
//       )}
//       {loggedIn ? (
//         <NavButton onClick={logOut}>
//           <TextHeader>Log Out</TextHeader>
//         </NavButton>
//       ) : (
//         <NavLink to='/LogInPage' activestyle='true'>
//           <TextHeader>Log In</TextHeader>
//         </NavLink>
//       )}
//     </NavMenu>
//   </Nav>
