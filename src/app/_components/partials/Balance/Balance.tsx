"use client";
import cn from "classnames";
import s from "./Balance.module.scss";
import React, {FC, useEffect, useState} from "react";
import {useUser} from "@/app/_state/store";
import {IBaseComponents} from "@/app/_types/base.types";

interface IBalanceProps extends IBaseComponents {
  className?: string;
};
export const Balance: FC<IBalanceProps> = ({className, ...props}) => {
  const [balance, setBalance] = useState(0);
  const balanceStore = useUser(state => state.balance);

  useEffect(() => {
    setBalance(balanceStore);
  }, [balanceStore]);

  if (props.hide) {
    return null;
  }

  return (
    <div className={cn(s.balance, className)}>
      <div className={s.wrapper}>
        <div className={s.text}>ONM</div>
        <div className={s.count}>
          {balance}
        </div>
      </div>
    </div>
  );
};
