import {IBaseComponents} from "@/app/_types/base.types";
import React, {FC, useEffect, useState} from "react";
import cn from "classnames";
import s from './DropTimer.module.scss';

interface IDropTimerProps extends IBaseComponents {
  label: string,
}
const endDate = new Date('October 30, 2023 00:00');

export const DropTimer: FC<IDropTimerProps> = ({className, hide, label, ...props}) => {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    // Clean up the interval when the component is unmounted.
    return () => clearInterval(timerInterval);
  }, [endDate]);

  if (hide) return null;
  return (
    <div className={cn(s.timer, className)} {...props}>
      <div className={s.timer__label}>
        {label}
      </div>
      <div className={s.timer__timer}>
        {`${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
      </div>
    </div>
  );
};

function calculateTimeLeft(endDate: Date) {
  const now = new Date().getTime();
  const difference = endDate.getTime() - now;

  if (difference <= 0) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }

  const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

  return { hours, minutes, seconds };
}
