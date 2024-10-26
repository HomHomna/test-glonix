
import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  fill?: string
}

const Berger: React.FC<Props> = (props) => {
  const { fill = '#A8AD00', ...propsSvg } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
      <path d="M1 1H24" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M1 9H24" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M1 17H24" stroke="black" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}

export default React.memo<Props>(Berger)
