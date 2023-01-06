import "../hooks/StopWatch";

function Torneios() {
  const [day, hour, minute, second] = stopWatch("Jan 8, 2023 00:00:00");

  return (
    <div className="torneios">
      <h2>
        {day}:{hour}:{minute}:{second}
      </h2>
    </div>
  );
}

export default Torneios;
