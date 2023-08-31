import React, {FC} from 'react';
import s from './Catalog.module.scss';
import cn from 'classnames';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {ICardOmi, IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";

interface ICatalogProps {
  cards: (ICardOmi[] | IClothe[]),
  countsRow: number,
  label?: string,
  className?: string,
  cardsType?: 'clothes' | 'omi'
}

export const Catalog: FC<ICatalogProps> = ({label, countsRow, cards, className, cardsType}) => {
  return (
    <div className={cn(s.catalog, className)}>
      {label && <div className={s.label}>{label}</div>}
      <div className={cn(s.wrapper, countsRow === 4 && s['row-4'])}>
        {cardsType === 'omi' ? cards.map((card: ICardOmi) => {
          return <CardOmi className={s.card} key={card.id} {...card} />
        }) : cards.map((card: IClothe) => {
          return <CardClothe className={s.card} key={card.id} {...card} />
        })}
      </div>
    </div>
  )
}
