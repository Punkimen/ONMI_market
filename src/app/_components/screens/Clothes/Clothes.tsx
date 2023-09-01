'use client';
import s from "./Clothes.module.scss";
import {BackgroundImage} from "@/app/_components/partials/BackgroundImage/BackgroundImage";
import bg from "../../../../../public/img/decor_bg.png";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/state/dataClothes";
import React, {FC} from "react";

export const Clothes: FC = () => {
  return (
    <div className={s.content}>
      <BackgroundImage src={bg} alt={'decor'}/>
      <section className={s.hero}>
        <Title tag='h1' className={cn(s['hero__title'], 'gradient-text')}>
          onmi® zero
        </Title>
        <Text className={s['hero__text']}>
          <>
            <div className={'row'}>Take four simple steps and start exploring</div>
            <div className={'row'}>the ONMI world</div>
          </>
        </Text>
      </section>
      <section className={s.clothes}>
        <Catalog className={s.catalog} label={'hats'} cardsType={'clothes'}
                 cards={dataClothes.filter(el => el.category === 'hats')} countsRow={5}/>
        <Catalog className={s.catalog} label={'shirts'} cardsType={'clothes'}
                 cards={dataClothes.filter(el => el.category === 'shirts')} countsRow={5}/>
      </section>
    </div>
  )
}
