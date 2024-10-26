
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const Close: React.FC<Props> = (props) => {
  const { fill = '#A8AD00', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M1.01465 1.70728L17.2781 17.9707" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M1.01465 17.2634L17.2781 0.999972" stroke="black" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}

export default React.memo<Props>(Close)
