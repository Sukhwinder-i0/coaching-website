'use client'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import { Book, GraduationCap, Users2 } from 'lucide-react'

const batches = [
  { title: '11th JEE', description: 'Focused preparation for JEE Mains & Advanced', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
  { title: '11th NEET', description: 'In-depth NEET curriculum with expert mentors', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
  { title: 'Foundation 8th', description: 'Early start for competitive edge', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  { title: 'Foundation 9th', description: 'Concept clarity & Olympiad readiness', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  { title: 'Foundation 10th', description: 'NTSE, Boards, and Competitive prep', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  { title: '12th JEE', description: 'Complete syllabus revision & test series', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
  { title: '12th NEET', description: 'Final year prep with top-notch mock tests', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
  { title: 'Droppers JEE', description: 'Targeted crash course for repeaters', icon: <Users2 className="w-10 h-10 text-blue-500" /> },
  { title: 'Droppers NEET', description: 'Maximize your NEET score this time', icon: <Users2 className="w-10 h-10 text-green-500" /> },
]

export default function Batches() {
  return (
    <div className="w-full flex flex-col items-center px-6 py-20 pt-40 bg-gradient-to-r from-slate-800 to-slate-900 text-white min-h-screen">
      <Heading title="Our Batches" description="Choose the right path for your academic journey" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full max-w-7xl">
        {batches.map((batch, idx) => (
          <Card
            key={idx}
            type="feature"
            title={batch.title}
            description={batch.description}
            icon={batch.icon}
          />
        ))}
      </div>
    </div>
  )
}
