
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const VideoIcon: React.FC<Props> = (props) => {
  const { fill = '#292D32', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" {...propsSvg}>
      <path d="M20.0719 31.0705H12.0469C4.78427 31.0705 1.68127 27.9677 1.68127 20.7055V12.6811C1.68127 5.41895 4.78427 2.31616 12.0469 2.31616H20.0719C27.3345 2.31616 30.4375 5.41895 30.4375 12.6811V20.7055C30.4375 27.9677 27.3345 31.0705 20.0719 31.0705ZM12.0469 4.32228C5.88102 4.32228 3.68752 6.51563 3.68752 12.6811V20.7055C3.68752 26.871 5.88102 29.0644 12.0469 29.0644H20.0719C26.2378 29.0644 28.4313 26.871 28.4313 20.7055V12.6811C28.4313 6.51563 26.2378 4.32228 20.0719 4.32228H12.0469Z" fill={fill} />
      <path d="M9.2248 30.375C8.9593 30.3732 8.70517 30.267 8.51742 30.0793C8.32968 29.8915 8.22343 29.6374 8.22168 29.3719V4.01465C8.22168 3.74863 8.32737 3.4935 8.51549 3.30539C8.70361 3.11728 8.95876 3.0116 9.2248 3.0116C9.49085 3.0116 9.746 3.11728 9.93412 3.30539C10.1222 3.4935 10.2279 3.74863 10.2279 4.01465V29.3719C10.2281 29.5037 10.2023 29.6342 10.1519 29.756C10.1016 29.8778 10.0277 29.9884 9.93451 30.0816C9.84133 30.1748 9.73068 30.2487 9.60889 30.299C9.48711 30.3494 9.35659 30.3752 9.2248 30.375Z" fill={fill} />
      <path d="M22.5998 30.375C22.3343 30.3732 22.0802 30.267 21.8924 30.0793C21.7047 29.8915 21.5984 29.6374 21.5967 29.3719V4.01465C21.5984 3.74917 21.7047 3.49505 21.8924 3.30732C22.0802 3.11959 22.3343 3.01335 22.5998 3.0116C22.8653 3.01335 23.1194 3.11959 23.3072 3.30732C23.4949 3.49505 23.6012 3.74917 23.6029 4.01465V29.3719C23.6031 29.5037 23.5773 29.6342 23.5269 29.756C23.4766 29.8778 23.4027 29.9884 23.3095 30.0816C23.2163 30.1748 23.1057 30.2487 22.9839 30.299C22.8621 30.3494 22.7316 30.3752 22.5998 30.375Z" fill={fill} />
      <path d="M9.22481 10.9692H3.40669C3.14119 10.9675 2.88705 10.8613 2.69931 10.6735C2.51157 10.4858 2.40532 10.2317 2.40356 9.96619C2.40532 9.70071 2.51157 9.44659 2.69931 9.25886C2.88705 9.07113 3.14119 8.96489 3.40669 8.96313H9.22481C9.49032 8.96489 9.74445 9.07113 9.93219 9.25886C10.1199 9.44659 10.2262 9.70071 10.2279 9.96619C10.2262 10.2317 10.1199 10.4858 9.93219 10.6735C9.74445 10.8613 9.49032 10.9675 9.22481 10.9692Z" fill={fill} />
      <path d="M9.22481 17.6964H2.72456C2.45906 17.6947 2.20492 17.5884 2.01718 17.4007C1.82944 17.213 1.72319 16.9589 1.72144 16.6934C1.72319 16.4279 1.82944 16.1738 2.01718 15.986C2.20492 15.7983 2.45906 15.6921 2.72456 15.6903H9.22481C9.49031 15.6921 9.74445 15.7983 9.93219 15.986C10.1199 16.1738 10.2262 16.4279 10.2279 16.6934C10.2262 16.9589 10.1199 17.213 9.93219 17.4007C9.74445 17.5884 9.49031 17.6947 9.22481 17.6964Z" fill={fill} />
      <path d="M9.2248 24.3433H3.32643C3.06092 24.3415 2.80679 24.2353 2.61905 24.0475C2.4313 23.8598 2.32506 23.6057 2.3233 23.3402C2.32506 23.0747 2.4313 22.8206 2.61905 22.6329C2.80679 22.4452 3.06092 22.3389 3.32643 22.3372H9.2248C9.49031 22.3389 9.74444 22.4452 9.93218 22.6329C10.1199 22.8206 10.2262 23.0747 10.2279 23.3402C10.2262 23.6057 10.1199 23.8598 9.93218 24.0475C9.74444 24.2353 9.49031 24.3415 9.2248 24.3433Z" fill={fill} />
      <path d="M29.2873 10.9692H23.4692C23.2037 10.9675 22.9496 10.8613 22.7618 10.6735C22.5741 10.4858 22.4678 10.2317 22.4661 9.96619C22.4678 9.70071 22.5741 9.44659 22.7618 9.25886C22.9496 9.07113 23.2037 8.96489 23.4692 8.96313H29.2873C29.5528 8.96489 29.807 9.07113 29.9947 9.25886C30.1824 9.44659 30.2887 9.70071 30.2904 9.96619C30.2887 10.2317 30.1824 10.4858 29.9947 10.6735C29.807 10.8613 29.5528 10.9675 29.2873 10.9692Z" fill={fill} />
      <path d="M29.2873 17.6964H22.7871C22.5216 17.6947 22.2674 17.5884 22.0797 17.4007C21.8919 17.213 21.7857 16.9589 21.7839 16.6934C21.7857 16.4279 21.8919 16.1738 22.0797 15.986C22.2674 15.7983 22.5216 15.6921 22.7871 15.6903H29.2873C29.5528 15.6921 29.8069 15.7983 29.9947 15.986C30.1824 16.1738 30.2887 16.4279 30.2904 16.6934C30.2887 16.9589 30.1824 17.213 29.9947 17.4007C29.8069 17.5884 29.5528 17.6947 29.2873 17.6964Z" fill={fill} />
      <path d="M22.7068 17.6964H7.99427C7.72877 17.6947 7.47464 17.5884 7.2869 17.4007C7.09915 17.213 6.9929 16.9589 6.99115 16.6934C6.9929 16.4279 7.09915 16.1738 7.2869 15.986C7.47464 15.7983 7.72877 15.6921 7.99427 15.6903H22.7068C22.9728 15.6903 23.228 15.796 23.4161 15.9841C23.6042 16.1722 23.7099 16.4273 23.7099 16.6934C23.7099 16.9594 23.6042 17.2145 23.4161 17.4026C23.228 17.5907 22.9728 17.6964 22.7068 17.6964Z" fill={fill} />
      <path d="M29.2873 24.3433H23.3889C23.1234 24.3415 22.8693 24.2353 22.6815 24.0475C22.4938 23.8598 22.3876 23.6057 22.3858 23.3402C22.3876 23.0747 22.4938 22.8206 22.6815 22.6329C22.8693 22.4452 23.1234 22.3389 23.3889 22.3372H29.2873C29.5528 22.3389 29.8069 22.4452 29.9947 22.6329C30.1824 22.8206 30.2887 23.0747 30.2904 23.3402C30.2887 23.6057 30.1824 23.8598 29.9947 24.0475C29.8069 24.2353 29.5528 24.3415 29.2873 24.3433Z" fill={fill} />
    </svg>
  )
}

export default React.memo<Props>(VideoIcon)
