import React, {FC} from 'react';
import s from './WalletBlock.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {ChildrenType} from "@/app/_types/children.types";

interface IWalletBlock extends IBaseComponents {
  value: string,
  course: string,
  isSoon?: boolean,
  children?: ChildrenType,
  isTop?: boolean,
  onTop?: ()=>void,
}

export const WalletBlock: FC<IWalletBlock> = ({children, course, isSoon, value, className, hide, isTop,onTop}) => {
  return (
    <div className={cn(s.wallet, isSoon && s.wallet_soon, className)}>
      <div className={s.content}>
        <div className={s.value}>{value}</div>
        <div className={s.course}>{course}</div>
      </div>
      {isTop && children && children}
      {!isTop ? !isSoon &&
          <BtnBig className={cn(s.btn_top, s.btn)} onClick={onTop}>
              + Top Up
          </BtnBig> : <BtnBig className={cn(s.btn_top, s.btn, s.full)}>
        + Top Up
      </BtnBig>}
    </div>
  );
};
