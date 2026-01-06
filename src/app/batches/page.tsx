'use client'

import Card from '@/components/Card'
import { useRouter } from 'next/navigation'

const categories = [
  { title: "JEE", description: "Start your iit journey here" },
  { title: "NEET", description: "Start your neet journey here" },
  { title: "PRE-Foundation", description: "Strengthen your base" }
  ]



export default function Categories() {
  const router = useRouter()
  

  return (
    
      <div className="flex flex-col lg:flex-row justify-around gap-10 mt-10 w-full max-w-7xl">
      
          <Card
            type="feature"
            title={categories[0].title}
            description={categories[0].description}
            className='border-b-4 border-blue-500 cursor-pointer '
            onClick={() => router.push('/batches/jee')}
          />
          <Card
            type="feature"
            title={categories[1].title}
            description={categories[1].description}
            className='border-b-4 border-green-500 cursor-pointer'
            onClick={() => router.push('batches/neet')}
          />
          <Card
            type="feature"
            title={categories[2].title}
            description={categories[2].description}
            className='border-b-4 border-amber-500 cursor-pointer'
            onClick={() => router.push('batches/pre-foundation')}
          />
      </div>
  )
}
