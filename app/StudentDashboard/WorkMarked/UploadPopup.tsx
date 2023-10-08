'use client'

import React, { FormEvent, useState } from 'react'
import Image from 'next/image'
import ButtonwithIcon from '@/components/common/buttonwithIcon'
import Label from '@/components/common/Label'
import Input from '@/components/common/Input'
import { Document, Page, pdfjs } from 'react-pdf'
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

interface UploadPopupProps {
    files: any;
    setShowPopup: (value: boolean) => void;
    setData: (value: any) => void;
}
const UploadPopup = ({ files, setShowPopup, setData }: UploadPopupProps) => {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [popupData, setPopupData] = useState({
        title: '',
        subject: '',
        type: '',
        price: '',
        file: files[0],
    });
    const handleSave = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setData((prevData: any) => [...prevData, popupData]);
        setPopupData({
            title: '',
            subject: '',
            type: '',
            price: '',
            file: '',
        });
        setShowPopup(false);
    };
    console.log(popupData);


    return (
        <div className='w-[calc(100vw-56px)] md:w-[calc(100vw-208px)] flex justify-center items-center h-screen fixed top-0 right-0'>
            <div className='abosolute bg-white max-w-3xl w-11/12 md:w-full min-h-[200px] z-10 border rounded-2xl'>
                <form onSubmit={handleSave}>
                    <div className='flex justify-end mt-5 mr-6'>
                        <Image
                            src={'/images/svg/close.svg'}
                            alt={'upload'}
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            onClick={() => {
                                setShowPopup(false);
                            }}
                        />
                    </div>
                    <div className='grid grid-cols-5 px-9 gap-14'>
                        <div className='col-span-3'>
                            <div className='mb-7'>
                                <Label text={'Title'} />
                                <Input
                                    type='text'
                                    placeholder=''
                                    isFullwidth
                                    wrapperStyles={
                                        'outline-none text-sm h-auto !px-4 !py-2.5 text-[#0000008A]'
                                    }
                                    required
                                    value={popupData.title}
                                    onChange={(e) => {
                                        setPopupData({ ...popupData, title: e.target.value });
                                    }}
                                />
                            </div>
                            <div className='mb-7'>
                                <Label text={'Set a subject and qualification '} />
                                <div className='px-4 text-[#0000008A] rounded-full border h-[48px] w-full cursor-pointer'>
                                    <select
                                        className=' outline-none w-full py-2.5 h-full'
                                        style={{ backgroundColor: 'transparent' }}
                                        value={popupData.subject}
                                        required
                                        onChange={(e) => {
                                            setPopupData({ ...popupData, subject: e.target.value });
                                        }}
                                    >
                                        <option value='10'>English - 10 Plus</option>
                                        <option value='11'>English - 09 Plus</option>
                                        <option value='12'>English - 08 Plus</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-7'>
                                <Label text={'Type'} />
                                <div className='px-4 text-[#0000008A] rounded-full border h-[48px] w-full cursor-pointer'>
                                    <select
                                        className='outline-none w-full py-2.5 h-full'
                                        style={{ backgroundColor: 'transparent' }}
                                        value={popupData.type}
                                        required
                                        onChange={(e) => {
                                            setPopupData({ ...popupData, type: e.target.value });
                                        }}
                                    >
                                        <option value='Past paper'>Past paper</option>
                                        <option value='Assignment'>Assignment</option>
                                        <option value='Quiz'>Quiz</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Label text={'Set a Price '} />
                                <div>
                                    <Input
                                        type='number'
                                        placeholder=''
                                        isFullwidth
                                        wrapperStyles={
                                            'outline-none text-sm h-auto !px-2 !py-2.5 text-[#0000008A] flex-row-reverse !w-28'
                                        }
                                        required
                                        value={popupData.price}
                                        onChange={(e) => {
                                            setPopupData({ ...popupData, price: e.target.value });
                                        }}
                                        icon={
                                            <Image
                                                src={'/images/svg/dollar.svg'}
                                                alt={'dollar'}
                                                width={25}
                                                height={25}
                                                className='mr-1'
                                            />
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 bg-grey my-6 overflow-hidden max-h-[320px]'>
                            {popupData.file.type === 'image/png' ||
                                popupData.file.type === 'image/jpeg' ? (
                                <Image
                                    src={URL.createObjectURL(popupData.file)}
                                    alt={'file'}
                                    width={100}
                                    height={200}
                                    className='w-full h-full object-cover'
                                />
                            ) : popupData.file.type === 'application/pdf' ? (
                                <Document file={popupData.file}>
                                    <Page scale={2 / 5} pageNumber={1}
                                        renderTextLayer={false}
                                    />
                                </Document>
                            ) : (
                                <>
                                    <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: URL.createObjectURL(popupData.file) }]} />
                                </>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-center w-2/5 mx-auto mt-20 mb-10'>
                        <ButtonwithIcon
                            text='Save & Upload'
                            type='submit'
                            icon={
                                <Image
                                    src={'/images/svg/upload-white.svg'}
                                    alt={'upload'}
                                    width={25}
                                    height={25}
                                />
                            }
                            styles='w-full !bg-black text-white !font-normal !rounded-lg flex-row-reverse !justify-center'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadPopup
