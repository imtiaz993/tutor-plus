import React from 'react';
import Image from 'next/image';

const AuthNavbar = () => {
  return (
    <nav className='bg-white sticky top-0 z-10'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/tutorpluslogo.png'
              width={150}
              height={150}
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
