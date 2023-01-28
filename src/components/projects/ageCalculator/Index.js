import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState('');

  const handleFunc = () => {
    let d = new Date(dob).getTime();
    let today = new Date().getTime();
    let res = today - d;
    let tdays = Math.floor(res / (86400 * 1000));
    let years = Math.floor(tdays / 365.24);
    let remDays = Math.floor(tdays - years * 365.24);
    let months = Math.floor(remDays / 30.43);
    let days = Math.floor(remDays % 30.43);
    setResult(`${years} Years ${months} Months ${days} Days`);
  };

  return (
    <div className="agecalculator">
      <div className="agecalculator-input">
        <span>Enter the Date :</span>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={handleFunc}> Click </button>
      </div>
      <div className="agecalculator-result">
        <h3>
          Your Age is : <span>{result}</span>{' '}
        </h3>
      </div>
    </div>
  );
};
export default AgeCalculator;
