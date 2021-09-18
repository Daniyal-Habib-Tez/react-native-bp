import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import WelcomeView from './view';

const Welcome = props => {
  const [timerDay, setDay] = useState('00');
  const [timerHour, setHour] = useState('00');
  const [timerMinute, setMinute] = useState('00');
  const [timerSecond, setSecond] = useState('00');

  useEffect(() => {
    createTimer();
  }, []);

  const onNext = () => {
    props.navigation.navigate('ChooseProduct');
  };

  const createTimer = () => {
    var countDownDate = Date.now() + 14 * 24 * 60 * 60 * 1000;
    console.log('future -->', Date.now() + 14 * 24 * 60 * 60 * 1000);
    // Update the count down every 1 second Date.now() + (14 * 24 * 60 * 60)
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();
      // console.log('now -->', now);
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // console.log('distance -->', distance);
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDay(days.toString());
      setHour(hours.toString());
      setMinute(minutes.toString());
      setSecond(seconds.toString());
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  };

  // createTimer()
  const viewProps = {
    timerDay,
    timerHour,
    timerMinute,
    timerSecond,
    onNext,
    ...props,
  };
  // console.log("nav", props.navigation)

  return <WelcomeView {...viewProps} />;
};

export default Welcome;
