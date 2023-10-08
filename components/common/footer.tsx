import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4'>
        <div>
          <h2 className='text-gray-700 font-bold'>About</h2>
          <ul className='mt-4'>
            <li>
              <Link
                href='/who-are-we'
                className='text-gray-600 hover:text-gray-800'
              >
                Who are we
              </Link>
            </li>
            <li>
              <Link
                href='/our-commitment'
                className='text-gray-600 hover:text-gray-800'
              >
                Our Commitment
              </Link>
            </li>
            <li>
              <Link
                href='/terms-and-conditions'
                className='text-gray-600 hover:text-gray-800'
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                href='/privacy-policy'
                className='text-gray-600 hover:text-gray-800'
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-gray-700 font-bold'>Help</h2>
          <ul className='mt-4'>
            <li>
              <Link
                href='/need-help'
                className='text-gray-600 hover:text-gray-800'
              >
                Need Help?
              </Link>
            </li>
            <li>
              <Link
                href='/contact-us'
                className='text-gray-600 hover:text-gray-800'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-gray-700 font-bold'>Popular Subjects</h2>
          <ul className='mt-4'>
            <li>
              <Link
                href='/gcse-biology'
                className='text-gray-600 hover:text-gray-800'
              >
                GCSE Biology
              </Link>
            </li>
            <li>
              <Link
                href='/gcse-chemistry'
                className='text-gray-600 hover:text-gray-800'
              >
                GCSE Chemistry
              </Link>
            </li>
            <li>
              <Link
                href='/gcse-mathematics'
                className='text-gray-600 hover:text-gray-800'
              >
                GCSE Mathematics
              </Link>
            </li>
            <li>
              <Link
                href='/gcse-physics'
                className='text-gray-600 hover:text-gray-800'
              >
                GCSE Physics
              </Link>
            </li>
            <li>
              <Link
                href='/a-level-biology'
                className='text-gray-600 hover:text-gray-800'
              >
                A-Level Biology
              </Link>
            </li>
            <li>
              <Link
                href='/a-level-chemistry'
                className='text-gray-600 hover:text-gray-800'
              >
                A-Level Chemistry
              </Link>
            </li>
            <li>
              <Link
                href='/a-level-mathematics'
                className='text-gray-600 hover:text-gray-800'
              >
                A-Level Mathematics
              </Link>
            </li>
            <li>
              <Link
                href='/a-level-physics'
                className='text-gray-600 hover:text-gray-800'
              >
                A-Level Physics
              </Link>
            </li>
            {/* Add more popular subject links as needed */}
          </ul>
        </div>
        <div>
          <h2 className='text-gray-700 font-bold'>Follow Us</h2>
          <ul className='mt-4'>
            <li>
              <a
                href='https://www.instagram.com/'
                className='text-gray-600 hover:text-gray-800'
              >
                <i className='fab fa-instagram'></i> Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/'
                className='text-gray-600 hover:text-gray-800'
              >
                <i className='fab fa-linkedin'></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href='mailto:info@example.com'
                className='text-gray-600 hover:text-gray-800'
              >
                <i className='far fa-envelope'></i> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-white inline-block w-11/12 py-0.5 justify-center'></div>
      <div>
        <a>Copyright. TutorPlus 2023</a>
      </div>
    </footer>
  )
}

export default Footer
