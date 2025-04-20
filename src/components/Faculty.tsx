import React from 'react'

interface Props {
  name: string
  experience: number
  subject: string
  bio: string
}

const Faculty = (props: Props) => {
  return (
    <div className='rounded-2xl bg-slate-800 w-[40%] shadow-lg shadow-slate-600 flex h-[50vh] justify-center items-center pl-8'>
      <div className='border rounded-full w-35 h-35 ' >
        <img />
      </div>
      <div className='h-full flex justify-around text-gray-200 flex-col items-start pr-1 p-10'>
        <p className='text-3xl text-slate-300'>{props.name}</p>
        <p>{props.subject}</p>
        <p>{props.experience}+ Years of Experience</p>
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

export default Faculty