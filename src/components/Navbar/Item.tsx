'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface ItemProps {
  text: string
  href: string
  isActive?: boolean
  className?: string
}

const Item = (props: ItemProps) => {
  return (
    <Link href={props.href} prefetch={true}>
      <button
        className={clsx(
          'py-3 px-5 rounded-sm cursor-pointer transition duration-200 hover:bg-gray-800',
          props.isActive ? 'bg-gray-700 text-white' : 'text-gray-300',
          props.className
        )}
      >
        {props.text}
      </button>
    </Link>
  )
}

export default Item
