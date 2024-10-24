
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const EyeIcon: React.FC<Props> = (props) => {
  const { fill = '#6A6A6A', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" {...propsSvg}>
      <path d="M12.0625 17.2891C11.2035 17.2891 10.3637 17.0344 9.64939 16.5571C8.9351 16.0799 8.37838 15.4015 8.04963 14.6079C7.72088 13.8143 7.63486 12.941 7.80246 12.0985C7.97005 11.256 8.38373 10.4821 8.99119 9.87471C9.59864 9.26729 10.3726 8.85364 11.2151 8.68606C12.0577 8.51847 12.931 8.60448 13.7247 8.93321C14.5184 9.26194 15.1968 9.81862 15.674 10.5329C16.1513 11.2471 16.4061 12.0868 16.4061 12.9458C16.4055 14.0976 15.9477 15.202 15.1333 16.0164C14.3188 16.8308 13.2143 17.2885 12.0625 17.2891ZM12.0625 10.1072C11.5011 10.1072 10.9522 10.2737 10.4854 10.5856C10.0185 10.8975 9.65464 11.3408 9.43978 11.8595C9.22491 12.3782 9.16869 12.949 9.27823 13.4996C9.38777 14.0503 9.65814 14.5561 10.0552 14.9531C10.4522 15.3501 10.958 15.6204 11.5087 15.7299C12.0594 15.8395 12.6302 15.7833 13.1489 15.5684C13.6676 15.3536 14.111 14.9897 14.4229 14.5229C14.7349 14.0561 14.9014 13.5073 14.9014 12.9458C14.9003 12.1933 14.6009 11.4719 14.0687 10.9398C13.5366 10.4077 12.8151 10.1082 12.0625 10.1072Z" fill={fill} />
      <path d="M12.0625 21.9935C8.29074 21.9935 4.72965 19.7867 2.28202 15.9551C1.7594 15.0383 1.48456 14.0012 1.48456 12.9459C1.48456 11.8906 1.7594 10.8535 2.28202 9.93672C4.73968 6.10504 8.30579 3.89832 12.0625 3.89832C15.8192 3.89832 19.3853 6.10504 21.8329 9.93672C22.3556 10.8535 22.6304 11.8906 22.6304 12.9459C22.6304 14.0012 22.3556 15.0383 21.8329 15.9551C19.3853 19.7867 15.8292 21.9935 12.0625 21.9935ZM12.0625 5.4029C8.8224 5.4029 5.72274 7.34883 3.55599 10.7492C3.18579 11.4222 2.99167 12.1778 2.99167 12.9459C2.99167 13.714 3.18579 14.4696 3.55599 15.1426C5.72274 18.543 8.8224 20.4889 12.0625 20.4889C15.3026 20.4889 18.4022 18.543 20.569 15.1426C20.9392 14.4696 21.1333 13.714 21.1333 12.9459C21.1333 12.1778 20.9392 11.4222 20.569 10.7492C18.4022 7.34883 15.3026 5.4029 12.0625 5.4029Z" fill={fill} />
    </svg>
  )
}

export default React.memo<Props>(EyeIcon)