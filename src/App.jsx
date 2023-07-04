import React, { useState, useEffect } from 'react';
import { animations } from 'react-animation'

import './App.css';

import FireworksBackground from './components/Fireworks';
import Spinner from './components/Spinner';

const LOCATION_LINK = 'https://www.google.com/maps/place/Casa+Bianca+%26+Marco+Villa+Rental/@14.7574452,120.9649619,15z/data=!4m2!3m1!1s0x0:0x412a8ff8127eb30b?sa=X&ved=2ahUKEwiIv92rkfX_AhUL_2EKHcFzD14Q_BJ6BAgtEAA&ved=2ahUKEwiIv92rkfX_AhUL_2EKHcFzD14Q_BJ6BAg_EAg';

const NAMES = 'Dennis, Nimrod and Joules';

const App = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);


  // Set your birthday date here
  const birthdayDate = new Date('2023-07-08T20:00:00');


  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = birthdayDate.getTime() - currentTime;

      if (timeRemaining <= 0) {
        // Stop the countdown if the birthday date is reached
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      }
    }, 1000);


    setTimeout(() => {
      setIsContentVisible(true);
    }, 2000)

    return () => clearInterval(interval);
  }, []);

  return (

    <div class="container">
      <FireworksBackground />
      {!isContentVisible ? <Spinner /> :

        <>
   
            {(days && hours) && <div class="title" style={{ animation: animations.bounceIn }}>Get ready for the most amazing birthday bash!</div>}
            <div class="title" style={{ animation: animations.bounceIn }}>{NAMES} Birthday 🎊🎂🎉🎈 is in</div>
            <div class="clock" style={{ animation: animations.bounceIn }}>
              <div class="days">
                <span id="days">{days}</span>
                <p>DAYS</p>
              </div>
              <div class="hours">
                <span id="hours">{hours}</span>
                <p>HOURS</p>
              </div>
              <div class="minutes">
                <span id="minutes">{minutes}</span>
                <p>MINS</p>
              </div>
              <div class="seconds">
                <span id="seconds">{seconds}</span>
                <p>SECS</p>
              </div>

            </div>
            <div class="details" style={{ animation: animations.bounceIn }}>@ Casa Marco Villa, Lias, Marilao, Bulacan</div>
            <div class="sub-details" style={{ animation: animations.bounceIn }}><a target="_blank" href={LOCATION_LINK}>CLICK TO VIEW LOCATION</a></div>
            <br />
            <br />
            <div className="content" style={{ animation: animations.bounceIn }}>
              <div >
                <div >BIRTHDAY PROGRAM</div>
                <div>
                  <ul className="list">
                    <li>Prayer</li>
                    <li>Opening Remarks</li>
                    <li>Dinner</li>
                    <li>Happy Birthday Sing</li>
                    <li>Games</li>
                    <li>Party Party 🎉</li>
                  </ul>
                </div>
              </div>
            </div>
   
        </>}
    </div>
  );
};

export default App;
