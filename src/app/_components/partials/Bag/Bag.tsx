import React, {FC, useEffect, useState} from "react";
import s from './Bag.module.scss';
import cn from 'classnames';
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";
import {useBagState} from "@/app/_state/store";
import {useStore} from "zustand";
import {useInput} from "@/app/_hooks/useInput";

interface IBagProps {
  className?: string,
}

export const Bag: FC<IBagProps> = ({className}) => {
  const [count, setCount] = useState(0);
  const bagItems = useBagState(state => state.bag);
  useEffect(()=>{
    setCount(bagItems.length);
  },[bagItems]);

  return (
    <Link href={Routes.BAG} className={cn(s.bag, className)}>
      <div className={s.wrapper}>
        <div className={s.text}>Bag</div>
        <div className={s.count}>
          {count}
        </div>
      </div>
    </Link>
  );
};
