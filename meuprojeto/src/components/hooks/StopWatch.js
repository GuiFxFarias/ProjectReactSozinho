import { useState } from "react";

const stopWatch = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countStopWatch = () => {
    const countDate = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minutesNumber = Math.floor((interval % hour) / minutes);
    const secondsNumber = Math.floor((interval % minutes) / seconds);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minutesNumber);
    setSecond(secondsNumber);
  };

  setInterval(countStopWatch, 1000);

  return [day, hour, minute, second];
};

export default stopWatch;
