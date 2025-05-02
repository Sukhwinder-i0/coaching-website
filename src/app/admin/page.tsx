'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button' // adjust path to your button component

export default function AdminPage() {
  const [batchForm, setBatchForm] = useState({
    name: '',
    category: 'JEE' ,
    level: 'XI' ,
    description: '',
    startDate: '',
    endDate: '',
    price: '',
  })

  const [facultyForm, setFacultyForm] = useState({
    name: '',
    subject: '',
    experience: '',
    bio: '',
    avatar: '',
  })

  const [topperForm, setTopperForm] = useState({
    name: '',
    rank: '',
    percentage: '',
    avatar: '',
    batch: '',
    exam: '',
  })

  const handleSubmit = async (e: React.FormEvent, type: 'batch' | 'faculty' | 'topper') => {
    e.preventDefault()
    const body =
      type === 'batch' ? batchForm : type === 'faculty' ? facultyForm : topperForm

    const res = await fetch(`/api/admin/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) alert(`Error saving ${type}`)
    else alert(`${type} added successfully`)
  }

  return (
    <div className="p-6 md:p-12 space-y-12 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-400">Admin Panel</h1>

      {/* BATCH FORM */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Add Batch</h2>
        <form onSubmit={(e) => handleSubmit(e, 'batch')} className="grid md:grid-cols-2 gap-4">
          <input className="p-2 rounded bg-gray-800" placeholder="Batch Name" value={batchForm.name} onChange={(e) => setBatchForm({ ...batchForm, name: e.target.value })} />
          <select className="p-2 rounded bg-gray-800" value={batchForm.category} onChange={(e) => setBatchForm({ ...batchForm, category: e.target.value as Category })}>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>
          <select className="p-2 rounded bg-gray-800" value={batchForm.level} onChange={(e) => setBatchForm({ ...batchForm, level: e.target.value as Level })}>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          <input className="p-2 rounded bg-gray-800" type="number" placeholder="Price" value={batchForm.price} onChange={(e) => setBatchForm({ ...batchForm, price: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" type="date" placeholder="Start Date" value={batchForm.startDate} onChange={(e) => setBatchForm({ ...batchForm, startDate: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" type="date" placeholder="End Date" value={batchForm.endDate} onChange={(e) => setBatchForm({ ...batchForm, endDate: e.target.value })} />
          <textarea className="p-2 rounded bg-gray-800 md:col-span-2" placeholder="Description" value={batchForm.description} onChange={(e) => setBatchForm({ ...batchForm, description: e.target.value })} />
          <Button type="submit" className="w-fit">Add Batch</Button>
        </form>
      </section>

      {/* FACULTY FORM */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Add Faculty</h2>
        <form onSubmit={(e) => handleSubmit(e, 'faculty')} className="grid md:grid-cols-2 gap-4">
          <input className="p-2 rounded bg-gray-800" placeholder="Name" value={facultyForm.name} onChange={(e) => setFacultyForm({ ...facultyForm, name: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Subject" value={facultyForm.subject} onChange={(e) => setFacultyForm({ ...facultyForm, subject: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" type="number" placeholder="Experience (years)" value={facultyForm.experience} onChange={(e) => setFacultyForm({ ...facultyForm, experience: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Avatar URL" value={facultyForm.avatar} onChange={(e) => setFacultyForm({ ...facultyForm, avatar: e.target.value })} />
          <textarea className="p-2 rounded bg-gray-800 md:col-span-2" placeholder="Bio" value={facultyForm.bio} onChange={(e) => setFacultyForm({ ...facultyForm, bio: e.target.value })} />
          <Button type="submit" className="w-fit">Add Faculty</Button>
        </form>
      </section>

      {/* TOPPER FORM */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Add Topper</h2>
        <form onSubmit={(e) => handleSubmit(e, 'topper')} className="grid md:grid-cols-2 gap-4">
          <input className="p-2 rounded bg-gray-800" placeholder="Name" value={topperForm.name} onChange={(e) => setTopperForm({ ...topperForm, name: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Rank" value={topperForm.rank} onChange={(e) => setTopperForm({ ...topperForm, rank: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Percentage" value={topperForm.percentage} onChange={(e) => setTopperForm({ ...topperForm, percentage: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Avatar URL" value={topperForm.avatar} onChange={(e) => setTopperForm({ ...topperForm, avatar: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" type="number" placeholder="Batch ID" value={topperForm.batch} onChange={(e) => setTopperForm({ ...topperForm, batch: e.target.value })} />
          <input className="p-2 rounded bg-gray-800" placeholder="Exam" value={topperForm.exam} onChange={(e) => setTopperForm({ ...topperForm, exam: e.target.value })} />
          <Button type="submit" className="w-fit">Add Topper</Button>
        </form>
      </section>
    </div>
  )
}
