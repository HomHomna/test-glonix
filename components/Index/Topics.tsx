import React from 'react'
import { VideoIcon, DataIcon, Science, Tree, Business, Arrow } from '../icons'

interface Props {

}

interface CardCourse {
  title: string
  desc: string
  icon: React.ReactNode
}


const card_course: CardCourse[] = [
  {
    title: 'Data',
    desc: 'เรียนรู้และฝึกฝนกระบวนการคิดสร้างมูลค่าให้ธุรกิจด้วยข้อมูล',
    icon: <DataIcon />,
  },
  {
    title: 'Science',
    desc: 'เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์',
    icon: <Science />,
  },
  {
    title: 'Tech',
    desc: 'พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม',
    icon: <Tree />,
  },
  {
    title: 'Business ',
    desc: 'พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ',
    icon: <Business />,
  },
]

const Topics: React.FC<Props> = (props) => {
  const { } = props

  return (
    <div>
      <h4 className='text_bold flex items-center gap-[24px] text-[24px]'><VideoIcon /> เลือกเรียนตามหัวข้อที่สนใจ</h4>
      <div className='flex w-full h-[280px] overflow-auto gap-[20px]'>
        {card_course?.map((item: CardCourse, index: number) => {
          return (
            <div className='shadow-[0px_0px_12px_0px_#0000001A] px-[24px] py-[26px] w-[256px] min-h-[171px] max-h-[250px] rounded-[24px] flex flex-col justify-between'>
              <div>
                <h4 className='text_bold flex items-center gap-[22px] text-[22px]'>{item?.icon} {item?.title}</h4>
                <div className='text-[#6A6A6A] text-[clamp(14px, 1vw, 18px)] w-full text-pretty mt-[25px]'>{item?.desc}</div>
              </div>
              <div className='flex justify-end items-end'>
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
