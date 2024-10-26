import React from 'react'
import VideoIcon from '../icons/VideoIcon'
import dayjs from 'dayjs'
import styles from '@/styles/Index/Article.module.css'
import Image from 'next/image'
import { ClockIcon, EyeIcon } from '../icons'
import 'dayjs/locale/th'

interface Props {

}

interface CardArticle {
  title: string
  sub_title: string
  desc: string
  icon?: string
  bg_image: string
  bg_color: string
  recommend: boolean
  created_date?: string
  view?: string | number
  tag: string
  tag_highlight: boolean
}

const cardsArticle: CardArticle[] = [
  {
    title: 'profit / lossof stocks in the portfolio',
    sub_title: 'กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?',
    desc: 'เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้นในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือขาดทุนมากน้อยเท่าใด?',
    icon: '/images/article_icon1.png',
    bg_image: '/images/article1.jpeg',
    bg_color: '#081631E5',
    recommend: true,
    created_date: '2023-07-29',
    view: 240,
    tag: 'Business',
    tag_highlight: true,
  },
  {
    title: 'What is a Data Engineer',
    sub_title: 'Data Engineer คืออะไร?',
    desc: 'Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst ',
    icon: '/images/article_icon2.png',
    bg_image: '/images/article2.jpeg',
    bg_color: '#002E3DE5',
    recommend: true,
    created_date: '2023-07-29',
    view: 240,
    tag: 'Data',
    tag_highlight: true,
  },
  {
    title: 'สารแทนน้ำตาลไม่อันตราย',
    sub_title: 'สารแทนน้ำตาลไม่อันตราย',
    desc: 'สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล',
    bg_image: '/images/article3.jpeg',
    bg_color: '#0D2E6DCC',
    recommend: false,
    tag: 'Science',
    tag_highlight: false,
  },
  {
    title: 'Data Pipelines with Airflow',
    sub_title: 'Data Pipelines with Airflow',
    desc: 'เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม ',
    bg_image: '/images/article4.jpeg',
    bg_color: '#151C59CC',
    recommend: false,
    tag: 'Tech',
    tag_highlight: false,
  },
  {
    title: 'ร่างกายสามารถย้อนวัย “อายุชีวภาพ” ',
    sub_title: 'ร่างกายสามารถย้อนวัย “อายุชีวภาพ” ',
    desc: 'ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง',
    bg_image: '/images/article5.jpeg',
    bg_color: '#052D43CC',
    recommend: false,
    tag: 'Science',
    tag_highlight: false,
  },
];

const Article: React.FC<Props> = (props) => {
  const { } = props

  // const divStyle = (src:string) => ({
  //   backgroundImage: 'url(' + src + ')'
  // })

  return (
    <div>
      <h4 className='text_bold flex items-center gap-[24px] text-[24px]'><VideoIcon /> บทความและข่าวสารล่าสุด</h4>
      <div
        className={styles.grid_layout_article}
      >
        <div className={styles.grid_layout_article_card}>
          {cardsArticle?.filter((i: CardArticle) => i?.recommend)?.map((item: CardArticle) => {
            return (
              <div className={styles.recommend_card_layout}>
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
                    borderEndStartRadius: '24px',
                    padding: '46px 40px 0px 40px',
                  }}
                  className='text-[white] flex items-start justify-between text-[26px] text_bold w-full flex-col'
                >
                  <div className=''>{item?.title}</div>
                  {
                    item?.icon &&
                    <div className='w-full relative'>
                      <Image
                        alt={item?.title}
                        width={251}
                        height={187}
                        src={item?.icon}
                        // className='absolute bottom-[0px]'
                        style={{ width: '100%', maxWidth: '251px', maxHeight: '187px', height: 'auto' }}
                      // fill={true}
                      />
                    </div>
                  }
                </div>
                <div className='flex flex-col justify-between px-[46px] py-[29px]'>
                  <div className='flex flex-col gap-[8px]'>
                    <div className={`text-[#00665E] text-[16px] cursor-pointer px-[16px] py-[8px] w-[fit-content] ${item?.tag_highlight ? 'border-solid border-[1px] border-[#00665E]' : ''} grid place-content-center rounded-[59px] mb-[18px]`}>
                      {item?.tag}
                    </div>
                    <div className='text_bold text-[clamp(18px, 1vw, 20px)]'>
                      {item?.sub_title}
                    </div>
                    <div className='text-[clamp(14px, 1vw, 16px)]'>
                      {item?.desc}
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-[12px]'><ClockIcon /> {dayjs(item?.created_date).locale('th').format('DD MMMM YYYY')}</div>
                    <div className='flex items-center gap-[12px]'><EyeIcon /> {`เข้าชม ${item?.view} ครั้ง`}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.grid_layout_article_card}>
          {cardsArticle?.filter((i: CardArticle) => !i?.recommend)?.map((item: CardArticle) => {
            return (
              <div className={styles.new_card_layout}>
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
                    borderEndStartRadius: '24px',
                    padding: '46px 40px 46px 40px',
                  }}
                  className='text-[white] flex items-center justify-center text-[clamp(20px, 1vw, 24px)] text_bold w-full flex-col'
                >
                  <div className='text-center'>{item?.title}</div>

                </div>
                <div className='flex flex-col justify-between px-[46px] py-[29px]'>
                  <div className='flex flex-col gap-[8px] '>
                    <div className={`text-[#00665E] text-[16px] cursor-pointer px-[16px] py-[8px] w-[fit-content] ${item?.tag_highlight ? 'border-solid border-[1px] border-[#00665E]' : ''} grid place-content-center rounded-[59px] mb-[18px]`}>
                      {item?.tag}
                    </div>
                    <div className='text_bold text-[clamp(18px, 1vw, 20px)]'>
                      {item?.sub_title}
                    </div>
                    <div className='text-[clamp(14px, 1vw, 16px)] overflow-hidden line-clamp-4'>
                      {item?.desc}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(Article)
