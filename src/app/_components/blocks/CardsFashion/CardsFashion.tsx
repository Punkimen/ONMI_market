import React, {FC} from "react";
import {IBaseComponents} from "@/app/_types/base.types";
import Image from "next/image";
import stats from "@/../public/img/fashionCards/stats.svg";
import clothe from "@/../public/img/fashionCards/clothe.png";
import find from "@/../public/img/fashionCards/find.png";
import phone from "@/../public/img/fashionCards/phone.png";
import jacket from "@/../public/img/fashionCards/jacket.png";
import omis from "@/../public/img/fashionCards/omis.png";
import cn from 'classnames';
import s from './CardsFashion.module.scss';

export const CardsFashion: FC<IBaseComponents> = ({className}) => {
  return (
    <div className={cn(s.cards, className)}>
      <div className={cn(s.col, s.col_1)}>
        <div className={cn(s.card, s.card_1)}>
          <div className={s.stats}>
            <Image src={stats} alt={'1000+'} />
          </div>
          <div className={cn(s.label, s.label_small)}>
            Get dressed and gain the power
          </div>
        </div>
        <div className={cn(s.card, s.card_2)}>
          <div className={s.clothe}>
            <Image src={clothe} alt={'clothe'} />
          </div>
          <div className={cn(s.label, s.label_small)}>
            Craft is the way to a new apparel
          </div>
        </div>
        <div className={cn(s.card, s.card_3)}>
          <div className={cn(s.label)}>
            Find the resources around
          </div>
          <Image className={s.find} src={find} alt={'find'} />
        </div>
      </div>
      <div className={cn(s.col, s.col_2)}>
        <div className={cn(s.card, s.card_4)}>
          <div className={cn(s.label, s.label_big, 'gradient-text_green')}>
            Market is also part of the game
          </div>
          <div className={s.phone}>
            <Image src={phone} alt={'phone'} />
          </div>
        </div>
      </div>
      <div className={cn(s.col, s.col_3)}>
        <div className={cn(s.card, s.card_5)}>
          <div className={cn(s.label)}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Brand's Swap:<br/> from digital to real
          </div>
          <div className={s.jacket}>
            <Image src={jacket} alt={'jacket'} />
          </div>
        </div>
        <div className={cn(s.card, s.card_6)}>
          <div className={s.omis}>
            <Image src={omis} alt={'omis'} />
          </div>
          <div className={cn(s.label)}>
            Make your style an earning power
          </div>
        </div>
      </div>
    </div>
  );
};
