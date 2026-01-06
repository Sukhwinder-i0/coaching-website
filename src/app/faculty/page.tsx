'use client'

import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'

type FacultyType = {
  name: string
  subject: string
  experience: number
  bio: string
  avatar?: string
}

const Faculty = () => {
  const [faculties, setFaculties] = useState<FacultyType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await fetch('/api/faculty')

        if (!res.ok) {
          throw new Error('Failed to fetch')
        }

        const data = await res.json()

        setFaculties(Array.isArray(data) ? data : [])
      } catch (err) {
        setError('Unable to load faculty list')
      } finally {
        setLoading(false)
      }
    }

    fetchFaculties()
  }, [])

  return (
    <div className="w-full px-6 mt-40 mb-20 flex flex-col items-center">
      <p className="text-3xl text-slate-400 pb-10 text-center">
        Our Team on One Mission
      </p>

      {loading && <p className="text-slate-400">Loading...</p>}

      {!loading && error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && !error && faculties.length === 0 && (
        <p className="text-slate-400">
          No faculty added yet.
        </p>
      )}

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculties.map((faculty, idx) => (
          <Card
            key={idx}
            type="faculty"
            name={faculty.name}
            subject={faculty.subject}
            experience={faculty.experience}
            bio={faculty.bio}
          />
        ))}
      </div>
    </div>
  )
}

export default Faculty
