"use client"
import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import styles from '@/styles/layout/Header.module.css'
import Image from 'next/image'
import { Berger, Close } from '../icons'
interface Props {

}

const Header: React.FC<Props> = (props) => {
  const { } = props
  const [open, setOpen] = useState<boolean>(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient &&
        <header className="bg-white text-white py-4 bg-opacity-80 backdrop-blur-sm header">
          <div className="container mx-auto px-[24px] flex justify-between items-center w-full">
            <div className='flex gap-[60px] items-center'>
              <h1 className="text_bold text-[#00665E] text-[34px]">LOGO</h1>
              <ul className={`text-[#6A6A6A] gap-[5px] flex w-full ${styles.menu}`}>
                <li><a href="#course" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>รายวิชา</a></li>
                <li><a href="#live" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>ถ่ายทอดสด</a></li>
                <li><a href="#faq" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>กระทู้คำถาม</a></li>
              </ul>
            </div>
            <div className={`flex items-center gap-[16px] ${styles.menu_btn}`}>
              <button
                className='bg-[#EFEFEF] rounded-[18px] text-[#000000] text-[16px] py-[18px] px-[24px]'
              >
                ออกจากระบบ
              </button>
              <Dropdown />
            </div>
            <div className={`cursor-pointer ${styles.menu_btn_berger}`} onClick={() => { setOpen((prev) => !prev) }}>
              {open ?
                <Close />
                :
                <Berger />
              }
            </div>
            { }
            {/* <div>
              <ul className={`text-[#6A6A6A] gap-[5px] flex w-fullu}`}>
                <li><a href="#course" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>รายวิชา</a></li>
                <li><a href="#live" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>ถ่ายทอดสด</a></li>
                <li><a href="#faq" className='rounded-[18px] py-[16px] px-[22px] hover:bg-gray-100 transition-colors duration-200 '>กระทู้คำถาม</a></li>
              </ul>
            </div> */}
          </div>
        </header>
      }
      <main>
        <div className={`${styles.menu_berger} ${open ? styles.open : ''}`}>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex flex-col justify-center items-center h-full px-[20px] w-full'>
              <a href="#course" className='px-[22px] hover:bg-gray-100 transition-colors duration-200 text-white text-[20px] w-full text-center py-[24px]' style={{ borderTop: '1px solid #C1C7CD80' }}>รายวิชา</a>
              <a href="#live" className='px-[22px] hover:bg-gray-100 transition-colors duration-200 text-white text-[20px] w-full text-center py-[24px]' style={{ borderTop: '1px solid #C1C7CD80' }}>ถ่ายทอดสด</a>
              <a href="#faq" className='px-[22px] hover:bg-gray-100 transition-colors duration-200 text-white text-[20px] w-full text-center py-[24px]' style={{ borderTop: '1px solid #C1C7CD80', borderBottom: '1px solid #C1C7CD80' }}>กระทู้คำถาม</a>
            </div>
            <div className='mt-[-200px] flex flex-col w-full px-[20px] gap-[12px]'>
              <button
                className='bg-[#1C1C29] rounded-[18px] text-[16px] py-[18px] px-[24px] flex text-white w-full justify-center items-center'
              >
                <Image
                  width={30}
                  height={30}
                  alt={`profile Siriwat Rachanon`}
                  src={'/images/user1.png'}
                />
                {`Siriwat Rachanon`}
              </button>
              <button
                className='bg-[#EFEFEF] rounded-[18px] text-[#000000] text-[16px] py-[18px] px-[24px] w-full'
              >
                ออกจากระบบ
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default React.memo<Props>(Header)
