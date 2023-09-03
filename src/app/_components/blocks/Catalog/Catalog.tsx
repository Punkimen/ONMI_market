import React, {FC, useLayoutEffect, useRef} from 'react';
import s from './Catalog.module.scss';
import cn from 'classnames';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {ICardOmi, IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {triggerAnimate} from "@/app/_animations/animation";
interface ICatalogProps {
  cardsOmi?: ICardOmi[],
  cardsClothe?: IClothe[],
  countsRow: number,
  label?: string,
  className?: string,
  cardsType?: 'clothes' | 'omi',
  isCardsStats?: boolean,
}

export const Catalog: FC<ICatalogProps> = ({
                                             label,
                                             countsRow,
                                             cardsClothe,
                                             cardsOmi,
                                             className,
                                             cardsType,
                                             isCardsStats = true
                                           }) => {

  return (
    <div className={cn(s.catalog, className)}>
      {label && <div className={cn(s.label, 'text-line')}>{label}</div>}
      <div className={cn(s.wrapper, countsRow === 4 && s['row-4'])}>
        {cardsOmi && cardsOmi.map((card, index) => {
          return <div className={'text-line'} key={card.id} data-delay={index * 0.1}>
            <CardOmi
              className={cn(s.card)} {...card} /></div>
        })}
        {cardsClothe && cardsClothe.map((card: IClothe, index) => {
          return <div className={'text-line'} key={card.id} data-delay={index * 0.1}>
            <CardClothe isStats={isCardsStats}
                        className={cn(s.card)}
                        {...card} />
          </div>
        })}
      </div>
    </div>
  )
}
