import React from 'react'
import { VideoIcon, DataIcon, Science, Tree, Business, Arrow } from '../icons'
import styles from '@/styles/Index/Topics.module.css'
interface Props {

}

interface Topics {
  title: string
  desc: string
  icon: React.ReactNode
}


const card_course: Topics[] = [
  {
    title: 'Data',
    desc: 'เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล',
    icon: <DataIcon className={styles.icon} />,
  },
  {
    title: 'Science',
    desc: 'เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์',
    icon: <Science className={styles.icon} />,
  },
  {
    title: 'Tech',
    desc: 'พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม',
    icon: <Tree className={styles.icon} />,
  },
  {
    title: 'Business ',
    desc: 'พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ',
    icon: <Business className={styles.icon} />,
  },
]

const Topics: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h4 className={`text_bold flex items-center gap-[24px] text-[24px] title_head`}><VideoIcon className={`head_icon`} /> เลือกเรียนตามหัวข้อที่สนใจ</h4>
      <div className={`flex w-full h-[280px] overflow-hidden gap-[20px] mt-[20px] ${styles.layout_topic}`}>
        {card_course?.map((item: Topics, index: number) => {
          return (
            <div key={index} className={`relative shadow-[0px_0px_12px_0px_#0000001A] px-[24px] py-[26px] w-[256px] min-h-[171px] max-h-[250px] rounded-[24px] flex flex-col justify-between ${styles.topic_card}`}>
              <div>
                <h4 className={`text_bold flex items-center gap-[22px] text-[22px] ${styles.title}`}>{item?.icon} {item?.title}</h4>
                <div className={`text-[#6A6A6A] text-[clamp(14px, 1vw, 18px)] w-full text-pretty mt-[25px] ${styles.desc}`}>{item?.desc}</div>
              </div>
              <div className={`flex justify-end items-end ${styles.btn}`}>
                <Arrow className='cursor-pointer' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo<Props>(Topics)
