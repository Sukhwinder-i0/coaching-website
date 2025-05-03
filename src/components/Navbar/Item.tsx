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
          'py-3 px-5 rounded-sm cursor-pointer transition duration-200 hover:bg-gray-800',
          isActive ? 'bg-gray-700 text-white' : 'text-gray-300',
          className
        )}
      >
        {text}
      </div>
    </Link>
  )
}

export default Item
