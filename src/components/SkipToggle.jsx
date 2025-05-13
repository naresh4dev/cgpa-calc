import React from 'react';
export default function SkipToggle({ semester, skipped, toggle }) {
  return (
    <div className="flex items-center mb-2">
      <input
        id={semester}
        type="checkbox"
        checked={skipped}
        onChange={()=>toggle(semester)}
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label htmlFor={semester} className="ml-2 text-white-700">
        Skip {semester.toUpperCase()}
      </label>
    </div>
  );
}