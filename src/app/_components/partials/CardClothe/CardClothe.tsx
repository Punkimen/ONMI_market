import {IClothe} from "@/app/_types/cards.types";
import React, {FC} from "react";
import s from './CardClothe.module.scss';
import Image from "next/image";
import stat1 from '@/../public/img/icons/stat_1.svg';
import stat2 from '@/../public/img/icons/stat_2.svg';
import stat3 from '@/../public/img/icons/stat_3.svg';
import stat4 from '@/../public/img/icons/stat_4.svg';
import {BtnBig} from "@/app/_components/partials/BtnBig/BtnBig";
import cn from 'classnames';
import Link from "next/link";
import {Routes} from "@/app/_utils/Routes";

interface ICardClotheProps extends IClothe {
  className?: string,
}

const statsIcons = [stat1, stat2, stat3, stat4]
export const CardClothe: FC<ICardClotheProps> = ({
                                                   id,
                                                   imgSrc,
                                                   price,
                                                   rewards,
                                                   category,
                                                   modelCategory,
                                                   collectionId,
                                                   stats
                                                 }) => {


  return (
    <Link href={`${Routes.CLOTHES}/${id}`} className={cn(s.card)}>
      <div className={s.model}>{modelCategory}</div>
      <div className={s.img}>
        <Image src={imgSrc} alt={`${category} ${id}`}/>
      </div>
      <div className={s.bottom}>
        <div className={s.stats}>
          {stats.map((el, index) => {
            return (
              <div key={index} className={s.stat}>
                <Image className={s[`img_${index + 1}`]} src={statsIcons[index]} alt={'stat icon'}/>
                <span>{el}</span>
              </div>
            )
          })}
        </div>
        <BtnBig color={'gray'} onClick={() => {
        }} className={s.btn}>
          {rewards.toString()} ONM
        </BtnBig>
      </div>
    </Link>
  )
}
