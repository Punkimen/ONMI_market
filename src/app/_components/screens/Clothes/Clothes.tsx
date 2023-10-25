'use client';
import s from "./Clothes.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/_state/dataClothes";
import React, {FC, useEffect, useState} from "react";
import {Hero} from "@/app/_components/blocks/Hero/Hero";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {SliderCatalog} from "@/app/_components/blocks/SliderCatalog/SliderCatalog";
import {useCatalogState} from "@/app/_state/store";
import {DropTimer} from "@/app/_components/partials/DropTimer/DropTimer";
import {ClothesCollection} from "@/app/_components/blocks/ClothesCollection/ClothesCollection";
import {Fashionable} from "@/app/_components/blocks/Fashionable/Fashionable";

export const Clothes: FC = () => {
  const windowWidth = useWindowWidth();
  const clothes = useCatalogState(state => state.clothes);

  const [showCollectionsMob, setShowCollectionsMob] = useState(false); // Initial state is set to false

  useEffect(() => {
    if (windowWidth && windowWidth <= 450) {
      setShowCollectionsMob(true);
    } else if (windowWidth) {
      setShowCollectionsMob(false);
    }
  }, [windowWidth]);


  return (
    <div className={s.content}>
      <Hero className={s.hero}>
        <Title tag='h1' className={cn(s['hero__title'], 'gradient-text')}>
          <span className={'text-line'}>onmi® Zero</span>
          <DropTimer className={cn(s.timer, 'opacity')} data-delay={'0.3'} label={'Drop/01'} />
        </Title>
        <Text className={s.text}>
          <>
            <div className={'row'}>
              <span className={'text-line'} data-delay={0.1}>The first and only collection available.</span>
            </div>
            <div className={'row'}>
              <span className={'text-line'} data-delay={0.2}>Already iconic.</span>
            </div>
          </>
        </Text>
        <ClothesCollection className={s.descr}/>
      </Hero>

      <section className={s.clothes}>
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
        {windowWidth > 768 ?
          <Catalog
            className={s.catalog} label={'pants'}
            cardsClothe={dataClothes.filter(el => el.category === 'pants')} countsRow={5}/>
          :
          <SliderCatalog className={s.catalog}
            cardsClothe={dataClothes.filter(el => el.category === 'pants')} label={'Pants'}
            slidesPerView={3}
          />}
        {windowWidth > 768 ?
          <Catalog
            className={s.catalog} label={'shoes'}
            cardsClothe={dataClothes.filter(el => el.category === 'shoes')} countsRow={5}/>
          :
          <SliderCatalog className={s.catalog}
            cardsClothe={dataClothes.filter(el => el.category === 'shoes')} label={'Shoes'}
            slidesPerView={3}
          />}
      </section>

      <Fashionable />

    </div>
  );
};
