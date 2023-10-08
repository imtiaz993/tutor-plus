'use client';

import React, { useState } from 'react';
import SubmittedWork from './SubmittedWork';
import UploadPopup from './UploadPopup';
import UploadWork from './UploadWork';

const WorkMarked = () => {
    const [files, setFiles] = useState([])
    const [data, setData] = useState([])
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {showPopup && <UploadPopup setShowPopup={setShowPopup} files={files} setData={setData} />}
            <div className='md:w-[97%] mb-20 mt-10'>
                <div className='md:w-[95%] mx-auto'>
                    <h1 className='text-xl font-bold'>Upload </h1>
                    <UploadWork setShowPopup={setShowPopup} setFiles={setFiles} data={data} />
                    <SubmittedWork />
                </div>
            </div>
        </>
    );
};

export default WorkMarked;
