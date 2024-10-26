"use client"
import React, { useState, useEffect } from 'react'
import { Instagram, Facebook, Twitter, Youtube, LinkIn } from '../icons'
import styles from '@/styles/layout/Footer.module.css'
interface Props {

}

const Footer: React.FC<Props> = (props) => {
  const { } = props

  return (
    <>
      <footer className="bg-[#00665E] text-[#ffffff] p-4 footer">
        <div className="container mx-auto">
          <h1 className="text_bold text-[#ffffff] text-[34px]">LOGO</h1>
          <hr className='border-[#C1C7CD]' />
          <div className='footer_content'>
            <div id='course' className="course">
              <h4 className='text-[20px] mb-[28px]'>คอร์สของเรา</h4>
              <ul className='flex flex-col gap-[16px]'>
                <li>Data</li>
                <li>Science</li>
                <li>Tech</li>
                <li>Business</li>
              </ul>
            </div>

            <div id='about' className="about">
              <h4 className='text-[20px] mb-[28px]'>เกี่ยวกับเรา</h4>
              <ul className='flex flex-col gap-[16px]'>
                <li>สอนกับเรา</li>
                <li>ติดต่อสอบถามเพิ่มเติม</li>
                <li>แจ้งปัญหาเกี่ยวกับระบบ</li>
                <li>ช่องทางการร้องเรียน</li>
              </ul>
            </div>

            <div id='policy' className="policy">
              <h4 className='text-[20px] mb-[28px]'>ความปลอดภัย</h4>
              <ul className='flex flex-col gap-[16px]'>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Data Protection Policy Six</li>
                <li>Cookie Policy</li>
              </ul>
            </div>

            <div id='address' className="address">
              <h4 className='text-[20px] mb-[16px]'>{`Lorem Ipsum is simply dummy 
text of the printing .`}</h4>
              <div className='font-[IBMPlexSansThai-Thin]'>199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา
                จ.ชลบุรี 20230
              </div>
              <h4 className='text-[16px] mb-[16px] mt-[24px]'>
                ติดต่อเรา
              </h4>
              <div className={`flex gap-[16px] ${styles.contract_social}`}>
                <Youtube />
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkIn />
              </div>
            </div>
          </div>
          <hr className='border-[#C1C7CD]' />
          <div className={`flex items-center justify-between !text-[16px] mt-[32px] ${styles.contract_footer}`}>
            <div className='font-[IBMPlexSansThai-Thin]'>
              Y.I.M Corporation @ 2023. All rights reserved.
            </div>
            <div className='font-[IBMPlexSansThai-Thin]'>
              0-3835-4580-4 , 0-3835-2611-6
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default React.memo<Props>(Footer)
