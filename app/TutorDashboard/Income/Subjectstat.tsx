import React from 'react'
import DoughnutChart from '@/components/DoughnutChart'

const Subjectstat = () => {
  return (
    <section className="md:basis-1/2 w-full md:h-[232px] h-auto shadow-lg md:px-[17px] px:[10px] md:py-[34px] py-[20px]">
      <div className="flex items-center md:justify-around">
        <div>
          <DoughnutChart centerText="All Forms" />
        </div>
        <div>
          <div>
            <h1 className="font-inter font-semibold text-[18px]">
              Subjects taught
            </h1>
            <p className="text-[12px] font-inter font-normal">
              In the last 30 days
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
              <div>
                <h1 className="font-inter font-semibold text-[18px]">Total</h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  English
                </h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">Math</h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  Spanish
                </h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  Geography
                </h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  History
                </h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subjectstat