'use client';
import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import cn from 'classnames';
import s from './page.module.scss';
import {Title} from "@/app/_components/partials/Title/Title";
import {Text} from "@/app/_components/partials/Text/Text";
import bg from '@/../public/img/decor_bg.png';
import {BackgroundImage} from "@/app/_components/partials/BackgroundImage/BackgroundImage";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/state/dataClothes";


const Clothes: NextPage = () => {
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
export default Clothes;
