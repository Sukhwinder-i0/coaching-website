import React from 'react'

interface HeadingProps {
  text: string
  className?: string
}

const MainHeading = (props: HeadingProps) => {

  return (
    <div>
      {props.text}
    </div>
  )
}

export default MainHeading