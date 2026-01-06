// import React from 'react'

// interface Props {
//   category: "jee" | "neet" | "pre-foundation"
//   level?: "11" | "12" | "Dropper" | "9" | "10"
//   price: Number
//   beforeDiscount?: Number
//   startingDate: Date
//   endingDate: Date
//   duration: String
// }

// const Batch = () => {
//   return (
//     <div className='w-full'>

//     </div>
//   )
// }

// export default Batch

'use client';

import React from 'react';

interface BatchDetailsProps {
  title: string;
  faculties: string[];
  startDate: string;
  endDate: string;
  duration: string;
  price: number;
  originalPrice: number;
  location: string;
  category: 'JEE' | 'NEET' | 'Foundation';
  level: '9' | '10' | '11' | '12';
  mode: 'Online' | 'Offline';
}

const BatchDetails: React.FC<BatchDetailsProps> = ({
  title,
  faculties,
  startDate,
  endDate,
  duration,
  price,
  originalPrice,
  location,
  category,
  level,
  mode,
}) => {
  return (
    <div className="bg-[#F8FAFC] text-gray-500 rounded-sm shadow-xl p-6 max-w-3xl w-full mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-blue-400">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p><span className="font-medium text-gray-800">Start Date:</span> {startDate}</p>
          <p><span className="font-medium text-gray-800">End Date:</span> {endDate}</p>
          <p><span className="font-medium text-gray-800">Duration:</span> {duration}</p>
          <p><span className="font-medium text-gray-800">Mode:</span> {mode}</p>
        </div>

        <div>
          <p><span className="font-medium text-gray-800">Location:</span> {location}</p>
          <p><span className="font-medium text-gray-800">Category:</span> {category}</p>
          <p><span className="font-medium text-gray-800">Level:</span> {level}</p>
        </div>
      </div>

      <div>
        <p className="font-medium text-gray-900">Faculties:</p>
        <ul className="list-disc list-inside ml-4">
          {faculties.map((faculty, index) => (
            <li key={index}>{faculty}</li>
          ))}
        </ul>
      </div>

      <div className="text-xl">
        <span className="line-through text-red-600 mr-2">₹{originalPrice}</span>
        <span className="text-green-700 font-bold">₹{price}</span>
      </div>
    </div>
  );
};

export default BatchDetails;
