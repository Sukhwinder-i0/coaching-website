import Faculty from '@/components/Faculty'
import React from 'react'

const FacultySec = () => {
  return (
    <div className='w-full m-5 flex justify-evenly' >
      <Faculty
        name="Bhagwan Saini" 
        subject="Maths" 
        experience={15} 
        bio="A super energetic with solid explanations" 
      />
      <Faculty 
        name="ygfg" 
        subject="Maths" 
        experience={15} 
        bio="A super energetic with solid explanations" 
      />
    </div>
  )
}

export default FacultySec