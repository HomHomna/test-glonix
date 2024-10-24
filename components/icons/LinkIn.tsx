
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const LinkIn: React.FC<Props> = (props) => {
  const { fill = 'white', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...propsSvg}>
      <path d="M22.459 13.7189V21.0979H18.181V14.2129C18.181 12.4829 17.562 11.3029 16.014 11.3029C14.832 11.3029 14.128 12.0989 13.819 12.8679C13.706 13.1429 13.677 13.5259 13.677 13.9109V21.0979H9.397C9.397 21.0979 9.455 9.43788 9.397 8.22888H13.677V10.0529L13.649 10.0949H13.677V10.0529C14.245 9.17788 15.26 7.92688 17.533 7.92688C20.348 7.92688 22.459 9.76688 22.459 13.7189ZM4.921 2.02588C3.458 2.02588 2.5 2.98588 2.5 4.24888C2.5 5.48388 3.43 6.47288 4.865 6.47288H4.893C6.386 6.47288 7.313 5.48388 7.313 4.24888C7.287 2.98588 6.387 2.02588 4.922 2.02588H4.921ZM2.754 21.0979H7.032V8.22888H2.754V21.0979Z" fill={fill} />
    </svg>
  )
}

export default React.memo<Props>(LinkIn)
