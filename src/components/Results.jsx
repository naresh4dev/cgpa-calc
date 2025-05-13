import React from 'react';
export function GPAResult({ sem, gpa }) {
  return (
    <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mr-2 mb-2">
      {sem.toUpperCase()} GPA: <span className="font-semibold">{gpa}</span>
    </div>
  );
}
export function CGPAResult({ cgpa }) {
  return (
    <div className="mt-6 p-6 bg-green-100 rounded-2xl text-green-800 text-2xl font-bold">
      Overall CGPA: {cgpa}
    </div>
  );
}