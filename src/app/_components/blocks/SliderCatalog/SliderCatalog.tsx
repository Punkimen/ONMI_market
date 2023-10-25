"use client";
import {ICatalogProps} from "@/app/_components/blocks/Catalog/Catalog";
import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import cn from 'classnames';
import s from './SliderCatalog.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper/types';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {IBaseComponents} from "@/app/_types/base.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {ModalClotheCraft} from "@/app/_components/partials/ModalClotheCraft/ModalClotheCraft";
import {useCatalogState} from "@/app/_state/store";
import {BtnBig} from "@/app/_components/partials/Buttons/BtnBig/BtnBig";
import {CraftProgress} from "@/app/_components/partials/CraftProgress/CraftProgress";
import Image from "next/image";
import stat1 from '@/../public/img/icons/stat_1.svg';
import stat2 from '@/../public/img/icons/stat_2.svg';
import stat3 from '@/../public/img/icons/stat_3.svg';
import modalImg from "@/../public/img/modal_clothe.png";
import {BtnReset} from "@/app/_components/partials/Buttons/BtnReset/BtnReset";

interface ISliderCatalogProps extends IBaseComponents, Omit<ICatalogProps, 'countsRow'> {
  slidesPerView?: number
}

const statsIcons = [stat1, stat2, stat3];
const stats = [11, 11, 11];
export const SliderCatalog: FC<ISliderCatalogProps> = ({
  label,
  cardsClothe,
  cardsOmi,
  className,
  isCardsStats = true,
  hide,
  slidesPerView
}) => {
  const [show, setShow] = useState(false);
  const clothe = useCatalogState(state => state.clothes[0]);
  const omis = useCatalogState(state => state.bodies[0]);

  const sliderRef = useRef<SwiperClass>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const windowWidth = useWindowWidth();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev();
  }, [sliderRef]);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext();
  }, [sliderRef]);

  const onHandle = (isShow: boolean) => {
    setShow(isShow);
  };

  if (hide) return null;

  return (
    <div className={cn(s.catalog, className)}>

      {cardsClothe &&
          <ModalClotheCraft onHandle={onHandle} imgSrc={modalImg} show={show} category={clothe.category}
            collection={clothe.collection} price={clothe.price}/>}
      {cardsOmi &&
          <ModalClotheCraft onHandle={onHandle} imgSrc={omis.imgSrc} show={show} category={"OMI"}
            type={'OMI'} model={omis.modelCategory} price={omis.price}/>}

      {label && <div className="container">
        <div className={cn(s.label, 'text-line')}>{label}</div>
      </div>
      }
      <div className={cn(s.catalog__slider, cardsClothe && s.catalog__slider_omi)}>
        <Swiper
          className={s.slider}
          pagination={true}
          modules={[Pagination]}
          slidesPerView={3}
          onSwiper={(swiper) => {
            setActiveSlide(swiper.activeIndex);
            setSlideLength(swiper.slides.length);
          }}
          onInit={(core: SwiperClass) => {
            // @ts-ignore
            sliderRef.current = core;
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          breakpoints={cardsOmi ? {
            320: {
              slidesPerView: "auto",
              spaceBetween: 8,
              loop: true,
            },
            451: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 4,
            }
          } : {
            320: {
              slidesPerView: 1,
              pagination: false,
            },
            451: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 4,
            }
          }}
        >
          {cardsOmi && cardsOmi.map((card) => {
            return <SwiperSlide key={card.id} className={cn(s.slide, cardsOmi && s.slide_omi)}>
              <CardOmi onClick={() => onHandle(true)}
                className={cn(s.card, s.card_omi)} {...card} />
            </SwiperSlide>;
          })}
          {cardsClothe && cardsClothe.map((card) => {
            return (
              <SwiperSlide key={card.id} className={s.slide}>
                <CardClothe onClick={() => onHandle(true)}
                  className={cn(s.card)} {...card} />
              </SwiperSlide>
            );
          })}
          {cardsClothe && <>
            <div className={s.btns} hidden={windowWidth > 450}>
              <BtnReset onClick={() => {
                handlePrev();
              }} className={cn(s.btn_arrow, s.btn_arrow_prev, activeSlide === 0 && s.hide )}>
                <svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M0.757661 16.0711L2.17188 17.4854L9.24294 10.4143L10.6572 9.00007L9.24294 7.58586L2.17188 0.514789L0.757661 1.929L7.82873 9.00007L0.757661 16.0711Z"
                    fill="inherit"/>
                </svg>
              </BtnReset>
              <BtnReset onClick={() => {
                handleNext();
              }} className={cn(s.btn_arrow, activeSlide === slideLength -1 && s.hide)}>
                <svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M0.757661 16.0711L2.17188 17.4854L9.24294 10.4143L10.6572 9.00007L9.24294 7.58586L2.17188 0.514789L0.757661 1.929L7.82873 9.00007L0.757661 16.0711Z"
                    fill="inherit"/>
                </svg>
              </BtnReset>
            </div>
            <div className={s.model} hidden={windowWidth > 450}>{cardsClothe[activeSlide].modelCategory}</div>
            <div className={s.stats} hidden={windowWidth > 450}>
              {cardsClothe[activeSlide].stats.map((el, index) => {
                return (
                  <div key={index} className={s.stat}>
                    <Image className={s[`img_${index + 1}`]} src={statsIcons[index]}
                      alt={'stat icon'}/>
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
            <CraftProgress className={s.craft} hide={windowWidth > 450}
              craftPoint={cardsClothe[activeSlide].craftPoint}
              craftPointMax={cardsClothe[activeSlide].craftPointMax}/>
            <BtnBig onClick={() => onHandle(true)} hidden={windowWidth > 450}>Craft</BtnBig>
          </>}
        </Swiper>
      </div>
    </div>
  );
};
