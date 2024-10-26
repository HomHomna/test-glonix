import Image from "next/image";
import styles from "@/styles/index.module.css"

interface CardBanner {
  title: string
  desc: string
  image: string
  bg_image: string
  bg_color: string
  user_name: string
  position: string
}

const card_banner_title: CardBanner[] = [
  {
    title: 'Generative AI and ChatGPT: Design Thinking Edition',
    desc: 'ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI',
    image: '/images/user1.png',
    bg_image: '/images/banner1.png',
    bg_color: 'darkgreen',
    user_name: 'ณัฐกานต์ สิทธิชัยอนันต์',
    position: 'CEO Y.I.M Corporation',
  },
  {
    title: 'Generative ChatGPT: UX Design Editionn',
    desc: 'ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI',
    image: '/images/user2.png',
    bg_image: '/images/banner2.png',
    bg_color: 'lightgreen',
    user_name: 'Mock name 2',
    position: 'Mock position 2',
  },
  {
    title: 'UX Accelerator Bundle',
    desc: 'ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI',
    image: '/images/user3.png',
    bg_image: '/images/banner3.png',
    bg_color: 'yellow',
    user_name: 'Mock name 3',
    position: 'Mock position 3',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-[140px] w-[100vw]">
      <div className="px-[24px] mx-[6%]">
        <div className={styles.title_page_layout}>
          <div>
            <h5 className="text-[18px] text-[#00665E]">Lorem Ipsum is simply dummy .</h5>
            <div className="relative">
              {/* <h1 className="text-3xl font-bold">learn anytime,<br>anywhere<br>with Lorem</h1> */}
              <h1 className="leading-[68px] !font-[IBMPlexSansThai-Medium] !text-[52px]">learn anytime,<br />anywhere <br />with <span className="text-[#00665E] text_bold underlined">Lorem</span></h1>
              {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></div> */}
            </div>
          </div>
          <div className={styles?.['flex-container']}>
            {card_banner_title.map((item: CardBanner, index: number) => {
              return (
                <>
                  <div className={`${styles?.[item?.bg_color]} ${styles.banner}`} >
                    <div className={`${styles.title_banner} text_bold`}>
                      {item?.title}
                    </div>
                    <div className={styles.desc_banner}>{item?.desc || ''}</div>
                    <div className={styles.user_banner}>
                      <Image
                        alt={`prifile ${item?.user_name}`}
                        width={55}
                        height={55}
                        className="w-[55px] h-[55px] rounded-[50%] bg-white"
                        src={item?.image}
                      />
                      <div>
                        <div title={item?.user_name} className="text_bold">{item?.user_name}</div>
                        <div>{item?.position}</div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
