import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      {time.toLocaleTimeString()} {/* You can format the time as you prefer */}
    </div>
  );
}

export default Clock;
