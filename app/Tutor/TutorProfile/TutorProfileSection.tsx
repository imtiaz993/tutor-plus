import Image from 'next/image'
import React, { FC, ReactElement } from 'react'
import Reviews from '@/app/Tutor/TutorProfile/ReviewList'
import BlackButton from '@/components/common/blackbutton'
import { Whatsapp } from '@/images/svg'
import ButtonwithIcon from '@/components/common/buttonwithIcon'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
import { useTutorContext } from '@/hooks/useTutorContext'

/*Component Interface*/
interface ProfileSectionProps {}

const ProfileCard: FC<ProfileSectionProps> = (): ReactElement => {
  const router = useRouter()
  const { state }: any = useTutorContext()
  const { tutor, loading } = state || {}

  const handlebtnClick = () =>
    router.push({ pathname: '/HireTutor', query: { tutorId: tutor.id } })
  const handleTutorbtn = () =>
    router.push({ pathname: '/ContactTutor', query: { tutorId: tutor.id } })
  const fullName: string = tutor && tutor.firstName + ' ' + tutor.lastName

  return (
    <div className='mt-3'>
      <div className='flex md:flex-row flex-col gap-4 sm:flex-wrap xl:flex-nowrap'>
        <div className='flex-shrink-0 w-auto h-auto md:block flex justify-center'>
          <Image
            src={require('@/resources/userProfile.png')}
            placeholder='blur'
            height='245'
            width='315'
            alt='user'
          />
        </div>
        <div className='flex flex-col'>
          {loading ? (
            <Skeleton count={7} />
          ) : (
            <>
              <div className='flex md:justify-between items-center md:flex-row flex-col flex-wrap'>
                <h1 className='font-inter font-bold text-[24px]'>{fullName}</h1>
                <span className='font-inter font-semibold text-[16px]'>
                  {`$ ${tutor?.price?.toFixed(2)} / Hr`}
                </span>
              </div>
              <h1 className='font-inter font-light text-[16px]'>
                {tutor?.university}
              </h1>
              <p className='font-inter font-medium text-[16px] text-justify'>
                {tutor?.description}
              </p>
            </>
          )}

          <div className='mt-3 flex md:flex-row flex-col gap-2 sm:flex-wrap lg:flex-nowrap'>
            <BlackButton
              text={'Hire Tutor'}
              fillwidth={true}
              onClick={handlebtnClick}
            />
            <ButtonwithIcon
              text={'Contact Tutor'}
              icon={<Whatsapp />}
              onClick={handleTutorbtn}
            />
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  )
}

export default ProfileCard
