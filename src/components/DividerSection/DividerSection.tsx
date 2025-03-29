import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown uppercase mb-0">
      {timeLeft.days || 0}d {timeLeft.hours || 0}h {timeLeft.minutes || 0}m{' '}
      {timeLeft.seconds || 0}s
    </div>
  );
};

const DividerSection = () => {
  return (
    <section className="divider overlay">
      <div className="background-img">
        <img src="img/4.jpg" alt="Background" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-12 col-lg-10">
            <div className="block-content text-center front-p">
              <h1 className="uppercase">Time left until the upcoming tour</h1>
              <p className="lead">
                27 to 31 July 2018 with over 10 shows - Cincinnati, Ohio
              </p>
              <Countdown targetDate="2025-07-27T00:00:00" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerSection;
