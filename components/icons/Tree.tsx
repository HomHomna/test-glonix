
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const Tree: React.FC<Props> = (props) => {
  const { fill = '#A8AD00', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none" {...propsSvg}>
      <path opacity="0.4" d="M30.6013 24.2769C29.2277 25.5349 27.429 26.2266 25.5664 26.2129H10.2236C8.91089 26.1331 7.6781 25.5553 6.77681 24.5976C5.87553 23.6399 5.37369 22.3744 5.37369 21.0593C5.37369 19.7442 5.87553 18.4787 6.77681 17.521C7.6781 16.5633 8.91089 15.9855 10.2236 15.9057H10.2935C5.86221 3.58144 24.588 -1.32602 26.7322 11.6017C28.0943 11.8224 29.3673 12.4202 30.4068 13.3275C31.4464 14.2347 32.2109 15.4151 32.6137 16.7347C33.0165 18.0543 33.0415 19.4604 32.6858 20.7935C32.3301 22.1266 31.608 23.3334 30.6013 24.2769Z" fill={fill} />
      <path d="M29.8865 34.1553C29.8844 34.4706 29.7583 34.7724 29.5353 34.9953C29.3124 35.2182 29.0106 35.3444 28.6953 35.3465H22.3422C22.2667 35.3516 22.1909 35.3408 22.1198 35.3147C21.8857 35.9072 21.4787 36.4155 20.9519 36.7738C20.4251 37.132 19.8027 37.3236 19.1656 37.3236C18.5285 37.3236 17.9062 37.132 17.3793 36.7738C16.8525 36.4155 16.4456 35.9072 16.2114 35.3147C16.1403 35.3408 16.0646 35.3516 15.9891 35.3465H9.63594C9.32001 35.3465 9.01702 35.221 8.79362 34.9976C8.57023 34.7742 8.44473 34.4713 8.44473 34.1553C8.44473 33.8394 8.57023 33.5365 8.79362 33.3131C9.01702 33.0897 9.32001 32.9642 9.63594 32.9642H15.9891C16.0646 32.9591 16.1403 32.9699 16.2114 32.996C16.3682 32.5879 16.609 32.2172 16.9182 31.9081C17.2274 31.5989 17.598 31.3582 18.0062 31.2013C17.9801 31.1303 17.9693 31.0545 17.9744 30.979V26.2145H20.3568V30.979C20.3619 31.0545 20.3511 31.1303 20.3251 31.2013C20.7332 31.3582 21.1039 31.5989 21.413 31.9081C21.7222 32.2172 21.963 32.5879 22.1198 32.996C22.1909 32.9699 22.2667 32.9591 22.3422 32.9642H28.6953C29.0106 32.9663 29.3124 33.0925 29.5353 33.3154C29.7583 33.5383 29.8844 33.8401 29.8865 34.1553Z" fill={fill} />
    </svg>
  )
}

export default React.memo<Props>(Tree)
