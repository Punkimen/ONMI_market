"use client";
import {ICatalogProps} from "@/app/_components/blocks/Catalog/Catalog";
import React, {FC, useEffect, useState} from "react";
import cn from 'classnames';
import s from './SliderCatalog.module.scss';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {EffectFade, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {IBaseComponents} from "@/app/_types/base.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";
import {ModalClotheCraft} from "@/app/_components/partials/ModalClotheCraft/ModalClotheCraft";
import {useCatalogState} from "@/app/_state/store";

interface ISliderCatalogProps extends IBaseComponents, Omit<ICatalogProps, 'countsRow'> {
  slidesPerView?: number
}

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
  const onHandle = (isShow: boolean) => {
    setShow(isShow);
  };

  const swiper = useSwiper();

  useEffect(() => {
    // Delay Swiper initialization until the content is fully loaded and visible
    const initializeSwiper = () => {
      swiper?.update();
      swiper?.updateSize();
    };

    if (cardsClothe || cardsOmi) {
      initializeSwiper();
    }
  }, [cardsClothe, cardsOmi, swiper]);


  if (hide) return null;

  return (
    <div className={cn(s.catalog, className)}>

      {cardsClothe &&
          <ModalClotheCraft onHandle={onHandle} imgSrc={clothe.imgSrc} show={show} category={clothe.category}
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
              loop: true,
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
            return <SwiperSlide key={card.id} className={s.slide}>
              <CardClothe onClick={() => onHandle(true)}
                className={cn(s.card)} {...card} />
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};
