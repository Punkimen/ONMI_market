'use client';
import s from "./Home.module.scss";
import {Title} from "@/app/_components/partials/Title/Title";
import cn from "classnames";
import {Text} from "@/app/_components/partials/Text/Text";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {CardsNavigations} from "@/app/_components/blocks/CardsNavigations/CardsNavigations";
import {dataClothes} from "@/app/state/dataClothes";
import {BtnSmall} from "@/app/_components/partials/BtnSmall/BtnSmall";
import {Routes} from "@/app/_utils/Routes";
import {PhoneScreens} from "@/app/_components/blocks/PhoneScreens/PhoneScreens";
import {Question} from "@/app/_components/partials/Question/Question";
import {Platform} from "@/app/_components/blocks/Platform/Platform";
import React, {useEffect} from "react";
import {cardsOmi} from "@/app/state/dataBodies";
import {questions} from "@/app/state/Questions";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

export const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <section className={s.gallery}>
        <div className="container">
          <Title tag='h1' className={cn(s['gallery__title'], 'gradient-text')}>
            <span className={'text-line'}>onmi® Gallery</span>
          </Title>
          <Text className={s['gallery__text']}>
            <>
              <div className={'row'}>
                <span className={'text-line'}>Take four simple steps and start exploring</span>
              </div>
              <div className={'row'}>
                <span className={'text-line'}>the ONMI world</span>
              </div>
            </>
          </Text>
        </div>
        <Catalog className={s.catalog} cards={cardsOmi} cardsType={'omi'} countsRow={4} label={'Omi Bodys'}/>
      </section>
      <section className={s['omi-world']}>
        <div className="container">
          <Title tag={'h2'}>
            <>
              <div className="row">
                <div><span className='color_gray'>Omi</span> opens up super</div>
              </div>
              <div className="row">
                <div>powers</div>
              </div>
            </>
          </Title>
          <Text className={s['omi-world__text']}>
            <>
              <div className="row">Take four simple steps and start exploring</div>
              <div className="row">the ONMI world</div>
            </>
          </Text>
          <CardsNavigations/>
        </div>
      </section>
      <section className={s.zero}>
        <div className="container">
          <Title tag='h2'>
            <><span className='color_gray'>onmi®</span> zero</>
          </Title>
          <Text className={s['zero__text']}>
            <div className='row'>Pre collection. Only for sale</div>
          </Text>
        </div>
        <Catalog className={s.zero__catalog} isCardsStats={false}
                 cards={dataClothes.filter(el => el.category === 'hats')} countsRow={5}/>
        <BtnSmall className={s.zero__btn} href={Routes.CLOTHES}>
          Open collection
        </BtnSmall>
      </section>
      <section className={s.available}>
        <Title tag={'h2'}>
          <>
            <div className="row">
              <div><span className='color_gray'>Omi</span> available</div>
            </div>
            <div className="row">
              <div>in onmi® game</div>
            </div>
          </>
        </Title>
        <Text className={s['available__text']}>
          <>
            <div className="row">Take four simple steps and start exploring</div>
            <div className="row">the ONMI world</div>
          </>
        </Text>
        <PhoneScreens className={s.screens}/>
        {questions.map((el, index) => {
          return <Question key={index} title={el.title} text={el.text}/>
        })}
      </section>
      <Platform/>
    </>
  )
}
