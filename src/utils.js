const gradePointMap = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    U: 0,
  };
  
  export function calculateGPA(subjects, grades) {
    console.log(grades)
    let totalCredits = 0, weightedPoints = 0;
  
    subjects.forEach((subj, i) => {
      const gp = gradePointMap[grades[i].toUpperCase()] || 0;
      weightedPoints += gp * subj.credits;
      totalCredits += subj.credits;
    });
  
    return (weightedPoints / totalCredits).toFixed(2);
  }
  
  export function calculateCGPA(allSemestersData) {
    console.log(allSemestersData)
    let totalCredits = 0, weightedPoints = 0;
  
    allSemestersData.forEach(({ subjects, grades }) => {
      subjects.forEach((subj, i) => {
        const gp = gradePointMap[grades[i].toUpperCase()] || 0;
        weightedPoints += gp * subj.credits;
        totalCredits += subj.credits;
      });
    });
  
    return (weightedPoints / totalCredits).toFixed(2);
  }
  