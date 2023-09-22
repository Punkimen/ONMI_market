import {ICatalogProps} from "@/app/_components/blocks/Catalog/Catalog";
import React, {FC} from "react";
import cn from 'classnames';
import s from './SliderCatalog.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {CardOmi} from "@/app/_components/partials/CardOmi/CardOmi";
import {EffectFade, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {IBaseComponents} from "@/app/_types/base.types";

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

  if (hide) return null;

  return (
    <div className={cn(s.catalog, className)}>
      {label && <div className="container">
        <div className={cn(s.label, 'text-line')}>{label}</div>
      </div>
      }
      <div className={s.catalog__slider}>
        <Swiper
          className={s.slider}
          pagination={true}
          modules={[Pagination]}
          slidesPerView={3}

          breakpoints={{
            320: {
              slidesPerView: "auto",
              spaceBetween: 8,
              loop: true,
            },
            450: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 4,
            }
          }}
        >
          {cardsOmi && cardsOmi.map((card) => {
            return <SwiperSlide key={card.id} className={s.slide}>
              <CardOmi
                className={cn(s.card)} {...card} />
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};
