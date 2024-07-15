import React, { useEffect } from 'react';

const Time = ({ time, setTime }) => {
  const jalaninWaktu = () => {
    setTime((prevState) => {
      return {
        ...prevState,
        minute: prevState.minute + 1,
      };
    });
  };

  useEffect(() => {
    // Jalanin waktunya tiap 1 detik, tapi habis itu langsung clearInterval dengan cleanup function
    // supaya gak dirender berulang-ulang sama react
    const timer = setInterval(jalaninWaktu, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  // Time Checker
  /**
   * Case:
   * 1. Kalau menitnya >= 60, barti hour + 1
   * 2. Kalau hournya >= 24, brati day + 1
   */
  useEffect(() => {
    if (time.hour >= 24) {
      setTime((prevState) => {
        return {
          ...prevState,
          day: prevState.day + 1,
          hour: prevState.hour - 24,
        };
      });
    }

    if (time.minute >= 60) {
      setTime((prevState) => {
        return {
          ...prevState,
          hour: prevState.hour + 1,
          minute: prevState.minute - 60,
        };
      });
    }
  }, [time]);

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const outputDay = days[time.day];
  const outputHour = time.hour < 10 ? `0${time.hour}` : time.hour;
  const outputMinute = time.minute < 10 ? `0${time.minute}` : time.minute;
  return (
    <div className='time'>
      <div>{outputDay}</div>
      <div>
        {outputHour}:{outputMinute}
      </div>
    </div>
  );
};

// memo ini buat nge 'lock' component nya supaya gak ikut dirender kalau kita pencet action
// Karena kalau dirender waktu pencet action, komponen ini bakal ke 'refresh' dan waktunya bakal nge freeze
export default React.memo(Time);
// export default Time;
