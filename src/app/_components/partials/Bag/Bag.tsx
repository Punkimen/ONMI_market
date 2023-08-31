import React, {FC} from "react";
import s from './Bag.module.scss';
import cn from 'classnames';

interface IBagProps {
  count: number,
  className?: string,
}

export const Bag: FC<IBagProps> = ({count, className}) => {
  return (
    <div className={cn(s.bag, className)}>
      <div className={s.text}>Bag</div>
      <div className={s.count}>{count}</div>
    </div>
  )
}
