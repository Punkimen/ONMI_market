'use client';
import s from "./Clothes.module.scss";
import {BackgroundImage} from "@/app/_components/partials/BackgroundImage/BackgroundImage";
import bg from "../../../../../public/img/decor_bg.png";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/_state/dataClothes";
import React, {FC, useState} from "react";
import {Hero} from "@/app/_components/blocks/Hero/Hero";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {SliderCatalog} from "@/app/_components/blocks/SliderCatalog/SliderCatalog";
import {useCatalogState} from "@/app/_state/store";
import {CollectionsMob} from "@/app/_components/blocks/CollectionsMob/CollectionsMob";

export const Clothes: FC = () => {
  const windowWidth = useWindowWidth();
  const clothes = useCatalogState(state => state.clothes);
  return (
    <div className={s.content}>
      <Hero hide={windowWidth<=450}>
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
      <CollectionsMob hide={windowWidth>450}/>
      <section className={s.clothes} >
        {windowWidth > 768 ?
          <Catalog
            className={s.catalog} label={'hats'}
            cardsClothe={clothes.filter(el => el.category === 'hats')} countsRow={5}/>
          :
          <SliderCatalog className={s.catalog} cardsClothe={clothes.filter(el => el.category === 'hats')}
            label={'hats'} slidesPerView={3}
          />}

        {windowWidth > 768 ?
          <Catalog
            className={s.catalog} label={'hats'}
            cardsClothe={dataClothes.filter(el => el.category === 'shirts')} countsRow={5}/>
          :
          <SliderCatalog className={s.catalog}
            cardsClothe={dataClothes.filter(el => el.category === 'shirts')} label={'Shirts'}
            slidesPerView={3}
          />}
      </section>
    </div>
  );
};
