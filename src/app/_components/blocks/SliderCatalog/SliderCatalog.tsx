import {ICatalogProps} from "@/app/_components/blocks/Catalog/Catalog";
import React, {FC, useEffect, useState} from "react";
import cn from 'classnames';
import s from './SliderCatalog.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {EffectFade, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {IBaseComponents} from "@/app/_types/base.types";
import {CardClothe} from "@/app/_components/partials/CardClothe/CardClothe";
import {useWindowWidth} from "@/app/_hooks/useWindowWidth";

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
/*  const [breakpoints, setBreakpoints] = useState({});
  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (cardsOmi) {
      setBreakpoints({
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
      });
    } else if (cardsClothe) {
      setBreakpoints({
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
      });
    }
    console.log(breakpoints);
  }, [cardsOmi, cardsClothe, windowWidth]);*/


  if (hide) return null;

  return (
    <div className={cn(s.catalog, className)}>
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
          autoHeight={true}
          breakpoints={cardsOmi ?{
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
          } :{
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
              <CardOmi
                className={cn(s.card, s.card_omi)} {...card} />
            </SwiperSlide>;
          })}
          {cardsClothe && cardsClothe.map((card) => {
            return <SwiperSlide key={card.id} className={s.slide}>
              <CardClothe
                className={cn(s.card)} {...card} />
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};
