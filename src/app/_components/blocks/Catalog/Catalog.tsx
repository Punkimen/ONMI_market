"use client";
import React, {FC, useState} from 'react';
import s from './Catalog.module.scss';
import cn from 'classnames';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {IBody, IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {IBaseComponents} from "@/app/_types/base.types";
import {ModalClotheCraft} from "@/app/_components/partials/ModalClotheCraft/ModalClotheCraft";
import {useCatalogState} from "@/app/_state/store";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
export interface ICatalogProps extends IBaseComponents{
  cardsOmi?: IBody[],
  cardsClothe?: IClothe[],
  countsRow: number,
  label?: string,
  isCardsStats?: boolean,
}

export const Catalog: FC<ICatalogProps> = ({
  label,
  countsRow,
  cardsClothe,
  cardsOmi,
  className,
  isCardsStats = true,
  hide
}) => {
  const clothe = useCatalogState(state=> state.clothes[0]);
  const [show, setShow] = useState(false);
  const onHandle = (isShow: boolean)=>{
    setShow(isShow);
  };
  if(hide) return  null;

  return (
    <div className={className}>
      {cardsClothe && <ModalClotheCraft onHandle={onHandle} imgSrc={clothe.imgSrc} show={show} category={clothe.category} collection={clothe.collection}price={clothe.price} />}
      <div className={cn(s.catalog)}>
        {label && <div className={cn(s.label, 'text-line')}>{label}</div>}
        <div className={cn(s.wrapper, countsRow === 4 && s['row-4'])}>
          {cardsOmi && cardsOmi.map((card, index) => {
            return <div className={cn('text-line', s.item)} key={card.id} data-delay={index * 0.1}>
              <CardOmi
                className={cn(s.card)} {...card} /></div>;
          })}
          {cardsClothe && cardsClothe.map((card: IClothe, index) => {
            return <div className={cn('text-line', s.item)} key={card.id} data-delay={index * 0.1}>
              <CardClothe isStats={isCardsStats}
                className={cn(s.card)}
                onClick={()=>onHandle(true)}
                {...card} />
            </div>;
          })}
        </div>
        {cardsClothe && <BtnBig className={s.catalog__btn} onClick={()=>onHandle(true)}>Craft Hat for 120 MAC</BtnBig>}
      </div>
    </div>
  );
};
