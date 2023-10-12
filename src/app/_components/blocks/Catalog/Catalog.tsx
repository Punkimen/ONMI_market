"use client";
import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import s from './Catalog.module.scss';
import cn from 'classnames';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {IBody, IClothe} from "@/app/_types/cards.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {IBaseComponents} from "@/app/_types/base.types";
import {ModalClotheCraft} from "@/app/_components/partials/ModalClotheCraft/ModalClotheCraft";
import {useCatalogState} from "@/app/_state/store";
import {useMousePosition} from "@/app/_hooks/useMousePosition";
import {InfoCircle} from "@/app/_components/partials/InfoCircle/InfoCircle";

export interface ICatalogProps extends IBaseComponents {
  cardsOmi?: IBody[],
  cardsClothe?: IClothe[],
  countsRow: number,
  label?: string,
  isCardsStats?: boolean,
}

export const Catalog: FC<ICatalogProps> = memo(({
  label,
  countsRow,
  cardsClothe,
  cardsOmi,
  className,
  isCardsStats = true,
  hide
}) => {
  const clothe = useCatalogState(state => state.clothes[0]);
  const omis = useCatalogState(state => state.bodies[0]);
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const catalog = useRef(null);
  const mousePosition = useMousePosition();
  const [coord, setCoord] = useState({x: 0, y: 0});
  const onHandle = (isShow: boolean) => {
    setShow(isShow);
  };
  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  useEffect(() => {
    catalog.current?.addEventListener('mouseenter', handleMouseEnter);
    catalog.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      catalog.current?.removeEventListener('mouseenter', handleMouseEnter);
      catalog.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [catalog, handleMouseEnter, handleMouseLeave]);

  const updateCoord = useCallback(() => {
    if (hover && catalog.current) {
      const rect = catalog.current.getBoundingClientRect();
      const targetX = mousePosition.x - rect.x;
      const targetY = mousePosition.y - rect.y;

      // Smoothness factor (adjust this value for desired smoothness)
      const smoothness = 0.1;

      // Calculate the new position using linear interpolation
      const newX = coord.x + (targetX - coord.x) * smoothness;
      const newY = coord.y + (targetY - coord.y) * smoothness;

      setCoord({
        x: newX,
        y: newY,
      });
    }
  }, [hover, mousePosition, catalog, coord]);

  useEffect(() => {
    if (hover) {
      requestAnimationFrame(updateCoord);
    }
  }, [hover, updateCoord]);

  if (hide) return null;

  return (
    <div className={className}>

      {cardsClothe &&
          <ModalClotheCraft onHandle={onHandle} imgSrc={clothe.imgSrc} show={show} category={clothe.category}
            collection={clothe.collection} price={clothe.price}/>}
      {cardsOmi &&
          <ModalClotheCraft onHandle={onHandle} imgSrc={omis.imgSrc} show={show} category={"OMI"}
            type={'OMI'} model={omis.modelCategory} price={omis.price}/>}
      <div className={cn(s.catalog)}>
        {label && <div className={cn(s.label, 'text-line')}>{label}</div>}
        <div className={cn(s.wrapper, countsRow === 4 && s['row-4'])} ref={catalog}>
          {cardsOmi && cardsOmi.map((card, index) => {
            return <div className={cn(s.item)} key={card.id} >
              <CardOmi
                onClick={() => onHandle(true)}
                className={cn(s.card)} {...card} /></div>;
          })}
          {cardsClothe && cardsClothe.map((card: IClothe, index) => {
            return <div className={cn( s.item)} key={card.id} >
              <CardClothe isStats={isCardsStats}
                className={cn(s.card)}
                onClick={() => onHandle(true)}
                {...card} />
            </div>;
          })}
          {cardsClothe && <InfoCircle show={hover} x={coord.x || 0} y={coord.y || 0}>Craft</InfoCircle>}
        </div>
      </div>
    </div>
  );
});
Catalog.displayName = 'Catalog';
