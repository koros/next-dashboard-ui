'use client';

import Image from 'next/image';
import { title } from 'process';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Placeholder events data
const events = [
  {
    id: 1,
    title: 'Team Sync Meeting',
    time: '9:00 AM - 10:00 AM',
    description: 'Weekly catch-up to discuss ongoing projects and blockers.',
  },
  {
    id: 2,
    title: 'Product Demo',
    time: '11:00 AM - 12:00 PM',
    description:
      'Showcase the new dashboard and analytics features to stakeholders.',
  },
  {
    id: 3,
    title: 'Lunch & Learn',
    time: '1:00 PM - 2:00 PM',
    description:
      'Informal knowledge-sharing session on AI trends and applications.',
  },
  {
    id: 4,
    title: 'Client Presentation',
    time: '3:30 PM - 4:30 PM',
    description:
      'Present Q4 roadmap and upcoming milestones to the client team.',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image height={20} width={20} src="/moreDark.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            key={e.id}
            className="p-5 rounded shadow-sm border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <span className="text-gray-300 text-xs">{e.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
