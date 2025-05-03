'use client';

import Card from '@/components/Card';
import { Book, GraduationCap } from 'lucide-react';
import React from 'react';

const page = () => {
  const preBatches = [
    
    { title: 'Foundation 9th', description: 'Concept clarity & Olympiad readiness', icon: <Book className="w-10 h-10 text-yellow-400" /> },
    { title: 'Foundation 10th', description: 'NTSE, Boards, and Competitive prep', icon: <Book className="w-10 h-10 text-yellow-400" /> },
  ];

  return (
    <div className= "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-6">
      {preBatches.map((batch, index) => (
        <Card
          key={index}
          type="feature"
          title={batch.title}
          description={batch.description}
          icon={batch.icon}
          className="border-b-5 border-amber-500 hover:scale-105 transition cursor-pointer"
        />
      ))}
    </div>
  );
};

export default page;
