import React from 'react';

const Study = () => {
  const schoolObj = {
    qualification: 'S.S.C',
    institute: 'Z.P.H.S Thogarrai',
    percentage: '7.7 CGPA',
    year: '2013',
  };
  const diplomaObj = {
    qualification: 'Diploma',
    institute: 'Govt. Polytechnic -JOGIPET',
    percentage: '62.89%',
    year: '2017',
  };
  const btechObj = {
    qualification: 'B.Tech',
    institute: "St. Mary's Engg College",
    percentage: '6.7 GPA',
    year: '2021',
  };
  const studyArr = [btechObj, diplomaObj, schoolObj];
  return (
    <div className="about-study">
      <table cellSpacing="20" style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Percentage of Marks</th>
            <th>PassedOut Year</th>
          </tr>
        </thead>
        <tbody>
          {studyArr.map((study, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{study.qualification}</td>
                <td>{study.institute}</td>
                <td>{study.percentage}</td>
                <td>{study.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Study;
