import Input from '@/components/common/Input'
import Label from '@/components/common/Label'
import React, { useState } from 'react'
import { hireTutor } from '@/api/tutor'
import { useRouter } from 'next/router'
import Checkbox from '@/components/common/checkbox'
import ButtonwithIcon from '@/components/common/buttonwithIcon'
import { Card, Debitcard, Paypal, Visa } from '@/images/svg'
import { useMatchTutorContext } from '@/hooks/useMatchTutorContext'

/** State Props  */
interface PayMethodSelectedProps {
  ispaypal: boolean
  isCard: boolean
  isDebitcard: boolean
}

const CheckOutForm = () => {
  const [payMethodSelected, setPayMethodSelected] =
    useState<PayMethodSelectedProps>({
      ispaypal: false,
      isCard: false,
      isDebitcard: false,
    })
  const [loading, setLoading] = useState(false)
  const { messageData } = useMatchTutorContext()
  const [isChecked, setIsChecked] = useState(false)

  const router = useRouter()

  const handleSelectedPayMethod =
    (type: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      switch (type) {
        case 'Paypal': {
          setPayMethodSelected({
            ispaypal: true,
            isCard: false,
            isDebitcard: false,
          })
          break
        }
        case 'Card': {
          setPayMethodSelected({
            isCard: true,
            ispaypal: false,
            isDebitcard: false,
          })
          break
        }
        case 'DebitCard': {
          setPayMethodSelected({
            isDebitcard: true,
            ispaypal: false,
            isCard: false,
          })
          break
        }
        default: {
          return {
            ...payMethodSelected,
          }
        }
      }
    }

  const handlePayClick = async () => {
    const isObjectEmpty = Object.keys(messageData).length == 0
    if (!isChecked || isObjectEmpty) {
      alert('Please Fill all the fields')
      return
    }
    const tutordata = {
      ...messageData,
      tutorID: 's4abCirorSn1wvBm2cKo',
      studentID: 'w3ssEFtP8aQF7Dn9C8dZ',
      studentName: 'Mackbook',
      timestmp: new Date(),
    }
    try {
      setLoading(true)
      await hireTutor(tutordata)
      setLoading(false)
      router.push('/Congrats')
    } catch (err) {
      setLoading(false)
      alert('SomeThing Wrong')
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked)
  }

  return (
    <div className='md:pr-[270px] pr-1'>
      <div className='flex justify-between mt-[56px]'>
        <div>
          <p className='font-inter font-medium text-[14px]'>Total Price</p>
          <p className='font-inter font-medium text-[14px]'>
            Taxes and Changes
          </p>
          <p className='font-inter font-medium text-[14px]'>Discount</p>
          <p className='font-inter font-bold text-[14px] text-[#FFC130]'>
            Total
          </p>
        </div>
        <div>
          <p className='font-inter font-medium text-[14px]'>$ 24.00</p>
          <p className='font-inter font-medium text-[14px]'>$ 05.99</p>
          <p className='font-inter font-medium text-[14px]'>--------</p>
          <p className='font-inter font-bold text-[14px] text-[#FFC130]'>
            $30.00{' '}
          </p>
        </div>
      </div>
      <div className='flex gap-5 flex-wrap mt-[30px]'>
        <div>
          <Label text={'Name'} />
          <Input type='text' placeholder='Mickey' />
        </div>
        <div>
          <Label text={'Email Address'} />
          <Input type='text' placeholder='Mickey@disney.com' />
        </div>
        <div>
          <Label text={'Phone Number'} />
          <Input type='text' placeholder='+44 9647924819' />
        </div>
      </div>
      <div className='flex flex-col mt-[24px]'>
        <h1 className='font-inter font-bold text-[24px] mb-[12px]'>
          Pay Using
        </h1>
        <div className='flex gap-5 flex-wrap'>
          <ButtonwithIcon
            text={'Paypal'}
            icon={<Paypal isSelected={payMethodSelected.ispaypal} />}
            onClick={(e) => handleSelectedPayMethod('Paypal')(e)}
            isSelected={payMethodSelected.ispaypal}
          />
          <ButtonwithIcon
            text={'Credit Card'}
            icon={<Card isSelected={payMethodSelected.isCard} />}
            onClick={(e) => handleSelectedPayMethod('Card')(e)}
            isSelected={payMethodSelected.isCard}
          />
          <ButtonwithIcon
            text={'DebitCard'}
            icon={<Debitcard isSelected={payMethodSelected.isDebitcard} />}
            onClick={(e) => handleSelectedPayMethod('DebitCard')(e)}
            isSelected={payMethodSelected.isDebitcard}
          />
        </div>
      </div>
      {payMethodSelected.isDebitcard && (
        <div className='flex flex-col mt-[24px] lg:pr-[200px]'>
          <h1 className='font-inter font-bold text-[24px] mb-[12px]'>
            Card Details
          </h1>
          <div className='my-2'>
            <Label text={'Name on Card'} />
            <Input type='text' placeholder='Mickey' isFullwidth={true} />
          </div>
          <div className='my-2'>
            <Label text={'Card Number'} />
            <Input
              type='text'
              placeholder='Mickey'
              isFullwidth={true}
              icon={<Visa />}
            />
          </div>
          <div className='flex gap-3 flex-wrap'>
            <div>
              <Label text={'Valid From'} />
              <Input type='text' placeholder='13/05' />
            </div>
            <div>
              <Label text={'CVV'} />
              <Input type='text' placeholder='***' />
            </div>
          </div>
        </div>
      )}
      <div className='flex gap-5 mt-[26px]'>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <p className='font-inter font-medium text-[14px]'>
          Securely save this card for a faster checkout next time
        </p>
      </div>
      <div className='my-5 lg:pr-[200px]'>
        <button
          className='w-full rounded-full text-[16px] font-inter font-semibold bg-black text-white flex justify-center items-center py-4'
          onClick={handlePayClick}
        >
          {loading ? <span id='loader'></span> : 'Pay $30'}
        </button>
      </div>
    </div>
  )
}

export default CheckOutForm
