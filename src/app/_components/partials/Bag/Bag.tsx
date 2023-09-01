import React, {FC} from "react";
import s from './Bag.module.scss';
import cn from 'classnames';
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";

interface IBagProps {
  count: number,
  className?: string,
}

export const Bag: FC<IBagProps> = ({count, className}) => {
  return (
    <Link href={Routes.BAG} className={cn(s.bag, className)}>
      <div className={s.wrapper}>
        <div className={s.text}>Bag</div>
        <div className={s.count}>{count}</div>
      </div>
    </Link>
  )
}
