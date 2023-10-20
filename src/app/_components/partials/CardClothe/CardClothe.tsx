import {IClothe} from "@/app/_types/cards.types";
import React, {FC} from "react";
import s from './CardClothe.module.scss';
import Image from "next/image";
import stat1 from '@/../public/img/icons/stat_1.svg';
import stat2 from '@/../public/img/icons/stat_2.svg';
import stat3 from '@/../public/img/icons/stat_3.svg';
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import cn from 'classnames';
import {useBagState} from "@/app/_state/store";
import {CraftProgress} from "@/app/_components/partials/CraftProgress/CraftProgress";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";


interface ICardClotheProps extends IClothe {
  className?: string,
  isStats?: boolean,
  isEmpty?: boolean,
  onClick?: () => void,
}

const statsIcons = [stat1, stat2, stat3];
const rarity = ["A", "B", "C", "D"];
export const CardClothe: FC<ICardClotheProps> = React.memo(({
  id,
  imgSrc,
  price,
  rewards,
  category,
  modelCategory,
  stats,
  isStats = true,
  collection,
  quantity,
  craftPoint,
  craftPointMax,
  onClick,
  isEmpty,
  className
}) => {
  const windowWidth = useWindowWidth();


  if (windowWidth > 450) {
    return (
      <>
        <div className={cn(s.card, className)} onClick={onClick}
        >
          <div className={s.model}>{modelCategory}</div>
          <div className={s.img}>
            <Image src={imgSrc} alt={`${category} ${id}`}/>
          </div>
          {isStats ? <div className={s.bottom}>
            <div className={s.stats}>
              {stats.map((el, index) => {
                return (
                  <div key={index} className={s.stat}>
                    <Image className={s[`img_${index + 1}`]} src={statsIcons[index]}
                      alt={'stat icon'}/>
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
            <CraftProgress craftPoint={craftPoint} craftPointMax={craftPointMax}/>
          </div> : null}
        </div>
      </>
    );
  } else if (windowWidth > 0 && windowWidth <= 450) {
    return (
      <>
        <div className={cn(s.card, className)} onClick={onClick}>
          {!isEmpty && <div className={s.model}>{modelCategory}</div>}
          <div className={s.img}>
            <Image src={imgSrc} alt={`${category} ${id}`}/>
          </div>
          {isStats && windowWidth > 450 ? <div className={s.bottom}>
            <div className={s.stats}>
              {stats?.map((el, index) => {
                return (
                  <div key={index} className={s.stat}>
                    <Image className={s[`img_${index + 1}`]} src={statsIcons[index]}
                      alt={'stat icon'}/>
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
            <CraftProgress craftPoint={craftPoint} hide={windowWidth <= 450} craftPointMax={craftPointMax}/>
          </div> : null}
          {!isEmpty && <>
            <div className={s.rarity}>
              <div className={s.rarity__label}>Types of rarity:</div>
              <div className={s.rarity__type}>
                {rarity.map(el => {
                  return <span key={el} className={cn(el === modelCategory && s.current)}>{el}</span>;
                })}
              </div>
            </div>
            <BtnBig>Buy (${price})</BtnBig>
          </>}
        </div>
      </>
    );
  }
});
CardClothe.displayName = 'CardClothe';
