
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const Facebook: React.FC<Props> = (props) => {
  const { fill = 'white', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...propsSvg}>
      <path d="M9.54601 5.865V8.613H7.53201V11.973H9.54601V21.959H13.68V11.974H16.455C16.455 11.974 16.715 10.363 16.841 8.601H13.697V6.303C13.697 5.96 14.147 5.498 14.593 5.498H16.847V2H13.783C9.44301 2 9.54601 5.363 9.54601 5.865Z" fill={fill} />
    </svg>
  )
}

export default React.memo<Props>(Facebook)
