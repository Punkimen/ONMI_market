import {ICardClothe, IClothe} from "@/app/_types/cards.types";
import React, {FC, useState} from "react";
import s from './CardClothe.module.scss';
import Image from "next/image";
import stat1 from '@/../public/img/icons/stat_1.svg';
import stat2 from '@/../public/img/icons/stat_2.svg';
import stat3 from '@/../public/img/icons/stat_3.svg';
import stat4 from '@/../public/img/icons/stat_4.svg';
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import cn from 'classnames';
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";
import {useBagState} from "@/app/_state/store";

interface ICardClotheProps extends IClothe {
  className?: string,
  isStats?: boolean,
}

const statsIcons = [stat1, stat2, stat3, stat4];
export const CardClothe: FC<ICardClotheProps> = ({
                                                   id,
                                                   imgSrc,
                                                   price,
                                                   rewards,
                                                   category,
                                                   modelCategory,
                                                   stats,
                                                   isStats = true,
                                                   collection,
                                                   quantity
                                                 }) => {
  const bagState = useBagState(state => state.bag);
  const addtoCard = useBagState(state => state.addToCart);
  const [hover, setHover] = useState(false);

  return (
    <div className={cn(s.card)}>
      <Link href={`${Routes.CLOTHES}/${id}`} className={s.card__link}/>
      <div className={s.model}>{modelCategory}</div>
      <div className={s.img}>
        <Image src={imgSrc} alt={`${category} ${id}`}/>
      </div>
      {isStats ? <div className={s.bottom}>
        <div className={s.stats}>
          {stats.map((el, index) => {
            return (
              <div key={index} className={s.stat}>
                <Image className={s[`img_${index + 1}`]} src={statsIcons[index]} alt={'stat icon'}/>
                <span>{el}</span>
              </div>
            );
          })}
        </div>
        <BtnBig color={'gray'} onMouseEnter={() => {
          setHover(true);
        }} onMouseLeave={() => {
          setHover(false);
        }} onClick={() => {
          addtoCard({
            id,
            imgSrc,
            price,
            quantity: 1,
            quantityMax: quantity,
            collection: collection,
            modelCategory: modelCategory,
            category: category,
          });
        }} className={s.btn}>
          {
            bagState.filter(el => el.id === id).length > 0 ? 'Added' :
              <>
                <span className={cn(s.btn__text, !hover && s.hide)}>Add</span>
                <span className={cn(s.btn__text, hover && s.hide)}>
                  {rewards.toString()} ONM
                </span>
              </>
          }
        </BtnBig>
      </div> : null}
    </div>
  );
};
