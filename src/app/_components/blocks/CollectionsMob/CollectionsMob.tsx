import React, {FC} from "react";
import s from './CollectionsMob.module.scss';
import bg from '@/../public/img/collection_bg.png';
import Image from "next/image";
import {IBaseComponents} from "@/app/_types/base.types";
import cn from "classnames";
export const CollectionsMob:FC<IBaseComponents> = ({className,hide})=>{
  if(hide) return null;
  return (
    <section className={cn(s.collection, className)}>
      <Image
        alt="Collection"
        src={bg}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="container">
        <div className={s.content}>
          <div className={s.season}>Season <br/>— 1</div>
          <div className={s.title}>Collection`1253
            Season start</div>
          <div className={s.coorp}>© ONMI — Ateliere </div>
        </div>
        <div className={s.info}>
          <div className={s.info__row}>
            <div className={s.info__label}>Author</div>
            <div className={s.info__value}>ONMI Creators</div>
          </div>
          <div className={s.info__row}>
            <div className={s.info__label}>release date</div>
            <div className={s.info__value}>10/12/2023</div>
          </div>
          <div className={s.info__row}>
            <div className={s.info__label}>quantity of items</div>
            <div className={s.info__value}>1000</div>
          </div>
          <div className={s.info__row}>
            <div className={s.info__label}>Exclusive items</div>
            <div className={s.info__value}>10</div>
          </div>
        </div>
        <div className={s.description}>
          <div className={s.description__title}>About collection</div>
          <div className={s.description__text}>You and your friend will receive 10 ONM coins after your friend starts the game Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. </div>
        </div>
      </div>
    </section>
  );
};
