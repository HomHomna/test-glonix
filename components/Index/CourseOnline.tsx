import React, { useState } from 'react'
import { VideoIcon } from '../icons'
import styles from '@/styles/Index/CourseOnline.module.css'
import Image from 'next/image'

interface Props { }

interface CourseOnline {
  title: string
  desc: string
  tag: string
  bg_image: string
  text_color: string
  bg_color: string
  user_image: string
  user_name: string
  position: string
}

const card_course: CourseOnline[] = [
  {
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    desc: "รู้และเข้าใจปัจจัยที่ส่งผลกระทบต่อราคาหุ้น",
    tag: 'Business',
    bg_image: '/images/course_banner1.jpeg',
    bg_color: '#FCFF8BE5',
    text_color: '#000000',
    user_image: '/images/user_course1.png',
    user_name: 'ณัฐกานต์ สิทธิชัยอนันต์',
    position: 'CEO Y.I.M Corporation'
  },
  {
    title: "Progressive Web Application",
    desc: "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    tag: 'Data',
    bg_image: '/images/course_banner2.jpeg',
    bg_color: '#000D2EE5',
    text_color: '#FFFFFF',
    user_image: '/images/user_course2.png',
    user_name: 'ปัญจมพงศ์ เสริมสวัสดิ์ศรี',
    position: 'Google Developers'
  },
  {
    title: "React Hooks in Action",
    desc: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    tag: 'Science',
    bg_image: '/images/course_banner3.jpeg',
    bg_color: '#95FFE5E5',
    text_color: '#000000',
    user_image: '/images/user_course3.png',
    user_name: 'วรัทธน์ วงศ์มณีกิจ',
    position: 'Co-Founder'
  },
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    tag: 'Tech',
    bg_image: '/images/course_banner4.jpeg',
    bg_color: '#06002EB0',
    text_color: '#FFFFFF',
    user_image: '/images/user_course4.png',
    user_name: 'ทัศน์พล รัชตะสัมฤทธิ์',
    position: 'Software Engineer'
  },
]

const CourseOnline: React.FC<Props> = (props) => {
  return (
    <div className='w-full relative'>
      <div className='flex items-baseline justify-between w-full'>
        <h4 className='text_bold flex items-center gap-[24px] text-[24px]'><VideoIcon /> คอร์สออนไลน์</h4>
        <button className='px-[35px] py-[8px] border-solid w-[135px] border-[2px] border-[#A8AD00] rounded-[59px] text-[#A8AD00]'>ดูทั้งหมด</button>
      </div>
      <div className={styles.content_course}>
        {card_course?.map((item: CourseOnline) => {
          return (
            <div
              className={styles.carouselItem}
              style={{
                position: 'relative', // Set position to relative for parent
                overflow: 'hidden', // Prevent overflow
                borderRadius: '24px',
                height: '548px',
              }}
            >
              <div
                style={{
                  backgroundImage: `url('${item.bg_image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.6,
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  backgroundColor: item.bg_color,
                  position: 'relative',
                  zIndex: 2,
                  borderRadius: '24px',
                  padding: '19px 25px 0px 25px',
                  height: '100%',
                }}
              >
                <div className='flex flex-col justify-between h-[90%] mt-[30px] mb-[12px]'>
                  <div>
                    <p className='px-[16px] py-[8px] border-solid border-[1px] border-[#7B7B7B] rounded-[59px] text-[#7B7B7B] w-fit h-[39px] grid place-content-center'>{item.tag}</p>
                    <h3 className={`text_bold text-[${item?.text_color}] text-[24px]`}>{item.title}</h3>
                    <br />
                    <h3 className={`text-[${item?.text_color}] text-[clamp(16px, 1vw, 20px)] font-[IBMPlexSansThai-Light]`}>{item.desc}</h3>
                  </div>
                  <div className='flex items-center gap-[12px]'>
                    <Image
                      alt={`profile ${item.user_name}`}
                      width={55}
                      height={55}
                      className="w-[55px] h-[55px] rounded-full object-cover bg-white"
                      src={item.user_image}
                    />
                    <div className='w-full text_overflow'>
                      <p className={`text-[${item?.text_color}] text_overflow text_bold`} title={item.user_name}>{item.user_name}</p>
                      <p className={`text-[${item?.text_color}] text_overflow`}>{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo<Props>(CourseOnline)
