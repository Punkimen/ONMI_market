'use client';
import s from "./Clothes.module.scss";
import {BackgroundImage} from "@/app/_components/partials/BackgroundImage/BackgroundImage";
import bg from "../../../../../public/img/decor_bg.png";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/_state/dataClothes";
import React, {FC} from "react";
import {Hero} from "@/app/_components/blocks/Hero/Hero";

export const Clothes: FC = () => {
  return (
    <div className={s.content}>
      <Hero>
        <Title tag='h1' className={cn(s['hero__title'], 'gradient-text')}>
          onmi® Zero
        </Title>
        <Text className={s['']}>
          <>
            <div className={'row'}>Take four simple steps and start exploring</div>
            <div className={'row'}>the ONMI world</div>
          </>
        </Text>
      </Hero>
      <section className={s.clothes}>
        <Catalog
          className={s.catalog} label={'hats'}
          cardsClothe={dataClothes.filter(el => el.category === 'hats')} countsRow={5}/>
        <Catalog
          className={s.catalog} label={'shirts'}
          cardsClothe={dataClothes.filter(el => el.category === 'shirts')} countsRow={5}/>
      </section>
    </div>
  );
};
