import Image from 'next/image';
import React from 'react';

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2035-01-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            New feature rollout: try the redesigned reports page and give
            feedback.
          </p>
        </div>

        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2035-01-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Scheduled maintenance on 2035-01-05 — expect brief service
            interruptions.
          </p>
        </div>

        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2035-01-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Tip: Connect your account to enable personalized dashboard insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
