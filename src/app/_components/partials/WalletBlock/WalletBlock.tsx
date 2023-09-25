import React, {FC} from 'react';
import s from './WalletBlock.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";

interface IWalletBlock extends IBaseComponents {
  value: string,
  course: string,
  isSoon?: boolean,
}

export const WalletBlock: FC<IWalletBlock> = ({course, isSoon, value, className, hide}) => {
  return (
    <div className={cn(s.wallet, isSoon && s.wallet_soon, className)}>
      <div className={s.content}>
        <div className={s.value}>{value}</div>
        <div className={s.course}>{course}</div>
      </div>
      {!isSoon &&
          <BtnBig className={cn(s.btn_top, s.btn)}>
              + Top Up
          </BtnBig>
      }
    </div>
  );
};
