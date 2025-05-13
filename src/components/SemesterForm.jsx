import React from 'react';

export default function SemesterForm({ semester, subjects, grades, setGrades }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
      <h3 className="text-xl text-black font-semibold mb-4">{semester.toUpperCase()}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subj,i)=>(
          <div key={subj.code} className="flex items-center text-black justify-between">
            <span className="font-medium">{subj.name} </span>
            <select
              className="border border-gray-300 rounded-lg p-2 w-24"
              value={grades[i]}
              onChange={e=>{setGrades(()=>{ const copy=[...grades]; copy[i]=e.target.value; return copy; })}}
            >
              {['S','A','B','C','D','E','U'].map(g=><option key={g}>{g}</option>)}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}