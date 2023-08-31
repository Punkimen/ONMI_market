import React, {FC} from 'react';
import s from './CardOmi.module.scss';
import cn from 'classnames';
import Image from "next/image";
import {BtnBig} from "@/app/_components/partials/BtnBig/BtnBig";
import {ICardOmi} from "@/app/_types/cards.types";

interface ICardOmiProps extends ICardOmi {
  className?: string
}

export const CardOmi: FC<ICardOmiProps> = ({
                                             id,
                                             points,
                                             rewards,
                                             imgSrc,
                                             price,
                                             quantity,
                                             typeClothes,
                                             modelCategory,
                                             className
                                           }) => {
  return (
    <div className={cn(s.card, className)}>
      <div className={s["card__inner"]}>
        <div className={s.img}>
          <Image src={imgSrc} quality={100} alt={`omi ${modelCategory} model`}/>
          <div className={s.model}>
            {modelCategory}-Model
          </div>
        </div>
        <div className={s.stats}>
          <div className={s["stats__row"]}>
            <div className={s["stats__label"]}>Attributes</div>
            <div className={s["stats__value"]}>Max {points} points</div>
          </div>
          <div className={s["stats__row"]}>
            <div className={s["stats__label"]}>Type clothes</div>
            <div className={s["stats__value"]}>
              {typeClothes.join(',')} Types
            </div>
          </div>
          <div className={s["stats__row"]}>
            <div className={s["stats__label"]}>Monthly reward</div>
            <div className={s["stats__value"]}>
              ~ {rewards} ONM
            </div>
          </div>
        </div>
        <BtnBig className={s.btn} onClick={() => {
        }}>
          Buy {`(${price})`}
        </BtnBig>
        <div className={s.available}>
          Available {quantity}
        </div>
      </div>
    </div>
  )
}
