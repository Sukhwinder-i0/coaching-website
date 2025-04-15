import React, { ReactElement } from 'react'

interface ButtonProps {
    type: string;
    text: string;
    color: string;
    icon: ReactElement
    onClick: () => void
}

const Button = (props: ButtonProps) => {

    

  return (
    <div>Button</div>
  )
}

export default Button