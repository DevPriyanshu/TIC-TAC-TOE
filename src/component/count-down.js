import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      {count === 0 ? (
        <p>Ready to play !</p>
      ) : (
        <p>Countdown: {count}</p>
      )}
    </div>
  );
};

export default Countdown;
