
'use client'

import React from 'react'
import clsx from 'clsx'

interface ItemProps {
  text: string
  onClick?: () => void
  isActive?: boolean
  className?: string
}

const Item = (props: ItemProps) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        'px-4 py-2 rounded cursor-pointer transition duration-200 hover:bg-gray-800',
        props.isActive ? 'bg-gray-700 text-white' : 'text-gray-300',
        props.className
      )}
    >
      {props.text}
    </button>
  )
}

export default Item
