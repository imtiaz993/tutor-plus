import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import BlackButton from '@/components/common/blackbutton'

interface WorkData {
    title: string,
    subject: string,
    type: string,
    price: string,
    file: any
}

interface UploadWorkProps {
    data: WorkData[];
    setFiles: (value: any) => void
    setShowPopup: (value: boolean) => void
}

const UploadWork = ({ setShowPopup, setFiles, data }: UploadWorkProps) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'image/png': ['.png'],
            'application/pdf': ['.pdf'],
            'application/doc': ['.doc'],
            'application/docx': ['.docx'],
        },
        multiple: false
    })

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            setFiles([...acceptedFiles])
            setShowPopup(true)
        }
    }, [acceptedFiles, setFiles, setShowPopup])

    return (
        <div className='pt-10 pb-3 px-6 bg-[#E8E8E8] mt-4 grid grid-cols-5 min-h-[334px]  items-start'>
            <div
                {...getRootProps({
                    className: 'col-span-2 cursor-pointer',
                })}
            >
                <label className='text-sm flex justify-center flex-col items-center pt-8 pb-6 border-2 border-dashed rounded-2xl cursor-pointer'>
                    <Image
                        src={'/images/svg/upload.svg'}
                        alt={'upload'}
                        width={55}
                        height={50}
                        className='mb-5'
                    />
                    <span>
                        <span className='border-b'>Click to upload</span> or drag and drop
                    </span>
                </label>
            </div>
            <div></div>
            <div className='col-span-2 flex flex-col justify-between'>
                <div>
                    {data.map((file: WorkData, index: number) => (
                        <div className='flex justify-between items-center border-2 rounded-xl py-3 px-5 mb-2' key={index}>
                            <div className='flex items-center w-2/3 break-words'>
                                <Image
                                    src={'/images/svg/document.svg'}
                                    alt={'upload'}
                                    width={26.6}
                                    height={32.8}
                                    className='mr-5'
                                />
                                <p className='text-sm w-[calc(100%-26.6px)] break-words'>{file.title}</p>
                            </div>
                            <BlackButton
                                text='Edit'
                                onClick={() => { }}
                                styles='!bg-[transparent] !text-black rounded-lg px-6'
                            />
                        </div>
                    ))}

                </div>
                <div className='flex justify-end'>
                    <BlackButton
                        text='Upload'
                        onClick={() => { setShowPopup(true) }}
                        styles='!rounded-lg mt-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadWork