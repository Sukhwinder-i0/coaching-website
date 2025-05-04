'use client'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import { Book, CarTaxiFrontIcon, GraduationCap, Users2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const categories = [
  { title: "JEE", description: "Start your iit journey here" },
  { title: "NEET", description: "Start your neet journey here" },
  { title: "PRE-Foundation", description: "Strengthen your base" }
  // { title: '11th JEE', description: 'Focused preparation for JEE Mains & Advanced', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
  // { title: '11th NEET', description: 'In-depth NEET curriculum with expert mentors', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
  // { title: 'Foundation 8th', description: 'Early start for competitive edge', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  // { title: 'Foundation 9th', description: 'Concept clarity & Olympiad readiness', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  // { title: 'Foundation 10th', description: 'NTSE, Boards, and Competitive prep', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  // { title: '12th JEE', description: 'Complete syllabus revision & test series', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
  // { title: '12th NEET', description: 'Final year prep with top-notch mock tests', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
  // { title: 'Droppers JEE', description: 'Targeted crash course for repeaters', icon: <Users2 className="w-10 h-10 text-blue-500" /> },
  // { title: 'Droppers NEET', description: 'Maximize your NEET score this time', icon: <Users2 className="w-10 h-10 text-green-500" /> },
]



export default function Categories() {
  const router = useRouter()
  

  return (
    
      <div className="flex justify-around gap-10 mt-10 w-full max-w-7xl">
      
          <Card
            type="feature"
            title={categories[0].title}
            description={categories[0].description}
            className='border-b-4 border-blue-500 cursor-pointer  '
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
