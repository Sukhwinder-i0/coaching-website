'use client';

import Card from '@/components/Card';
import { Book, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const jeeBatches = [
    { title: '11th JEE', description: 'Focused preparation for JEE Mains & Advanced', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
    { title: '12th JEE', description: 'In-depth Jee curriculum with expert mentors', icon: <GraduationCap className="w-10 h-10 text-green-400" /> },
    { title: 'Droopers JEE', description: 'Complete syllabus revision & test series', icon: <GraduationCap className="w-10 h-10 text-blue-400" /> },
];

  const router = useRouter()

  return (
    <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
        <Card
          type="feature"
          title={jeeBatches[0].title}
          description={jeeBatches[0].description}
          icon={jeeBatches[0].icon}
          className="border-b-5 border-blue-500 hover:scale-105 transition cursor-pointer"
          onClick={() => router.push('/batches/jee/jee11th')}
        />
        <Card
          type="feature"
          title={jeeBatches[1].title}
          description={jeeBatches[1].description}
          icon={jeeBatches[1].icon}
          className="border-b-5 border-blue-500 hover:scale-105 transition cursor-pointer"
          onClick={() => router.push('/batches/jee/jee12th')}
        />
        <Card
          type="feature"
          title={jeeBatches[2].title}
          description={jeeBatches[2].description}
          icon={jeeBatches[2].icon}
          className="border-b-5 border-blue-500 hover:scale-105 transition cursor-pointer"
          onClick={() => router.push('/batches/jee/jee-dropper')}
        />
    </div>
  );
};

export default page;
