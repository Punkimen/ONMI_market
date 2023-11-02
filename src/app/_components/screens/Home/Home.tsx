'use client';
import s from "./Home.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {CardsNavigations} from "@/app/_components/blocks/CardsNavigations/CardsNavigations";
import {Routes} from "@/app/_utils/Routes";
import {PhoneScreens} from "@/app/_components/blocks/PhoneScreens/PhoneScreens";
import {Question} from "@/app/_components/partials/Question/Question";
import {Platform} from "@/app/_components/blocks/Platform/Platform";
import React, {FC, useEffect, useState} from "react";
import {LineDecor} from "@/app/_components/partials/LineDecor/LineDecor";
import {useCatalogState, useQuestionsState} from "@/app/_state/store";
import {IBody, IClothe} from "@/app/_types/cards.types";
import {MarqueCatalog} from "@/app/_components/blocks/MarqueCatalog/MarqueCatalog";
import {Hero} from "@/app/_components/blocks/Hero/Hero";
import {useStore} from "zustand";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {SliderCatalog} from "@/app/_components/blocks/SliderCatalog/SliderCatalog";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";


export const Home: FC = () => {
  const clothes: IClothe[] | undefined = useStore(useCatalogState, (state) => state?.clothes);
  const bodies: IBody[] | undefined = useStore(useCatalogState, (state) => state?.bodies);
  const windowWidth = useWindowWidth();
  const questions = useQuestionsState((state) => state?.questions);
  const [showCollectionsMob, setShowCollectionsMob] = useState(false); // Initial state is set to false

  useEffect(() => {
    if (windowWidth > 0 && windowWidth <= 450) {
      setShowCollectionsMob(true);
    } else if (windowWidth > 450) {
      setShowCollectionsMob(false);
    }
  }, [windowWidth]);
  return (
    <div className={s.content}>
      <Hero>
        <Title tag='h1' className={cn(s['gallery__title'], 'gradient-text')}>
          {!showCollectionsMob ?
            <span className={'text-line'}>onmi® Gallery</span>
            : <>
              <div className="row">onmi®</div>
              <div className="row">Gallery</div>
            </>
          }
        </Title>
        <Text className={s['gallery__text']}>
          <>
            <div className={'row'}>
              <span className={'text-line'}
                data-delay="0.1">Digital art with a story and the essential</span>
            </div>
            <div className={'row'}>
              <span className={'text-line'} data-delay="0.2">goods for Reality 2.0</span>
            </div>
          </>
        </Text>
      </Hero>
      <Catalog className={s.catalog} cardsOmi={bodies} hide={windowWidth <= 768} countsRow={4}
        label={'Omi'}/>
      <SliderCatalog className={s.catalog} cardsOmi={bodies} slidesPerView={3}
        hide={windowWidth > 768}/>


      <section className={s['omi-world']}>
        <div className="container">
          <Title tag={'h2'} className={s['omi-world__title']}>
            {windowWidth > 450 ? <>
              <div className="row">
                <div className={'text-line'}><span className='color_gray'>Omi</span> gives</div>
              </div>
              <div className="row">
                <div className={'text-line'}>you superpowers</div>
              </div>
            </> : <>
              <div className="row">
                <div className={'text-line color_gray'}>Omi</div>
              </div>
              <div className="row">
                <div className={'text-line'}>gives you</div>
              </div>
              <div className="row">
                <div className={'text-line'}>superpowers</div>
              </div>
            </>}
          </Title>
          <Text className={s['omi-world__text']}>
            <>
              <div className="row">
                <span className={'text-line'}>Intuitive. Addictive.</span>
              </div>
              <div className="row">
                <span className={'text-line'}>Designed for rewards.</span>
              </div>
            </>
          </Text>
          <CardsNavigations/>
        </div>
      </section>
      <section className={s.zero}>
        <div className="container">
          <Title tag='h2' className={s['zero__title']}>
            <div className={'text-line'}><span className='color_gray'>onmi®</span> zero</div>
          </Title>
          <Text className={s['zero__text']}>
            <div className='row'>
              <span className={'text-line'}>Pre collection. Only for sale</span>
            </div>
          </Text>
        </div>
        <div className={s.zero__wrapper}>
          <MarqueCatalog className={s.zero__catalog}
            cardsClothe={clothes}/>
        </div>
        <div className="container">
          <BtnBig color={'white'} className={cn(s.zero__btn)} href={Routes.CLOTHES}>
            Open collection
          </BtnBig>
        </div>
      </section>
      <section className={s.available}>
        <div className="container">
          <Title tag={'h2'} className={s.available__title}>
            {windowWidth > 450 ? <>
              <div className="row">
                <div className={'text-line'}><span className='color_gray'>Omi</span> available</div>
              </div>
              <div className="row">
                <div className={'text-line'} data-delay={0.1}>in onmi® game</div>
              </div>
            </> : <>
              <div className="row">
                <div className={'text-line'}><span className={'color_gray'}>Omi</span> available</div>
              </div>
              <div className="row">
                <div className={'text-line'}>in onmi®</div>
              </div>
              <div className="row">
                <div className={'text-line'}>game</div>
              </div>
            </>}
          </Title>
          <Text className={s['available__text']}>
            <>
              <div className="row">
                <span className={'text-line'}>Take four simple steps and start exploring</span>
              </div>
              <div className="row">
                <span className={'text-line'}>the ONMI world</span>
              </div>
            </>
          </Text>
          <PhoneScreens className={s.screens}/>
        </div>
        <div className={s.questions}>
          {questions.map((el, index) => {
            return <Question key={index} title={el.title} text={el.text}/>;
          })}
          <LineDecor position={"bottom"} className={s.questions__line}/>
        </div>
      </section>
      <Platform/>
    </div>
  );
};
