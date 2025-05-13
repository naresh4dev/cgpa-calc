import React, { useState } from 'react';
import { subjectsData } from './data/subjects';
import { calculateGPA, calculateCGPA } from './utils';
import SemesterForm from './components/SemesterForm';
import SkipToggle from './components/SkipToggle';
import { GPAResult, CGPAResult } from './components/Results';

function App() {
  const [formData, setFormData] = useState(
    Object.keys(subjectsData).reduce((acc, sem) => ({ ...acc, [sem]: { grades: Array(subjectsData[sem].length).fill('S'), skipped: false } }), {})
  );
  const [gpaResults, setGpaResults] = useState({});
  const [cgpa, setCgpa] = useState(null);

  const handleToggle = sem => {
    setFormData(prev => ({
      ...prev,
      [sem]: { ...prev[sem], skipped: !prev[sem].skipped }
    }));
    setGpaResults(prev => { const copy={...prev}; delete copy[sem]; return copy; });
  };

  const handleCalculateGPA = sem => {
    const { grades } = formData[sem];
    const gpa = calculateGPA(subjectsData[sem], grades);
    setGpaResults(prev => ({ ...prev, [sem]: gpa }));
  };

  const handleCalculateCGPA = () => {
    const data = Object.entries(formData)
      .filter(([sem, d])=> !d.skipped )
      .map(([sem, d])=>({ subjects: subjectsData[sem], grades: d.grades }));
    setCgpa(calculateCGPA(data));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">CGPA Calculator For CSE AI ML</h1>
      {Object.keys(subjectsData).map(sem=>{
        const { grades, skipped } = formData[sem];
        return (
          <div key={sem} className="mb-8">
            <SkipToggle semester={sem} skipped={skipped} toggle={handleToggle} />
            {!skipped && (
              <>
                <SemesterForm semester={sem} subjects={subjectsData[sem]} grades={grades} setGrades={newGrades=>setFormData(prev=>({ ...prev, [sem]: { ...prev[sem], grades: newGrades() } }))} />
                <button
                  onClick={()=>handleCalculateGPA(sem)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Calculate {sem.toUpperCase()} GPA
                </button>
              </>
            )}
          </div>
        );
      })}

      <div className="text-center mt-12">
        <button
          onClick={handleCalculateCGPA}
          className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          Calculate CGPA
        </button>
      </div>

      <div className="mt-8">
        {Object.entries(gpaResults).map(([sem, gpa])=> <GPAResult key={sem} sem={sem} gpa={gpa} />)}
      </div>

      {cgpa && <CGPAResult cgpa={cgpa} />}
    </div>
  );
}

export default App;
