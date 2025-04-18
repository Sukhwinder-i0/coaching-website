import React from 'react'
import FacultyCard from './Faculty'

const FacultySec = () => {
  return (
    <div className='w-full m-5 flex justify-evenly' >
      <FacultyCard 
        name="Bhagwan Saini" 
        subject="Maths" 
        experience={15} 
        bio="A super energetic with solid explanations" 
      />
      <FacultyCard 
        name="ygfg" 
        subject="Maths" 
        experience={15} 
        bio="A super energetic with solid explanations" 
      />
    </div>
  )
}

export default FacultySec