import React, {FC} from "react";
import {IInvenCard} from "@/app/_types/cards.types";
import {IBaseComponents} from "@/app/_types/base.types";
import s from './IventCard.module.scss';
import cn from 'classnames';
import {Card} from "@/app/_components/partials/InventoryItems/Card/Card";
import Image from "next/image";
import stat1 from "@/../public/img/icons/stat_1.svg";
import stat2 from "@/../public/img/icons/stat_2.svg";
import stat3 from "@/../public/img/icons/stat_3.svg";

const statsIcons = [stat1, stat2, stat3];

interface IInvenCardProps extends IInvenCard, IBaseComponents {
  quality?: number;
}

export const IventCard: FC<IInvenCardProps> = ({imgSrc, className, quality, modelCategory, resources, ...props}) => {
  return (
    <Card className={cn(s.card, quality && s.omis, className)}>
      <div className={s.model}>{modelCategory}</div>
      <div className={s.img}>
        <Image src={imgSrc} alt={`clothe model ${modelCategory}`}/>
      </div>
      <div className={cn(s.info, quality && s.row)}>
        <div className={s.stats}>
          {resources && resources.map((el, index) => {
            return (
              <div key={index} className={s.stat}>
                <Image className={s[`img_${index + 1}`]} src={statsIcons[index]} alt={'stat icon'}/>
                <span>{el}</span>
              </div>
            );
          })}
        </div>
        {quality && <div className={s.quality}>{quality}%</div>}
      </div>
    </Card>
  );
};

