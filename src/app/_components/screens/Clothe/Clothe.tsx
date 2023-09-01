'use client';
import React, {FC} from "react";
import {IClothe} from "@/app/_types/cards.types";
import s from "./Clothe.module.scss";
import Image from "next/image";
import {BtnSmall} from "@/app/_components/partials/BtnSmall/BtnSmall";
import {Catalog} from "@/app/_components/blocks/Catalog/Catalog";
import {dataClothes} from "@/app/state/dataClothes";
import stat1 from "@/../public/img/icons/stat_1.svg";
import stat2 from "@/../public/img/icons/stat_2.svg";
import stat3 from "@/../public/img/icons/stat_3.svg";
import stat4 from "@/../public/img/icons/stat_4.svg";
import hearts from "@/../public/img/icons/hearts.svg";
import cotton from "@/../public/img/icons/hearts.svg";
import leather from "@/../public/img/icons/leather.svg";

const statsIcons = [stat1, stat2, stat3, stat4]
const resourcesIcons = [hearts, cotton, leather]

interface IClotheProps {
  clothe: IClothe
}

export const Clothe: FC<IClotheProps> = ({clothe}) => {
  return (
    <section className={s.clothe}>
      <div className="container">
        <div className={s.img}>
          <Image src={clothe.imgSrc} quality={100} alt={'Clothe photo'}/>
        </div>
        <div className={s.info}>
          <div className={s.left}>
            <div className={s.category}>{clothe.category} #{clothe.id}</div>
            <div className={s.category}>collection #{clothe.collectionId}</div>
          </div>
          <div className={s.center}>
            <div className={s.stats}>
              {clothe.stats.map((el, index) => {
                return (
                  <div key={index} className={s.stat}>
                    <Image className={s[`img_${index + 1}`]} src={statsIcons[index]} alt={'stat icon'}/>
                    <span>{el}</span>
                  </div>
                )
              })}
            </div>
            <div className={s.stats}>
              {clothe.resources?.map((el, index) => {
                return (
                  <div key={index} className={s.stat}>
                    <Image className={s[`img_${index + 1}`]} src={resourcesIcons[index]} alt={'stat icon'}/>
                    <span>{el}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={s.right}>
            <div className={s.price}>${clothe.price}</div>
            <BtnSmall onClick={() => {
            }} className={s.btn__buy} type={'blue'}>Buy</BtnSmall>
          </div>
        </div>
      </div>
      <Catalog label={'similar'} cardsClothe={dataClothes.filter(el => el.category === clothe.category)} countsRow={5}/>
    </section>
  )
}
