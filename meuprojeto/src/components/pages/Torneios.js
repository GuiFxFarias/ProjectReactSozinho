import { useEffect, useState } from "react";

function Torneios() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  if (seconds >= 60) {
    setSeconds = 0;

    const intMinutes = setInterval(() => {
      setMinutes((minutes) => minutes + 1);
    }, 1000);
    return () => clearInterval(intMinutes);
  }

  return (
    <div className="torneios">
      <h2>
        {hour}:{minutes}:{seconds}
      </h2>
    </div>
  );
}

export default Torneios;
