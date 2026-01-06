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

const Item = ({ text, href, isActive, className }: ItemProps) => {
  return (
    <Link href={href} prefetch>
      <div
        className={clsx(
          'py-2 px-3 rounded-sm cursor-pointer transition duration-200 hover:rounded-none hover:border-b-2 border-b-gray-700',
          isActive ? 'bg-gray-200 text-black border-b-2 border-b-gray-700 hover:rounded-sm' : 'text-gray-900',
          className
        )}
      >
        {text}
      </div>
    </Link>
  )
}

export default Item
