"use client"
import React, { useState } from 'react'
import { VideoIcon } from '../icons'
import styles from '@/styles/Index/Course.module.css'

interface Props {

}

interface CardCourse {
  title: string
  progress: number
  bg_image: string
  bg_color: string
}

const card_course: CardCourse[] = [
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    progress: 0,
    bg_image: '/images/course1.jpeg',
    bg_color: '#3974CCCC'
  },
  {
    title: "Generative ChatGPT:  UX  Design Edition",
    progress: 10,
    bg_image: '/images/course2.jpeg',
    bg_color: '#2A005FCC'
  },
  {
    title: "เทคนิคการจัดทำบัญชี จัดการภาษี  ด้วยเทคโนโลยีดิจิทัล",
    progress: 40,
    bg_image: '/images/course3.jpeg',
    bg_color: '#00123FCC'
  },
  {
    title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    progress: 80,
    bg_image: '/images/course4.jpeg',
    bg_color: '#007077CC'
  },

  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    progress: 0,
    bg_image: '/images/course_banner1.jpeg',
    bg_color: '#3974CCCC'
  },
  {
    title: "Generative ChatGPT:  UX  Design Edition",
    progress: 10,
    bg_image: '/images/course_banner2.jpeg',
    bg_color: '#2A005FCC'
  },
  {
    title: "เทคนิคการจัดทำบัญชี จัดการภาษี  ด้วยเทคโนโลยีดิจิทัล",
    progress: 40,
    bg_image: '/images/course_banner3.jpeg',
    bg_color: '#00123FCC'
  },
  {
    title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    progress: 80,
    bg_image: '/images/course_banner4.jpeg',
    bg_color: '#007077CC'
  },
]

const Course: React.FC<Props> = (props) => {
  const { } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerPage = 4
  const totalPages = Math.ceil(card_course.length / itemsPerPage)

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    } if (currentIndex >= totalPages - 1) {
      setCurrentIndex((prevIndex) => 0)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } if (currentIndex <= 0) {
      setCurrentIndex((prevIndex) => totalPages - 1)
    }
  }

  const visibleItems = card_course.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  )

  return (
    <div className='w-full relative'>
      <div className='flex items-baseline justify-between w-full'>
        <h4 className={`text_bold flex items-center gap-[24px] text-[24px] title_head`}><VideoIcon className={`head_icon`} /> คอร์สของฉัน</h4>
        <button className={`px-[35px] py-[8px] border-solid w-[135px] border-[2px] border-[#A8AD00] rounded-[59px] text-[#A8AD00] ${styles.see_all_btn_head}`}>ดูทั้งหมด</button>
      </div>
      <div className={styles.carousel}>
        {visibleItems.map((item: CardCourse, index: number) => (
          <div key={index} className={styles.carouselItem}>
            <div
              style={{
                backgroundImage: `url('${item.bg_image}')`,
                // backgroundImage: `url(/images${item.bg_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
                backgroundColor: item?.bg_color,
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                padding: '19px 25px 0px 25px',
                height: '152px'
              }}
            >
              <h3>{item.title}</h3>
            </div>
            <div className='flex flex-col items-center justify-between text-[#000000]'>
              <div className='text-left px-[25px]'>{item.title}</div>
              <div className='flex px-[25px] flex-col w-full'>
                <div>{`เรียนไปแล้ว`} <span className='text_bold'>{item?.progress}%</span></div>
                <div className={styles.progress_bar_line}>
                  <div style={{
                    height: '8px',
                    width: `${item?.progress}%`,
                    background: '#A8AD00',
                    borderRadius: '60px'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn_next_prev}>
        <button
          onClick={handlePrev}
          // disabled={currentIndex === 0}
          className="w-[36px] h-[36px] px-[8px] py-[8px] bg-transparent text-[#B6B6B6] rounded-full border-solid border-[1px] border-[#B6B6B6] grid place-content-center"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          // disabled={currentIndex === totalPages - 1}
          className="w-[36px] h-[36px] px-[8px] py-[8px] bg-transparent text-[#B6B6B6] rounded-full border-solid border-[1px] border-[#B6B6B6] grid place-content-center"
        >
          {'>'}
        </button>
      </div>
      <div className={`${styles.see_all_btn_foot}`}>
        <button className={`px-[35px] py-[8px] border-solid w-[135px] border-[2px] border-[#A8AD00] rounded-[59px] text-[#A8AD00]`}>ดูทั้งหมด</button>
      </div>
    </div>
  )
}

export default React.memo<Props>(Course)
