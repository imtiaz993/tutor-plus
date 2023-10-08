import React from 'react'
import DoughnutChart from '@/components/DoughnutChart'

const IncomeStat = () => {
  return (
    <section className="md:basis-1/2 w-auto md:h-[232px] h-auto shadow-lg md:px-[17px] px-[10px] md:py-[34px] py-[20px]">
      <div className="flex items-center md:justify-around">
        <div>
          <DoughnutChart centerText="Completed"/>
        </div>
        <div>
          <div>
            <h1 className="font-inter font-semibold text-[18px]">
              Total income from subject
            </h1>
            <p className="text-[12px] font-inter font-normal">
              In the last 30 days
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <h1 className="font-inter font-semibold text-[18px]">Total</h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  Debited
                </h1>
                <p className="text-[12px] font-inter font-normal">$1220</p>
              </div>
              <div>
                <h1 className="font-inter font-semibold text-[18px]">
                  Current
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

export default IncomeStat