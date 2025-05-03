'use client';

import Card from '@/components/Card';
import { Book, GraduationCap } from 'lucide-react';
import React from 'react';

const page = () => {
  const jeeBatches = [
    { title: '11th JEE', description: 'Focused preparation for JEE Mains & Advanced', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
    { title: '12th JEE', description: 'In-depth Jee curriculum with expert mentors', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
    { title: 'Droopers JEE', description: 'Complete syllabus revision & test series', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
];

  return (
    <div className= " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {jeeBatches.map((batch, index) => (
        <Card
          key={index}
          type="feature"
          title={batch.title}
          description={batch.description}
          icon={batch.icon}
          className="border-b-5 border-blue-500 hover:scale-105 transition cursor-pointer"
        />
      ))}
    </div>
  );
};

export default page;
