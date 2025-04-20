import React, { ReactElement } from 'react'

interface Props {
  text: string
  icon?: ReactElement
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <div className='py-3 px-8 font-bold hover:text-white cursor-pointer flex gap-2 justify-center items-center rounded-md bg-[#2980f8] hover:bg-slate-900 hover:shadow-md shadow-blue-900 border border-blue-400' >
      <span>{props.icon}</span> 
      <span>{props.text}</span>
    </div>
  )
}

export default Button