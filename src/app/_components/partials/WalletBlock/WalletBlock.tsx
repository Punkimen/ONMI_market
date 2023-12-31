import React, {FC} from 'react';
import s from './WalletBlock.module.scss';
import cn from 'classnames';
import {IBaseComponents} from "@/app/_types/base.types";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {ChildrenType} from "@/app/_types/children.types";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";
import arrow from '@/../public/img/icons/arrow_triangle.svg';
import Image from "next/image";

interface IWalletBlock extends IBaseComponents {
  value: string,
  course: string,
  isSoon?: boolean,
  children?: ChildrenType,
  isTop?: boolean,
  onTop?: () => void,
}

export const WalletBlock: FC<IWalletBlock> = ({
  children,
  course,
  isSoon,
  value,
  className,
  hide,
  isTop,
  onTop,
  ...props
}) => {
  return (
    <div className={cn(s.wallet, isSoon && s.wallet_soon, isTop && s.full, className)} {...props}>
      <div className={s.content}>
        <div className={s.value}>{value}</div>
        <div className={s.course}>{course}</div>
      </div>
      {children && children}
      {!isSoon &&
          <>
            <BtnBig className={cn(s.btn_top, s.btn, isTop ? s.hide : s.show)} onClick={onTop}>
                  + Top Up
            </BtnBig>
            <BtnBig className={cn(s.btn_top, s.btn, !isTop ? s.hide : s.show, s.full)}>
              + Top Up
            </BtnBig>
          </>}
      {isTop && <BtnReset className={s.arrow} onClick={onTop}>
        <Image src={arrow} alt={'arrow'}/>
      </BtnReset>}
    </div>
  );
};
