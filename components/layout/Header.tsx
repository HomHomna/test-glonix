"use client"
import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown'

interface Props {

}

const Header: React.FC<Props> = (props) => {
  const { } = props
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient &&
        <header className="bg-white text-white py-4 bg-opacity-80 backdrop-blur-sm header">
          <div className="container mx-auto px-[24px] flex justify-between items-center ">
            <div className='flex gap-[60px] items-center'>
              <h1 className="text_bold text-[#00665E] text-[34px]">LOGO</h1>
              <ul className='text-[#6A6A6A] gap-[5px] flex w-full'>
                <li><a href="#course" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>รายวิชา</a></li>
                <li><a href="#live" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>ถ่ายทอดสด</a></li>
                <li><a href="#faq" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>กระทู้คำถาม</a></li>
              </ul>
            </div>
            <div className='flex items-center gap-[16px]'>
              <button
                className='bg-[#EFEFEF] rounded-[18px] text-[#000000] text-[16px] py-[18px] px-[24px]'
              >
                ออกจากระบบ
              </button>
              <Dropdown />
            </div>
          </div>
        </header>
      }
    </>
  )
}

export default React.memo<Props>(Header)
