import React, {FC} from "react";
import s from './Bag.module.scss';
import cn from 'classnames';
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";
import {useBagState} from "@/app/_state/store";

interface IBagProps {
  className?: string,
}

export const Bag: FC<IBagProps> = ({className}) => {
  const count = useBagState(state => state.bag)
  return (
    <Link href={Routes.BAG} className={cn(s.bag, className)}>
      <div className={s.wrapper}>
        <div className={s.text}>Bag</div>
        <div className={s.count}>
          {count.length || 0}
        </div>
      </div>
    </Link>
  )
}
