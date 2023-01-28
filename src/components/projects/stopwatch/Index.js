import React, { useState } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  let [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [laps, setLaps] = useState([]);
  let [val, setVal] = useState('');

  const startFunc = () => {
    if (toggle) {
      setToggle(false);
      setVal(
        setInterval(() => {
          setCount((c) => c + 1);
        }, 100)
      );
    }
  };

  const stopFunc = () => {
    setToggle(true);
    clearInterval(val);
  };

  const lapFunc = () => {
    !toggle && setLaps([...laps, count + 10]);
  };

  const reset = () => {
    setLaps([]);
    clearInterval(val);
    setCount(0);
    setToggle(true);
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch-time">
        <h1>
          {Math.round(count / 10)}.{Math.round(count % 10)} Seconds{' '}
          {count > 600 && (
            <span>
              ( {Math.floor(count / 10 / 60)} Minutes -{' '}
              {Math.floor((count / 10) % 60)} Seconds)
            </span>
          )}{' '}
        </h1>
      </div>
      <div className="stopwatch-btn">
        <div>
          <button onClick={startFunc} className="m-10">
            {' '}
            Start{' '}
          </button>
          <button onClick={stopFunc} className="m-10">
            {' '}
            Stop{' '}
          </button>
          <button onClick={lapFunc} className="m-10">
            Lap
          </button>
          <button onClick={reset} className="m-10">
            {' '}
            Clear
          </button>
        </div>
      </div>
      <div className="stopwatch-laps">
        <ul>
          {laps.map((lap, idx) => {
            return (
              <li key={Math.random() + idx}>
                Lap {idx + 1} : {lap / 10} Seconds
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
