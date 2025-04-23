import Card from '@/components/Card'
import Heading from '@/components/Heading'
import React from 'react'

const Faculty = () => {
  return (
    <div className="w-full px-6 mt-40 mb-20 flex flex-col items-center">
      <p className="text-3xl text-slate-400 pb-10 text-center">
        Our Team on One Mission
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          type="faculty"
          name="Bhagwan Saini"
          subject="Maths"
          experience={15}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Sunil Sharma"
          subject="Chemistry"
          experience={15}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Sanjay Sharma"
          subject="Biology"
          experience={15}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Vastraj"
          subject="Physics"
          experience={5}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Vastraj"
          subject="Physics"
          experience={5}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Vastraj"
          subject="Physics"
          experience={5}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Vastraj"
          subject="Physics"
          experience={5}
          bio="A super energetic with solid explanations"
        />
        <Card
          type="faculty"
          name="Vastraj"
          subject="Physics"
          experience={5}
          bio="A super energetic with solid explanations"
        />
      </div>
    </div>
  )
}

export default Faculty
