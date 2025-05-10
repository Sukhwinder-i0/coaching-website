'use client'

import React, { useEffect, useState } from 'react'

interface Faculty {
  name: string
  subject: string
  avatar?: string
}

interface Batch {
  id: string
  level: string
  category: string
  startDate: string
  endDate: string
  price: number
  beforeDiscount: number
  mode: string
  location?: string
  faculties?: Faculty[]
}

const BatchesPage = () => {
  const [batches, setBatches] = useState<Batch[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const res = await fetch('/api/batches')
        const data = await res.json()
        setBatches(data)
      } catch (error) {
        console.error('Failed to fetch batches', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBatches()
  }, [])

  if (loading) return <p className="text-center text-gray-400">Loading batches...</p>
  if (batches.length === 0) return <p className="text-center text-gray-400">No batches available</p>

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-100 mb-8 text-center">All Batches</h1>

      <div className="space-y-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg text-slate-100"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">{batch.level} - {batch.category}</h2>
                <p className="text-slate-400 text-sm mt-1">
                  {batch.mode.toUpperCase()} {batch.location && ` • ${batch.location}`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-400">₹{batch.price.toLocaleString()}</p>
                <p className="text-sm line-through text-slate-400">₹{Number(batch.beforeDiscount).toLocaleString()}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <p><span className="text-slate-400">Start Date:</span> {new Date(batch.startDate).toLocaleDateString()}</p>
              <p><span className="text-slate-400">End Date:</span> {new Date(batch.endDate).toLocaleDateString()}</p>
              <p><span className="text-slate-400">Mode:</span> {batch.mode}</p>
              <p><span className="text-slate-400">Location:</span> {batch.location || 'N/A'}</p>
            </div>

            {batch.faculties && batch.faculties.length > 0 && (
              <div>
                <h3 className="text-slate-300 font-medium mb-2">Faculties:</h3>
                <ul className="flex flex-wrap gap-4">
                  {batch.faculties.map((faculty, index) => (
                    <li key={index} className="flex items-center space-x-3 bg-slate-700 px-3 py-2 rounded-lg">
                      {faculty.avatar && (
                        <img
                          src={faculty.avatar}
                          alt={faculty.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="font-semibold">{faculty.name}</p>
                        <p className="text-sm text-slate-400">{faculty.subject}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BatchesPage
