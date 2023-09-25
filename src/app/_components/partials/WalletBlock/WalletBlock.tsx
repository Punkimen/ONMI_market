import React, {FC} from 'react';
import s from './WalletBlock.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
interface IWalletBlock extends IBaseComponents {}
export const WalletBlock:FC<IWalletBlock> = () => {
  return (
    <div className={s.wallet}>
      <div className={s.value}></div>
    </div>
  );
};
